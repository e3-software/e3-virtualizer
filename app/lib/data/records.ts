import prisma from "@/app/lib/prisma";
import { Prisma, Record } from "@prisma/client";
import BaseDataFetcher from "./base";

/**
 * All methods for fetching addresses should go here
 */
export class FetchRecords extends BaseDataFetcher {
  constructor() {
    super();
  }

  /**
   * Notice the use of queryWithOrg.
   * This method will find all the addresses by the active org and sort them by the provided sort, or desceding
   * order of the created at date
   * @param sortOrder
   * @returns List of addresses
   */
  byOrg(sortOrder: Prisma.SortOrder = "desc"): Promise<Record[]> {
    return prisma.record.findMany({
      where: this.queryWithOrg(),
      include: {
        recordToTags: {
          include: {
            tag: true,
          },
        },
      },
      orderBy: { createdAt: sortOrder },
    });
  }
}
