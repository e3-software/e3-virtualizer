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
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
