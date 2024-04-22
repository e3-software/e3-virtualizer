import prisma from '@/app/lib/prisma';

const Teams = async () => {
  const users = await prisma.user.findMany();
  return (
    <>
      {users.map(user => <div>{user.email}</div>)}
    </>
  )
}

export default Teams