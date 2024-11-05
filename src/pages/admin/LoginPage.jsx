import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center">
      <div className='flex-1 max-w-2xl shadow-xl mx-auto p-8'>
        <div className="flex flex-col items-center">
          <div className="text-3xl">Login</div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="text" placeholder="Your email" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input type="password" placeholder="Your password" className="input input-bordered w-full" />
          </label>
          <Link to={'/admin/dashboard'} className='btn btn-neutral mt-4 w-full'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage