import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  ChartBarIcon, 
  HomeIcon, 
  DocumentChartBarIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/24/outline'
import { useAuth, useClerk } from '@clerk/clerk-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Sales Report', href: '/dashboard/reports/sales', icon: ChartBarIcon },
  { name: 'Marketing Report', href: '/dashboard/reports/marketing', icon: DocumentChartBarIcon },
  { name: 'Operations Report', href: '/dashboard/reports/operations', icon: ChartBarIcon },
]

function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const { signOut } = useClerk()
  const { userId } = useAuth()
  
  return (
    <div className={`bg-gray-900 text-white flex flex-col transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Logo */}
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        {!collapsed && (
          <Link to="/" className="text-xl font-bold text-white">
            PowerVision
          </Link>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          {collapsed ? (
            <ChevronDoubleRightIcon className="h-5 w-5" />
          ) : (
            <ChevronDoubleLeftIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navigation links */}
      <div className="flex-1 py-6 flex flex-col justify-between">
        <nav className="px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center py-2 px-3 rounded-md transition ${
                  isActive
                    ? 'bg-primary-700 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className={`mr-3 h-6 w-6 flex-shrink-0 ${
                  collapsed ? 'mr-0 mx-auto' : ''
                }`} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>
        
        {/* Bottom links */}
        <div className="px-2 space-y-1">
          <Link
            to="/dashboard/settings"
            className="group flex items-center py-2 px-3 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition"
          >
            <Cog6ToothIcon className={`mr-3 h-6 w-6 flex-shrink-0 ${
              collapsed ? 'mr-0 mx-auto' : ''
            }`} />
            {!collapsed && <span>Settings</span>}
          </Link>
          
          <button
            onClick={() => signOut()}
            className="w-full group flex items-center py-2 px-3 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition"
          >
            <ArrowLeftOnRectangleIcon className={`mr-3 h-6 w-6 flex-shrink-0 ${
              collapsed ? 'mr-0 mx-auto' : ''
            }`} />
            {!collapsed && <span>Sign out</span>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar