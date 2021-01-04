import React, {useEffect} from 'react';
import Product from '../Product/Product';
import './Products.css';

import {connect} from 'react-redux';
import {setProductsList} from '../../redux/actions';
import {getRef} from '../../utils/database';
import {PATH_PRODUCTS} from '../../utils/constants';
import Error from '../Error/Error';

function Products({setProductsList, productsList}) {
  useEffect(() => {
    const data = getRef(PATH_PRODUCTS);
    data.on('value', (snapshot) => {
      const data = snapshot.val();
      const productsList = [];
      for (const product in data) {
        productsList.push({productId: product, ...data[product]});
      }
      setProductsList(productsList);
    });
  }, []);

  return (
    <div className="Products">
      {productsList.length ? (
        productsList.map((product) => {
          const {title} = product;
          return <Product key={title} {...product} />;
        })
      ) : (
        <Error error={{message: 'Список пуст. Перейдите на страницу с формой добавления продукта.'}} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productsList: state.products.productsList
  };
};

const mapDispatchToProps = {
  setProductsList
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
