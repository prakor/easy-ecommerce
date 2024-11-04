import React from 'react'

const Products = ({ list, addItemToCart }) => {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-4 mx-4">
        {list.map((product, index) => (
          <div key={index} className="card bg-base-100 w-full shadow-xl">
            <figure>
              <img className="w-full" src={product.imageUrl} alt={product.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.about}</p>
              <div className="card-actions justify-end">
                <button 
                  className="btn btn-primary"
                  onClick={() => addItemToCart(product)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Products