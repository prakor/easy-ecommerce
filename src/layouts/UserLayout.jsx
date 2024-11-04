import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Link, useNavigate } from 'react-router-dom'

const UserLayout = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [search, setSearch] = useState('')  
  const navigate = useNavigate()
  const cartStore = useSelector(state => state.cart.items)
  const summaryQuantity = cartStore.reduce((acc, item) => acc + item.quantity, 0)
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      setisLoggedIn(true)
    }
  }, [])
  const handleLogin = () => {
    setisLoggedIn(true)
    localStorage.setItem('isLoggedIn', true)
  }

  const handleLogout = () => {
    setisLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('cart-data')
    localStorage.removeItem('order-data ')
    window.location.reload()
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
    if (event.key === 'Enter') {
      navigate(`/search?query=${encodeURIComponent(search)}`)
    }
  }

  return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">EASY e-commerce</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input  onChange={(e) => setSearch(e.target.value)} onKeyUp={(e) => handleSearch(e)} value={search} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">{summaryQuantity}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">{summaryQuantity} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to={'/cart'} className="btn btn-primary btn-block">View cart</Link>
                </div>
              </div>
            </div>
          </div>
          {
            !isLoggedIn &&
            <button className="btn btn-ghost" onClick={handleLogin}>
              LOGIN
            </button>
          }
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to={'/profile'}>Profile</Link>
              </li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
      <footer className="footer bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  )
}

export default UserLayout