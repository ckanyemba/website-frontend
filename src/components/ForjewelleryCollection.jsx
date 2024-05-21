import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ForjewelleryCollection = () => {

const { items: data, status } = useSelector((state) => state.jewelleryCollections);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (jewelleryCollection) => {
    dispatch(addToCart(jewelleryCollection));
    navigate("/cart");
  };
 
  return (
    <div className="Home-container">
      <div className="hero-image">
        <img src="./images/Shoepage3.jpg" alt="Hero Image" />
      </div>
      {status === "success" ? (
        <>
          <h2> jewellery wear</h2>
          <div className="products">
            {data &&
              data.map((jewelleryCollection) => (
                <div key={jewelleryCollection._id} className="product-overlay">
                  <h3>{jewelleryCollection.name}</h3>
                  <img 
                  src={jewelleryCollection.image.url} 
                  alt={jewelleryCollection.name} 
                  className="product-image"
                  />
                  <Link to={`/jewelleryCollection/${jewelleryCollection._id}`}>
                    View Details
                  </Link>
                  <div className="product-details">
                    <span>{jewelleryCollection.desc}</span>
                    <span>{jewelleryCollection.content}</span>
                  </div>
                  <button onClick={() => handleAddToCart(jewelleryCollection)}>
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

export default ForjewelleryCollection;
