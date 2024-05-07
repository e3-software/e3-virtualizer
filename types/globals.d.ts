import { Organization } from "@clerk/nextjs/server"

export {} 

declare global {
    interface CustomJwtSessionClaims {
        orgs: Organization[],
        publicMeta: {
            isAdmin?: boolean,
            appOrgId?: number,
            appUserId?: number
        }
    }
}