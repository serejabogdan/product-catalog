import React from 'react';
import Product from '../Product/Product';
import './Products.css';

export default function Products() {
  const products = [1, 2, 3, 4];

  return (
    <div className="Products">
      {products.map((product) => (
        <Product key={product} />
      ))}
    </div>
  );
}
