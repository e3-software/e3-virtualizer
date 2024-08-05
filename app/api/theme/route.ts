import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export const POST = async (
  req: NextRequest,
  res: NextResponse<ResponseData>,
) => {
  const { userId, sessionClaims } = getAuth(req);

  console.log(res);
  if (!userId) return;

  const data = await req.json();

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
  return res.status(200).json({ message: "ok" });
};
