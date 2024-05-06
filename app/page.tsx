import { redirect } from "next/navigation"
import { auth, clerkClient } from "@clerk/nextjs/server"
import { postLogin, IAppUserInfo} from '@/app/actions/postLogin'

/**
 * This component is at the root of the app. When a user authenticates. We ensure that the user 
 * belongs to an organization and has an app id. Once we validate that, we set that in the 
 * clerk user metadata. This will ensure we don't have to do db lookups on each request as the 
 * metadata will already have the active org id for the app, and the users app id. 
 */
const BaseComponent = async () => {

  let { orgId, userId } = auth()

  if(!userId) {
    throw new Error('Error finding the current user')
  }

  if(!orgId) {
    const orgList = await clerkClient.users.getOrganizationMembershipList({ userId })
    if(orgList.data.length === 0) {
      throw new Error("User is not assigned to any organizations")
    }

    orgId = orgList.data[0].id
  }

  const result: IAppUserInfo = await postLogin(orgId, userId)

  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata:{...result}
    })
  } catch (exception: any) {
    throw new Error('Error setting user metadata')
  }
  

  redirect('/e3/dashboard')
}

export default BaseComponent