import { Prisma, PrismaClient } from "@prisma/client";
import { getCreateQuery } from "./shared";
/**
 * Custom create method for addresses.
 * Prisma doesn't yet support geo types so we need to customize the creation of them
 * @param prisma
 * @returns
 */
const create =
  (prisma: PrismaClient) => async (input: { data: AddressRecord }) => {
    const { data } = input;
    const newAddress: AddressRecord = {
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      addressLine3: data.addressLine3,
      city: data.city,
      state: data.state,
      zip: data.zip,
      organizationId: data.organizationId,
      location: {
        longitude: data.location.longitude,
        latitude: data.location.latitude,
      },
    };

    const query: Prisma.Sql = getCreateQuery(data);
    await prisma.$queryRaw(query);

    return newAddress;
  };

export default create;
