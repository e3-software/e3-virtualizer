import { Prisma, PrismaClient } from "@prisma/client";
import { getCreateQuery, getById, getUpdateQuery } from "./shared";

/**
 * Attempts to either update or create a new address record
 * @param prisma
 * @returns
 */
const upsert =
  (prisma: PrismaClient) =>
  async (input: {
    where: { id: number };
    update: any;
    create: AddressRecord | {};
  }) => {
    const { update, create, where } = input;

    const current: AddressRecord | null = await getById(prisma, where.id);

    let query: Prisma.Sql;
    let result: AddressRecord;

    if (current) {
      const mergedRecord = {
        ...current,
        ...update,
      } as AddressRecord;

      query = getUpdateQuery(mergedRecord, input.where.id);
      result = mergedRecord;
    } else {
      query = getCreateQuery(create as AddressRecord);
      result = create as AddressRecord;
    }

    await prisma.$queryRaw(query);
    return result;
  };

export default upsert;
