import React from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [ products, setProducts ] = React.useState([]);

  React.useEffect(() => {
    // Immediately Invoked Function Expression
    (async function fetchData() {
      const response = await axios(API);
      setProducts(response.data);
    })();
  }, []);

  return {
    products,
  };
};

export { useGetProducts };