import React from 'react'
import '@styles/OrderItem.scss'
import close_icon from '@icons/icon_close.png';
import { AppContext } from '@context/AppContext';

const OrderItem = ({ product, indexValue }) => {

  const { removeFromCart } = React.useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  }

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[ 0 ]} alt="bike" />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={close_icon} alt="close" onClick={() => handleRemove(indexValue)} />
    </div>

  );
}

export { OrderItem };
