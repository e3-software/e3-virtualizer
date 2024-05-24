import { PrismaClient } from "@prisma/client";
import create from "./create";
import upsert from "./upsert";
import { searchByZip } from "./search";

export default (prisma: PrismaClient) => ({
  create: create(prisma),
  upsert: upsert(prisma),
  searchByZip: searchByZip(prisma),
});
