import { Prisma, PrismaClient, Record, Tag } from "@prisma/client";
import { getCreateQuery, getUpsertTags, joinRecordstoTags } from "./shared";
/**
 * Custom create method for addresses.
 * Prisma doesn't yet support geo types so we need to customize the creation of them
 * @param prisma
 * @returns
 */
const create = (prisma: PrismaClient) => async (input: { data: E3Record }) => {
  const { data } = input;
  const newRecord: E3Record = {
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
    tags: data.tags,
    location: {
      longitude: data.location.longitude,
      latitude: data.location.latitude,
    },
  };

  const recordQuery: Prisma.Sql = getCreateQuery(data);
  let tagQuery: Prisma.Sql | undefined;
  let tagsOnRecordQuery: Prisma.Sql | undefined;
  if (data.tags) {
    tagQuery = getUpsertTags(data.tags);
  }

  const record: Record = await prisma.$queryRaw(recordQuery);

  if (tagQuery) {
    const tags: Tag[] = await prisma.$queryRaw(tagQuery);
    tagsOnRecordQuery = joinRecordstoTags(record, tags);
    await prisma.$queryRaw(tagsOnRecordQuery);
  }

  return newRecord;
};

export default create;
