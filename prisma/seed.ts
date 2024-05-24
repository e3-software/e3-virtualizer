import { Prisma, Organization } from "@prisma/client";
import prisma from "../app/lib/prisma";

const main = async () => {
  await prisma.user.upsert({
    where: { email: "ryann.chandler@gmail.com" },
    update: {},
    create: {
      email: "ryann.chandler@gmail.com",
      external_id: "user_2fWvJdbWbpUEYb5VJzvVTfjffSW",
    },
  });

  const organization: Organization = await prisma.organization.upsert({
    where: { external_id: "org_2fk3ro0INSSxZc88pCxWprTyI67" },
    update: {},
    create: {
      name: "test_organization",
      external_id: "org_2fk3ro0INSSxZc88pCxWprTyI67",
    },
  });

  const organization2: Organization = await prisma.organization.upsert({
    where: { external_id: "org_2g21iDEQ16ioKk98TpiLRMtuvVp" },
    update: {},
    create: {
      name: "test-org-2",
      external_id: "org_2g21iDEQ16ioKk98TpiLRMtuvVp",
    },
  });

  prisma.address.upsert({
    where: { id: 1 },
    update: {
      addressLine1: "72173 Smokey Hill Rd",
      city: "Antioch",
      state: "TN",
      zip: "37013",
      organizationId: organization.id,
      location: {
        longitude: 36.005784,
        latitude: -86.631192,
      },
    } as AddressRecord,
    create: {
      addressLine1: "7217 Smokey Hill Rd",
      city: "Antioch",
      state: "TN",
      zip: "37013",
      organizationId: organization.id,
      location: {
        longitude: -86.631136,
        latitude: 36.005771,
      },
    } as AddressRecord,
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
