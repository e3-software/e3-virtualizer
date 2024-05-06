'use server'

import prisma from '@/app/lib/prisma';

export const postLogin = async (clerkOrgId: string , clerkUserId: string): Promise<IAppUserInfo> => {
    const [organization, user] = await prisma.$transaction([
        prisma.organization.findUnique({ where: { external_id: clerkOrgId } }),
        prisma.user.findUnique({ where: { external_id: clerkUserId } })
    ])

    if(!organization?.id || !user?.id) {
        throw new Error("error converting clert to app data")
    }

    return {
        appOrgId: organization.id,
        appUserId: user.id
    }
}

export interface IAppUserInfo {
    appOrgId: number,
    appUserId: number
}