import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.upsert({
    where: { email: 'ryann.chandler@gmail.com'},
    update: {},
    create: {
      email: 'ryann.chandler@gmail.com',
      external_id: 'user_2fWvJdbWbpUEYb5VJzvVTfjffSW'
    }})

  await prisma.organization.upsert({
    where: { external_id: 'org_2fk3ro0INSSxZc88pCxWprTyI67'},
    update: {},
    create: {
      name: 'test_organization',
      external_id: 'org_2fk3ro0INSSxZc88pCxWprTyI67'
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
