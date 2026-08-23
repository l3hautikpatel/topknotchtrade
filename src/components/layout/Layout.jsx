import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-svh flex flex-col bg-[#0D1F30] bg-technical-grid text-white relative selection:bg-amber selection:text-[#0D1F30]">
      <Navbar />
      <main key={pathname} className="flex-1 page-transition">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
