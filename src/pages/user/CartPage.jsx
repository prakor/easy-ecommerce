import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { removeItemInCart, updateQuantity } from '../../store/user/cartSlice'
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartStore = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState([1, 2, 3, 4, 5])
  const totalPrice = cartStore.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const handleQuantityChange = (e, index) => {
    dispatch(updateQuantity({ index, quantity: e.target.value }))
  }

  const handleRemoveItem = (index) => {
    dispatch(removeItemInCart(index))
  }
  return (
    <>
      <h1 className="text-3xl font-bold m-4">Shopping Cart</h1>

      <div className="flex">
        <div className="flex-auto w-64 bg-base-200 p-8">
          {cartStore.length === 0 ? (
            <div>
              Cart is empty
            </div>
          ) : (
            cartStore.map((item, index) =>
              <div key={index} className="flex">
                <div className="flex-1 w-full p-10">
                  <img src={item.imageUrl} alt="" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="relative grid grid-cols-2">
                        <div>
                          <div><b>{item.name}</b></div>
                          <div>{item.about}</div>
                          <div>{item.price} B</div>
                        </div>
                        <div>
                          <select
                            className="select w-50"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(e,index)}>
                            {quantity.map((q, index) =>
                              <option key={index}>{q}</option>)
                            }
                          </select>
                        </div>
                        <div onClick={() => handleRemoveItem(index)} className='absolute top-0 right-0'>
                          <FaXmark />
                        </div>
                      </div>
                    </div>
                    <div>In stock</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-auto w-32 bg-slate-200 p-8">
          <div className="text-xl font-bold">Order Summary</div>
          <div className="my-4 divide-y divide-base-200">
            <div className="flex justify-between py-4">
              <div>ราคาสินค้าทั้งหมด</div>
              <div>{totalPrice} B</div>
            </div>
            <div className="flex justify-between py-4">
              <div>ค่าส่ง</div>
              <div>0 B</div>
            </div>
            <div className="flex justify-between py-4">
              <div>ราคารวมทั้งหมด</div>
              <div>{totalPrice} B</div>
            </div>
            <Link to={'/checkout'} className="btn btn-block btn-neutral mt-4">ชำระเงิน</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage