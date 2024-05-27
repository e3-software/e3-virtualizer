import { Prisma, PrismaClient } from "@prisma/client";
import { getCreateQuery, getById, getUpdateQuery } from "./shared";
import createRecords from "./create";

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
    create: E3Record | {};
  }) => {
    const { update, create, where } = input;

    const current: E3Record | null = await getById(prisma, where.id);

    let query: Prisma.Sql;
    let result: E3Record;

    if (current) {
      const mergedRecord = {
        ...current,
        ...update,
      } as E3Record;

      query = getUpdateQuery(mergedRecord, input.where.id);
      await prisma.$queryRaw(query);
      result = mergedRecord;
    } else {
      result = await createRecords(prisma)({ data: create as E3Record });
    }

    return result;
  };

export default upsert;
