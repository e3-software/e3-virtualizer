"use server"
import { auth } from '@clerk/nextjs/server'

class BaseDataFetcher {
    
    constructor() {
        const { sessionClaims } = auth()

        // Throw error if active org not set on userSession
        if(!sessionClaims) throw Error('User Session not found')
        
        const { appOrgId } = sessionClaims?.publicMeta

        if(!appOrgId) throw Error('Active organization Not Found')

        this.baseOrgQuery = {
            organizationId: appOrgId
        }
    }

    protected baseOrgQuery: IBaseOrgQuery

    /**
     * This should be used when generating queries in order to automatically merge in the active org id
     * @param incomingWhere incoming where clause
     * @returns merges the incoming where clause with the active org id for the app
     */
    protected queryWithOrg(incomingWhere: any = {}) {
        return {
            ...incomingWhere,
            ...this.baseOrgQuery
        }
    }
}

interface IBaseOrgQuery {
    organizationId: number
}

export default BaseDataFetcher