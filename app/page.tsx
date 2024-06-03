import { auth, clerkClient, Organization } from "@clerk/nextjs/server"
import { postLogin, IAppUserInfo, goToDashboard} from '@/app/actions'

/**
 * This component is at the root of the app. When a user authenticates. We ensure that the user 
 * belongs to an organization and has an app id. Once we validate that, we set that in the 
 * clerk user metadata. This will ensure we don't have to do db lookups on each request as the 
 * metadata will already have the active org id for the app, and the users app id. 
 */
const BaseComponent = async () => {

  let { orgId, userId,  sessionClaims } = auth()


  if(!userId || !sessionClaims) {
    throw new Error('Error Loading User from clerk')
  } 

  const { appUserId, appOrgId } = sessionClaims.publicMeta
  if(appUserId && appOrgId) {
    // If metadata is set, and we have app user and org id, then proced to app
    goToDashboard()
  }

  // If no app user and org id, try and find an org and user id and set it in metadata
  const userOrgs: Organization[] = sessionClaims.orgs
  if(!orgId) {
    if(userOrgs.length === 0) {
      throw new Error("User is not assigned to any organizations")
    }

    orgId = userOrgs[0].id
  }

  // We have clerk org and user id, We need to get app org and user id
  const result: IAppUserInfo = await postLogin(orgId, userId)

  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata:{
        ...sessionClaims.publicMeta, 
        ...result
      }
    })
  } catch (exception: any) {
    throw new Error('Error setting user metadata')
  }
  
  // Finally after user info in metadata, proceed to app
  goToDashboard()
}

export default BaseComponent
