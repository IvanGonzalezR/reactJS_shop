import React from 'react'
import { OrderItem } from '../components/OrderItem'
import '../styles/MyOrder.scss'
import flechita from '@icons/flechita.svg';
import { AppContext } from '@context/AppContext';

const MyOrder = () => {

  const { state } = React.useContext(AppContext);

  const totalPrice = state.cart.reduce((prevVal, currentVal) => {
    return (prevVal + currentVal.price);
  }, 0);

  console.log(totalPrice);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {
          state.cart.map((item, index) => (
            <OrderItem product={item} key={index} indexValue={index} />
          ))
        }
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>{totalPrice}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
}

export { MyOrder };
