import { Prisma, Organization } from "@prisma/client";
import prisma from "../app/lib/prisma";
import { create } from "domain";

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

  const tag = await prisma.tag.upsert({
    where: {
      tagIdentifier: { name: "volunteer", organizationId: organization.id },
    },
    update: {},
    create: {
      name: "volunteer",
      organizationId: organization.id,
    },
  });

  await prisma.record.upsert({
    where: { id: 1 },
    update: {
      externalSystemId: "234",
      firstName: "Ryann",
      lastName: "Chandler",
      fullName: "Ryann Chandler",
      phone: "615-210-8078",
      address: "72173 Smokey Hill Rd",
      city: "Antioch",
      state: "TN",
      zip: "37013",
      organizationId: organization.id,
      location: {
        longitude: 36.005784,
        latitude: -86.631192,
      },
    } as E3Record,
    create: {
      externalSystemId: "234",
      firstName: "Kristen",
      lastName: "Chandler",
      fullName: "Kristen Chandler",
      phone: "615-842-9506",
      address: "72173 Smokey Hill Rd",
      city: "Antioch",
      state: "TN",
      zip: "37013",
      organizationId: organization.id,
      tags: [tag.name],
      location: {
        longitude: 36.005784,
        latitude: -86.631192,
      },
    } as E3Record,
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
