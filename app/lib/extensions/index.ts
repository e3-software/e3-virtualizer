import { PrismaClient } from "@prisma/client";
import RecordExtension from "./records";

export default (prisma: PrismaClient) => {
  [RecordExtension].forEach((callback) => callback(prisma));

  return prisma.$extends({
    model: {
      record: RecordExtension(prisma),
    },
  });
};
