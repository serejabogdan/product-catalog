import React, {useEffect} from 'react';
import Product from '../Product/Product';
import './Products.css';

import {connect} from 'react-redux';
import {setProductsList} from '../../redux/actions';
import {getRef} from '../../utils/database';
import {PATH_PRODUCTS} from '../../utils/constants';

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
      console.log(productsList);
    });
  }, []);

  return (
    <div className="Products">
      {productsList.map((product) => {
        const {productId, title, price, description, file, date, discount} = product;
        return (
          <Product
            key={title}
            title={title}
            description={description}
            file={file}
            price={price}
            date={date}
            discount={discount}
            productId={productId}
          />
        );
      })}
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
