import { Prisma, PrismaClient, Tag, Record } from "@prisma/client";

/**
 * Generates a query for creating a new address record
 * @param newAddress
 * @returns
 */
export const getCreateQuery = (newRecord: E3Record) => {
  const point = `POINT(${newRecord.location.longitude} ${newRecord.location.latitude})`;
  const query: Prisma.Sql = Prisma.sql`
          INSERT INTO "Record" (
            "externalSystemId",
            "address",
            "firstName",
            "lastName",
            "fullName",
            "phone",
            "city",
            "state",
            "zip",
            "organizationId",
            "location"
          ) VALUES (
            ${newRecord.externalSystemId},
            ${newRecord.address},
            ${newRecord.firstName},
            ${newRecord.lastName},
            ${newRecord.fullName},
            ${newRecord.phone},
            ${newRecord.city},
            ${newRecord.state},
            ${newRecord.zip},
            ${newRecord.organizationId},
            ST_GeomFromText(${point}, 4326)
          )`;
  return query;
};

export const getUpsertTags = (tags: Tag[]) => {
  const query: Prisma.Sql = Prisma.sql`
    INSERT INTO "Tag" (
      "name",
       "organizationId"
    ) VALUES ${tags
      .map((tag: Tag) => {
        return `(${tag.name}, ${tag.organizationId})`;
      })
      .join(",")} 
      as new
      ON DUPLICATE KEY UPDATE
      "name" = new.name
  `;

  return query;
};

export const joinRecordstoTags = (record: Record, tags: Tag[]) => {
  const query: Prisma.Sql = Prisma.sql`
    INSERT INTO "TagsOnRecord" (
      "tagId",
      "recordId"
    ) VALUES ${tags
      .map((tag: Tag) => {
        return `(${tag.id}, ${record.id})`;
      })
      .join(",")}
  `;

  return query;
};

/**
 * Generates a query for updating an address record
 * @param updateRecord
 * @param id
 * @returns
 */
export const getUpdateQuery = (updateRecord: E3Record, id: number) => {
  const point = `POINT(${updateRecord.location.longitude} ${updateRecord.location.latitude})`;
  const query: Prisma.Sql = Prisma.sql`
          UPDATE "Record" SET
            "externalSystemId" = ${updateRecord.externalSystemId},
            "firstName" = ${updateRecord.firstName},
            "lastName" = ${updateRecord.lastName},
            "fullName" = ${updateRecord.fullName},
            "phone" = ${updateRecord.phone},
            "address" = ${updateRecord.address},
            "city" = ${updateRecord.city},
            "state" = ${updateRecord.state},
            "zip" = ${updateRecord.zip},
            "organizationId" = ${updateRecord.organizationId},
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
): Promise<E3Record | null> => {
  const query: Prisma.Sql = Prisma.sql`
          SELECT 
            "id",
            "externalSystemId",
            "address",
            "firstName",
            "lastName",
            "fullName",
            "phone",
            "city",
            "state",
            "zip",
            "organizationId",
            ST_X(location::geometry),
            ST_Y(location::geometry) 
          FROM "Record" 
          WHERE id = ${id}`;

  const rawResults: any = await prisma.$queryRaw(query);
  if (!rawResults.length) return null;

  const rawRecord = rawResults[0];

  const foundRecord: E3Record = {
    address: rawRecord.address,
    externalSystemId: rawRecord.externalSystemId,
    firstName: rawRecord.firstName,
    lastName: rawRecord.lastName,
    fullName: rawRecord.fullName,
    phone: rawRecord.phone,
    city: rawRecord.city,
    state: rawRecord.state,
    zip: rawRecord.zip,
    tags: [],
    organizationId: rawRecord.organizationId,
    location: {
      latitude: rawRecord.st_x || 0,
      longitude: rawRecord.st_y || 0,
    },
  };

  return foundRecord;
};

export const mapRecord = (record: any) => {
  return {
    address: record.address,
    externalSystemId: record.externalSystemId,
    firstName: record.firstName,
    lastName: record.lastName,
    fullName: record.fullName,
    phone: record.phone,
    city: record.city,
    state: record.state,
    zip: record.zip,
    tags: [],
    organizationId: record.organizationId,
    location: {
      latitude: record.st_x || 0,
      longitude: record.st_y || 0,
    } as RecordPoint,
  } as E3Record;
};
