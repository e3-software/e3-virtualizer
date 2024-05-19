import { Prisma, PrismaClient } from "@prisma/client";

/**
 * Generates a query for creating a new address record
 * @param newAddress
 * @returns
 */
export const getCreateQuery = (newAddress: AddressRecord) => {
  const point = `POINT(${newAddress.location.longitude} ${newAddress.location.latitude})`;
  const query: Prisma.Sql = Prisma.sql`
          INSERT INTO "Address" (
            "addressLine1",
            "addressLine2",
            "addressLine3",
            "city",
            "state",
            "zip",
            "organizationId",
            "location"
          ) VALUES (
            ${newAddress.addressLine1},
            ${newAddress.addressLine2},
            ${newAddress.addressLine3},
            ${newAddress.city},
            ${newAddress.state},
            ${newAddress.zip},
            ${newAddress.organizationId},
            ST_GeomFromText(${point}, 4326)
          )`;
  return query;
};

/**
 * Generates a query for updating an address record
 * @param updateAddress
 * @param id
 * @returns
 */
export const getUpdateQuery = (updateAddress: AddressRecord, id: number) => {
  const point = `POINT(${updateAddress.location.longitude} ${updateAddress.location.latitude})`;
  const query: Prisma.Sql = Prisma.sql`
          UPDATE "Address" SET
            "addressLine1" = ${updateAddress.addressLine1},
            "addressLine2" = ${updateAddress.addressLine2},
            "addressLine3" = ${updateAddress.addressLine3},
            "city" = ${updateAddress.city},
            "state" = ${updateAddress.state},
            "zip" = ${updateAddress.zip},
            "organizationId" = ${updateAddress.organizationId},
            "location" = ST_GeomFromText(${point}, 4326)
          WHERE id = ${id}`;

  return query;
};

/**
 * Attempts to fetch a record by id
 * @param prisma
 * @param id
 * @returns
 */
export const getById = async (
  prisma: PrismaClient,
  id: number,
): Promise<AddressRecord | null> => {
  const query: Prisma.Sql = Prisma.sql`
          SELECT 
            "addressLine1", 
            "addressLine2",
            "addressLine3",
            "city",
            "state",
            "zip",
            "organizationId",
            ST_X(location::geometry),
            ST_Y(location::geometry) 
          FROM "Address" 
          WHERE id = ${id}`;

  const rawResults: any = await prisma.$queryRaw(query);
  if (!rawResults.length) return null;

  const rawAddress = rawResults[0];

  const address: AddressRecord = {
    addressLine1: rawAddress.addressLine1,
    addressLine2: rawAddress.addressLine2,
    addressLine3: rawAddress.addressLine3,
    city: rawAddress.city,
    state: rawAddress.state,
    zip: rawAddress.zip,
    organizationId: rawAddress.organizationId,
    location: {
      latitude: rawAddress.st_x || 0,
      longitude: rawAddress.st_y || 0,
    },
  };

  return address;
};

export const mapRecord = (record: any) => {
  return {
    addressLine1: record.addressLine1,
    addressLine2: record.addressLine2,
    addressLine3: record.addressLine3,
    city: record.city,
    state: record.state,
    zip: record.zip,
    organizationId: record.organizationId,
    location: {
      latitude: record.st_x || 0,
      longitude: record.st_y || 0,
    } as AddressPoint,
  } as AddressRecord;
};
