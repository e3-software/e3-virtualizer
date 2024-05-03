import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.create({
    data: {
      email: 'ryann.chandler@gmail.com',
      external_id: 'user_2fWvJdbWbpUEYb5VJzvVTfjffSW'
    }})
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
