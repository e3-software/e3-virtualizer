import {
  Prisma,
  PrismaClient,
  Record,
  RecordToTags,
  Tag,
} from "@prisma/client";
import { getCreateQuery } from "./shared";
/**
 * Custom create method for addresses.
 * Prisma doesn't yet support geo types so we need to customize the creation of them
 * @param prisma
 * @returns
 */
const create =
  (prisma: PrismaClient) => async (input: { data: RecordWithTags }) => {
    const { data } = input;

    // Assign the input
    const newRecord: RecordWithTags = {
      externalSystemId: data.externalSystemId,
      firstName: data.firstName,
      lastName: data.lastName,
      fullName: data.fullName,
      phone: data.phone,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      organizationId: data.organizationId,
      recordToTags: data.recordToTags,
      location: {
        longitude: data.location.longitude,
        latitude: data.location.latitude,
      },
    };

    const { recordToTags }: { recordToTags: Tag[] | null } = data;

    // Perform query to insert single record
    // We can probably get more complex but we also have to parse any incoming tags
    // so we'll keep it one record for now
    const recordQuery: Prisma.Sql = getCreateQuery(data);
    const recordIds: Record[] = await prisma.$queryRaw(recordQuery);

    // If tags are present
    if (recordToTags) {
      // Attempt to create them. Allow the creation to fail since fields are unique
      // and we don't want duplicates
      await prisma.tag.createMany({
        data: recordToTags.map((tag: Tag) => {
          return {
            name: tag.name,
            organizationId: data.organizationId,
          } as Tag;
        }),
        skipDuplicates: true,
      });

      // once any new tags are created, we need to find all tags associated with the record
      const tagsToGet: Tag[] = await prisma.tag.findMany({
        where: {
          name: { in: recordToTags.map((tag: Tag) => tag.name) },
        },
      });

      // Create the association between the record and the tags
      await prisma.recordToTags.createMany({
        data: tagsToGet.map(
          (tag: Tag) =>
            ({ tagId: tag.id, recordId: recordIds[0].id }) as RecordToTags,
        ),
        skipDuplicates: true,
      });
    }

    return newRecord;
  };

export default create;
