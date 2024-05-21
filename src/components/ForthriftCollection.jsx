import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ForthriftCollection = () => {
  const { items: data, status } = useSelector((state) => state.thriftCollections);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (thriftCollection) => {
    dispatch(addToCart(thriftCollection));
    navigate("/cart");
  };
 
  return (
    <div className="Home-container">
      <div className="hero-image">
        <img src="./images/Shoepage2.jpg" alt="Hero Image" />
      </div>
      {status === "success" ? (
        <>
          <h2>street & thrift wear</h2>
          <div className="products">
            {data &&
              data.map((thriftCollection) => (
                <div key={thriftCollection._id} className="product-overlay">
                  <h3>{thriftCollection.name}</h3>
                  <img 
                  src={thriftCollection.image.url} 
                  alt={thriftCollection.name} 
                  className="product-image"
                  />
                  <Link to={`/thriftCollection/${thriftCollection._id}`}>
                    View Details
                  </Link>
                  <div className="product-details">
                    <span>{thriftCollection.desc}</span>
                    <span>{thriftCollection.content}</span>
                  </div>
                  <button onClick={() => handleAddToCart(thriftCollection)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occurred...</p>
      )}
    </div>
  );
};

export default ForthriftCollection;
