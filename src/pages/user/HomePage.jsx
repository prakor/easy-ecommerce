import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Products from '../../components/Products'
import { addToCart } from '../../store/user/cartSlice'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const [ products, setProducts ] = useState([]);
  const productStore = useSelector(state => state.product);
  // const list = useSelector(state => state.product.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const addItemToCart = (product) => {
    dispatch(addToCart(product))
    navigate('/cart')
  }
  return (
    <>
      {/* hero */}
      <div className="hero bg-base-200 h-96">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">EASY SHOP</h1>
            <p className="py-6">
              keep on learning
            </p>
          </div>
        </div>
      </div>
      {/* product */}
      <Products 
        list={productStore.list}
        addItemToCart={addItemToCart}/>
      
    </>
  )
}

export default HomePage