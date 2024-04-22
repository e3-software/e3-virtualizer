import prisma from '@/app/lib/prisma';

const Teams = async () => {
  const users = await prisma.user.findMany();
  return (
    <>
      {users.map(user => <div key={`${user.email}_list_key`}>{user.email}</div>)}
    </>
  )
}

export default Teams