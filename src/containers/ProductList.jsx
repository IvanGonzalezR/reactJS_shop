import React from 'react'
import { ProductItem } from '@components/ProductItem';
import '@styles/ProductList.scss';
import { useGetProducts } from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products?limit=50&offset=1';

const ProductList = () => {

  const { products, isLoading } = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );

}

export { ProductList };
