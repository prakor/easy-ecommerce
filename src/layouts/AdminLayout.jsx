import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const menu = [
  {
    name: 'Dashboard',
    routeName: '/admin/dashboard',
  },
  {
    name: 'User',
    routeName: '/admin/users',
  },
  {
    name: 'Product',
    routeName: '/admin/products',
  },
  {
    name: 'Order',
    routeName: '/admin/orders',
  },
  {
    name: 'Logout',
    routeName: '/admin/login',
  },
]
const AdminLayout = () => {
  const location = useLocation()

  return (
    <>
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mx-4">
          {/* Page content here */}
          {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">
            Open drawer
          </label> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li className='text-3xl font-bold'><a>Easy backoffice</a></li>
            {menu.map((menu, index) => (
              <li key={index}>
                <Link
                  className={location.pathname === menu.routeName ? 'active' : ''}
                  to={`${menu.routeName}`}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  )
}

export default AdminLayout