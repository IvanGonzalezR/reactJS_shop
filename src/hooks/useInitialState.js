import React from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [ state, setState ] = React.useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [ ...state.cart, payload ],
    });
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index != payload),
    });
  }

  return {
    state,
    addToCart,
    removeFromCart
  }
}

export { useInitialState };