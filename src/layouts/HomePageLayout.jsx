import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/Navbar.jsx'
import Footer from '../components/navigation/Footer.jsx'

function HomePageLayout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default HomePageLayout