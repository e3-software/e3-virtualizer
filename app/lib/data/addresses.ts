import prisma from '@/app/lib/prisma'
import { Address } from '@prisma/client'


export const fetchLastAddresses = async (): Promise<Address[]> => {
    return prisma.address.findMany({
        orderBy: [
            {
                createdAt: 'desc'
            }
        ]
    })
}

