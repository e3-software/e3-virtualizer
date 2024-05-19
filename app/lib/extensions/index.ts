import { PrismaClient } from "@prisma/client";
import AddressExtension from "./address";

export default (prisma: PrismaClient) => {
  [AddressExtension].forEach((callback) => callback(prisma));

  return prisma.$extends({
    model: {
      address: AddressExtension(prisma),
    },
  });
};
