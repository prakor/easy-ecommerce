import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadCheckout } from '../../store/user/cartSlice'

const SuccessPage = () => {
  const checkout = useSelector(state => state.cart.checkout)
  const dispatch = useDispatch()
  const [orderData, setOrderData] = useState({})

  useEffect(() => {
    dispatch(loadCheckout())
  }, [dispatch])

  useEffect(() => {
    if (checkout) {
      setOrderData(checkout)
    }
  }, [checkout])
  console.log(orderData);

  return (
    <>
      <div className="max-w-2xl mx-auto border border-slate-200 shadow-xl p-8 my-4">
        <div>
          <div className='text-2xl font-bold'>Your order is successful!</div>
          <div>Hi {orderData.name}</div>
          <div>รอรับสินค้า</div>
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-4 gap2">
          <div>
            <div className="font-bold">Order date</div>
            <div>{orderData.createdDate}</div>
          </div>
          <div>
            <div className="font-bold">Order Number</div>
            <div>{orderData.orderNumber}</div>
          </div>
          <div>
            <div className="font-bold">Payment method</div>
            <div>{orderData.paymentMethod}</div>
          </div>
          <div>
            <div className="font-bold">Address</div>
            <div>{orderData.address}</div>
          </div>
        </div>
        <div className="divider"></div>
        {orderData.products?.map((product, index) =>
          <div key={index} className="grid grid-cols-4 gap-2 mb-4 items-center">
            <img className='w-full' src={product.imageUrl} alt="" />
            <div><b>{product.name}</b></div>
            <div>จำนวน: {product.quantity}</div>
            <div>ราคารวม: {product.quantity * product.price}</div>
          </div>
        )}
        <div className="divider"></div>
        <div className="flex justify-between">
          <div className='font-bold'>ราคาสินค้าทั้งหมด</div>
          <div>{orderData.totalPrice}</div>
        </div>
        <div className="flex justify-between mt-4">
          <div className='font-bold'>ค่าส่ง</div>
          <div>0</div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between mt-4">
          <div className='font-bold'>ราคาทั้งสิ้น</div>
          <div>{orderData.totalPrice}</div>
        </div>
        <div className="divider"></div>
        <div>ขอบคุณ</div>
      </div>
    </>
  )
}

export default SuccessPage