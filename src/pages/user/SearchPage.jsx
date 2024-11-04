import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch  } from 'react-redux'
import {  addToCart } from '../../store/user/cartSlice'
import Products from '../../components/Products'

const SearchPage = () => {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const query = searchParams.get('query')
  const productStore = useSelector(state => state.product.list)
  const [ filteredProducts, setFilteredProducts ] = useState(productStore)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  useEffect(() => {
    if (query) {
      const filtered = productStore.filter(product => 
        product.name.includes(query)
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(productStore)
    }
  }, [query, productStore])

  
  const addItemToCart = (product) => {
    dispatch(addToCart(product))
    navigate('/cart')
  }

  return (
    <>
      <div className="text-3xl m-4">
        Search: <b>{query}</b>
      </div>
      <Products
        list={filteredProducts} 
        addItemToCart={addItemToCart}/>
    </>
  )
}

export default SearchPage