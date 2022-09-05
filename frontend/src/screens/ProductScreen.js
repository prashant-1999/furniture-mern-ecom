import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Price : Rs.{product.price}</li>
                <li>
                  Description:
                  <p>{product.description} <br/> 
                  
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">Rs.{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <section class="review-section">
        <h1 class="section-title">So what our <span>Customers </span>say about us ?</h1>

        <div class="review-container">
            <div class="review-card">
                <div class="user-dp" data-rating="4.9"><img src="./images/user1.JPG" class="dp" alt="user1"/></div>
                <h2 class="review-title"> best quality</h2>
                <p class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, accusantium.</p>
            </div>

            <div class="review-card">
                <div class="user-dp" data-rating="4.2"><img src="./images/user2.jpg"  class="dp" alt="user1"/></div>
                <h2 class="review-title">Fast Delivery</h2>
                <p class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, accusantium.</p>
            </div>

            <div class="review-card">
                <div class="user-dp" data-rating="4.5"><img src="./images/user3.jpeg" class="dp" alt="user1"/></div>
                <h2 class="review-title">More that my expectations</h2>
                <p class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, accusantium.</p>
            </div>

            <div class="review-card">
                <div class="user-dp" data-rating="4.7"><img src="./images/user4.jpeg" class="dp" alt="user1"/></div>
                <h2 class="review-title">best customer services</h2>
                <p class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, accusantium.</p>
            </div>

        </div>
    </section> */}

    
    
        </>
        
      )}
    </div>
  );
}
