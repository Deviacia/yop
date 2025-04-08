import { AppFooter } from '@/modules/app-footer'
import { Link, Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <>
      <main>
        <div className="container mx-auto mt-5 px-5 lg:px-0">
          <Outlet />
        </div>
      </main>

      <AppFooter />
    </>
  )
}
