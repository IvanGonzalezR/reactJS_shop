import React, { useContext, useState } from 'react'
import '@styles/ProductItem.scss'
import addToCartImg from '@icons/bt_add_to_cart.svg'
import { AppContext } from '@context/AppContext'

const ProductItem = ({ product }) => {
  const { addToCart, state } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
    console.log(state);
  }

  return (
    <div className="ProductItem">
      <img src={product.images[ 0 ]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImg} />
        </figure>
      </div>
    </div>
  );
}

export { ProductItem };
