'use server';

import { Organization, User } from '@prisma/client';
import prisma from '@/app/lib/prisma'

/**
 * Performas a transaction to find the associated app user and organization
 * @param clerkOrgId 
 * @param clerkUserId 
 * @returns 
 */
export const getOrgAndUser = async (clerkOrgId: string, clerkUserId: string): Promise<[Organization | null, User | null]> => {
    return await prisma.$transaction([
        prisma.organization.findUnique({ where: { external_id: clerkOrgId } }),
        prisma.user.findUnique({ where: { external_id: clerkUserId } })
    ])
}
