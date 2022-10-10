import React from 'react'
import { ProductInfo } from '../components/ProductInfo';
import '../styles/ProductDetail.scss'

export const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="product-detail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
      <ProductInfo />
    </aside>
  )
}

export { ProductDetail }; 
