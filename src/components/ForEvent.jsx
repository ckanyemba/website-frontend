import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ForEvent = () => {
  const { items: data, status } = useSelector((state) => state.events);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    dispatch(addToCart(event));
    navigate("/cart");
  };
 
  return (
    <div className="events-container">
      {status === "success" ? (
        <>
          <h2>New Events</h2>
          <div className="events">
            {data &&
              data?.map((event) => (
                <div key={event._id}>
                  <h3>{event.name}</h3>
                  <img src={event.image.url} alt={event.name} />
                  <Link to={`/event/${event._id}`}>
                  </Link>
                  <div className="details">
                    <span>{event.desc}</span>
                    <span>{event.content}</span>
                  </div>
                  <button onClick={() => handleAddToCart(event)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default ForEvent;
