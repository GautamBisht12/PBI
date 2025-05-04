import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../components/dashboard/DashboardSidebar.jsx'
import DashboardHeader from '../components/dashboard/DashboardHeader.jsx'

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout