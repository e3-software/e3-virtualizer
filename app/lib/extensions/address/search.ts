import { Prisma, PrismaClient } from "@prisma/client";
import { mapRecord } from "./shared";

export const searchByZip =
  (prisma: PrismaClient) =>
  async (zip: string, radiusMiles: number = 1) => {
    const search: AddressPoint = {
      latitude: 36.174465,
      longitude: -86.76796,
    };
    const radiusMeters = 1609.344 * radiusMiles;
    const query: Prisma.Sql = Prisma.sql`
            SELECT 
              "id",
              "addressLine1",
              "addressLine2",
              "addressLine3",
              "city",
              "state",
              "zip",
              "organizationId"
            FROM "Address"
            WHERE ST_DWithin(location::geography, ST_MakePoint(${search.latitude} ${search.longitude}), ${radiusMeters})
    `;

    const resultsRaw: any = await prisma.$queryRaw(query);
    return resultsRaw.map(mapRecord);
  };
