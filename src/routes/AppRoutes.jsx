import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// user
import UserLayout from '../layouts/UserLayout'
import HomePage from '../pages/user/HomePage'
import SearchPage from '../pages/user/SearchPage'
import ProfilePage from '../pages/user/ProfilePage'
import CartPage from '../pages/user/CartPage'
import CheckoutPage from '../pages/user/CheckoutPage'
import SuccessPage from '../pages/user/SuccessPage'
// admin
import AdminLayout from '../layouts/AdminLayout'
import AdminLoginPage from '../pages/admin/LoginPage'
import DashboardPage from '../pages/admin/DashboardPage'
import AdminProductList from '../pages/admin/product/ListPage'
import AdminProductUpadte from '../pages/admin/product/UpdatePage'

import AdminUserList from '../pages/admin/user/ListPage'
import AdminUserUpdate from '../pages/admin/user/UpdatePage'

import AdminOrderList from '../pages/admin/order/ListPage'
import AdminOrderDetail from '../pages/admin/order/DetailPage'

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
  {
    path: '/admin/login',
    element: <AdminLoginPage/>
  },
  {
    path: '/admin',
    element: <AdminLayout/>,
    children: [
      { path: 'dashboard' , element: <DashboardPage/> },
      { path: 'products' , element: <AdminProductList/> },
      { path: 'product/create' , element: <AdminProductUpadte/> },
      { path: 'product/update/:id' , element: <AdminProductUpadte/> },
      { path: 'users' , element: <AdminUserList/> },
      { path: 'users/update/:id' , element: <AdminUserUpdate/> },
      { path: 'orders' , element: <AdminOrderList/> },
      { path: 'orders/detail/:id' , element: <AdminOrderDetail/> },
    ]
  }
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