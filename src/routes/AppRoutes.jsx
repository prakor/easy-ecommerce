import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../pages/user/HomePage'

const router = createBrowserRouter([
  { path: '/', element: <HomePage/>}
])

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default AppRoutes