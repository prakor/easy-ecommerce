import React, { useState } from 'react'
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ListPage = () => {
  const productStore = useSelector(state => state.adminProduct.list)

  return (
    <>
      <div className='flex items-center justify-between my-4'>
        <div className='text-3xl font-bold'>Product</div>
        <div>
          <Link to={'/admin/product/create'} className='btn btn-neutral'>Add New</Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Updated At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {productStore.map((product, index) => (
              <tr key={index}>
                <th>{product.name}</th>
                <td>
                  <img src={product.image} className='w-12' />
                </td>
                <td>{product.price}</td>
                <td>{product.remainQuantity} / {product.quantity}</td>
                <td>
                  <div className='badge badge-success'>
                    {product.status}
                  </div>
                </td>
                <td>{product.updatedAt}</td>
                <td>
                  <div className='flex gap-2'>
                    <div className='btn btn-ghost'>
                      <FaRegEdit />
                    </div>
                    <div className='btn btn-ghost'>
                      <FaTrash />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListPage