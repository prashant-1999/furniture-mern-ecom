import React, { useEffect } from 'react';

import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        <header class="header-section">
          <div className='heading-container'>
            <div>
              <h1 class="header-heading">Welcome to </h1>
            </div>
             <div>
             <h1 class="header-heading"> <span>B&S</span></h1>
             </div>
          </div>
        </header>
          <h1 className='featured-text'>Featured Products</h1>

          <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        </>
        
      )}
    </div>
  );
}
