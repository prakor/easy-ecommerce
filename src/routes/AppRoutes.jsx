import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import HomePage from '../pages/user/HomePage'
import SearchPage from '../pages/user/SearchPage'
import ProfilePage from '../pages/user/ProfilePage'
import CartPage from '../pages/user/CartPage'
import CheckoutPage from '../pages/user/CheckoutPage'
import SuccessPage from '../pages/user/SuccessPage'
import { useDispatch } from 'react-redux'
import { loadCart } from '../store/user/cartSlice'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <UserLayout/>,
    children: [
      { path: '/', element: <HomePage/> },
      { path: 'profile', element: <ProfilePage/> },
      { path: 'search', element: <SearchPage/> },
      { path: 'cart', element: <CartPage/> },
      { path: 'checkout', element: <CheckoutPage/> },
      { path: 'success', element: <SuccessPage/> }
    ]
  },
])

const AppRoutes = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCart())
  },[])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default AppRoutes