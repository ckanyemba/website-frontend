import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ForarticleCollection = () => {
  const { items: data, status } = useSelector((state) => state.shoeCollections);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (shoeCollection) => {
    dispatch(addToCart(shoeCollection));
    navigate("/cart");
  };
 
  return (
    <div className="Home-container">
      <div className="hero-image">
        <img src="./images/Shoepage.jpg" alt="Hero Image" />
      </div>
      {status === "success" ? (
        <>
          <h2>We like Nice Shoes! 18 April 2024</h2>
          <div className="products">
            {data &&
              data.map((shoeCollection) => (
                <div key={shoeCollection._id} className="product-overlay">
                  <h3>{shoeCollection.name}</h3>
                  <img 
                  src={shoeCollection.image.url} 
                  alt={shoeCollection.name} 
                  className="product-image"
                  />
                  <Link to={`/shoeCollection/${shoeCollection._id}`}>
                    View Details
                  </Link>
                  <div className="product-details">
                    <span>{shoeCollection.desc}</span>
                    <span>{shoeCollection.content}</span>
                  </div>
                  <button onClick={() => handleAddToCart(shoeCollection)}>
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

export default ForarticleCollection;
