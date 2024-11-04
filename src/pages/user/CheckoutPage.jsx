import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { placeOrder } from '../../store/user/cartSlice'
const CheckoutPage = () => {
  const cartStore = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const totalPrice = cartStore.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const [userFormData, setUserFormData] = useState({
    email: '',
    name: '',
    address: '',
    note: '',
  })
  const formData = [
    { name: 'Email', field: 'email', type: 'email' },
    { name: 'Name', field: 'name', type: 'text' },
    { name: 'Address', field: 'address', type: 'textarea' },
    { name: 'Note', field: 'note', type: 'text' },
  ]

  const handleInputChange = (e, field) => {
    setUserFormData({ ...userFormData, [field]: e.target.value })
  }

  const payment = () => {
    dispatch(placeOrder(userFormData))
    navigate('/success')
  }

  return (
    <>
      <h1 className="text-3xl font-bold m-4">Checkout</h1>
      <div className="flex">
        <section className="flex-auto w-64 bg-base-200 p-8">
          {formData.map((item, index) => (
            <label key={index} className="form-control w-full">
              <div className="label">
                <span className="label-text">{item.name}</span>
              </div>
              {item.type === 'textarea' ? (
                <textarea
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  value={userFormData[item.field]}
                  onChange={(e) => handleInputChange(e, item.field)} />
              ) : (
                <input
                  type='text'
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  value={userFormData[item.field]}
                  onChange={(e) => handleInputChange(e, item.field)} />
              )}

            </label>
          ))}
          <button onClick={payment} className='btn btn-neutral w-full mt-4'>ชำระเงิน</button>
        </section>
        <section className="flex-auto w-32 bg-slate-200 p-8 px-2">
          {cartStore.map((item, index) => (
            <div key={index} className="flex bg-white m-4 py-4">
              <div className="flex-1">
                <img className='w-full p-4' src={item.imageUrl} alt="" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div><b>{item.name}</b></div>
                    <div>จำนวน: {item.quantity}</div>
                  </div>
                  <Link to='/cart'>Edit</Link>
                </div>
              </div>
            </div>
          ))}
          <div className="divider"></div>
          <div className='p-4'>
            <div><b>Order summary</b></div>
            <div className="flex justify-between">
              <div>ราคาสินค้าทั้งหมด</div>
              <div>{totalPrice}</div>
            </div>
            <div className="flex justify-between">
              <div>ค่าส่ง</div>
              <div>0</div>
            </div>
          </div>
            <div className="divider"></div>
            <div className="flex justify-between p-4">
              <div>ราคาทั้งหมด</div>
              <div>{totalPrice}</div>
            </div>
          
        </section>
      </div>
    </>
  )
}

export default CheckoutPage