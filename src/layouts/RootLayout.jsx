import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
    </div>
  )
}

export default RootLayout