'use server'

import { getOrgAndUser } from '@/app/lib/data/postLogin'

/**
 * Transforms clerk id's to app ids
 * @param clerkOrgId id of organization in clerk
 * @param clerkUserId id of user in clerk
 * @returns app org and user id's
 */
export const postLogin = async (clerkOrgId: string , clerkUserId: string): Promise<IAppUserInfo> => {
    const [organization, user] = await getOrgAndUser(clerkOrgId, clerkUserId)

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