import { auth } from '@clerk/nextjs/server'

const Dashboard = () => {
  const { orgId } = auth()
  return (
    <>    
      <div>This is the start of the dashboard page</div>
      <div>This is the org id {orgId}</div>
    </>
  )
};

export default Dashboard;
