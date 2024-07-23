import { getAuth, clerkClient } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: Request, res: Response) => {
  const { userId, sessionClaims } = getAuth(req);

  if (!userId) return;

  // const data = await req.json();

  console.log(req);
  //   try {
  //     await clerkClient.users.updateUserMetadata(userId, {
  //       publicMetadata: {
  //         ...sessionClaims.publicMeta,
  //         ...result,
  //       },
  //     });
  //   } catch (exception: any) {
  //     throw new Error("Error setting user metadata");
  //   }
  return res.status(200).json({});
};
