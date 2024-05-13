import prisma from '@/app/lib/prisma'
import { Prisma, Address } from '@prisma/client'
import BaseDataFetcher from './base'

/**
 * All methods for fetching addresses should go here
 */
export class FetchAddress extends BaseDataFetcher {
    constructor() {
        super()
    }

    /**
     * Notice the use of queryWithOrg.
     * This method will find all the addresses by the active org and sort them by the provided sort, or desceding
     * order of the created at date
     * @param sortOrder 
     * @returns List of addresses
     */
    byOrg(sortOrder: Prisma.SortOrder = 'desc'): Promise<Address[]> {
        return prisma.address.findMany({
            where: this.queryWithOrg(),
            orderBy: { createdAt: sortOrder}
        })
    }
}   
