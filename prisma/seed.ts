import { PrismaClient, Organization, Address } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.upsert({
    where: { email: 'ryann.chandler@gmail.com'},
    update: {},
    create: {
      email: 'ryann.chandler@gmail.com',
      external_id: 'user_2fWvJdbWbpUEYb5VJzvVTfjffSW'
    }})

 const organization: Organization = await prisma.organization.upsert({
    where: { external_id: 'org_2fk3ro0INSSxZc88pCxWprTyI67'},
    update: {},
    create: {
      name: 'test_organization',
      external_id: 'org_2fk3ro0INSSxZc88pCxWprTyI67'
    }
  })

  const organization2: Organization = await prisma.organization.upsert({
    where: { external_id: 'org_2g21iDEQ16ioKk98TpiLRMtuvVp'},
    update: {},
    create: {
      name: 'test-org-2',
      external_id: 'org_2g21iDEQ16ioKk98TpiLRMtuvVp'
    }
  })
  
  const address: Address = await prisma.address.upsert({
    where: { id: 1 },
    update: {},
    create: {
      addressLine1: '7217 Smokey Hill Rd',
      city: "Antioch",
      state: "TN",
      zip: "37013",
      organizationId: organization.id
    }
  })

  const address2: Address = await prisma.address.upsert({
    where: { id: 2 },
    update: {},
    create: {
      addressLine1: '4808 Boxbury Lane',
      city: "OldHickory",
      state: "TN",
      zip: "37138",
      organizationId: organization2.id
    }
  })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
