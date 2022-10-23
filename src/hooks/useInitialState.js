import React from "react";

const initialState = {
  cart: [],
  toggleCart: false,
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

  const handleToggleCart = () => {
    setState({
      ...state,
      toggleCart: !state.toggleCart,
    });
  }

  return {
    state,
    addToCart,
    removeFromCart,
    handleToggleCart
  }
}

export { useInitialState };