"use server";
import { auth, clerkClient } from "@clerk/nextjs/server";

type ThemeData = {
  theme: string;
};

/**
 *
 * @param themeData {ThemeData} simple object representing theme state
 * @returns
 */
export const updateTheme = async (themeData: ThemeData): Promise<undefined> => {
  let { userId, sessionClaims } = auth();

  if (!userId || !sessionClaims) return;

  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...sessionClaims.publicMeta,
        ...themeData,
      },
    });
  } catch (exception: any) {
    throw new Error("Error setting user metadata");
  }
};
