import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.create({
    data: {
      email: 'schshmeagz@gmail.com',
      name: 'Schshmeagz',
    }})
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })