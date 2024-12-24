import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

const Sculptures = () => {
  const { items: data, status } = useSelector((state) => state.sculptures);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (sculpture) => {
    dispatch(addToCart(sculpture));
    navigate("/cart");
  };

  return (
    <>
      <div className="hero-image"></div>

      <div className="home-container">
        {status === "success" ? (
          <>
            {data &&
              data.map((sculpture) => (
                <div key={sculpture._id} className="sculpture-overlay">
                  <Link to={`/sculpture/${sculpture._id}`}>
                    <img
                      src={sculpture.image.url}
                      alt={sculpture.name}
                      className="sculpture-image"
                    />
                  </Link>
                  <div className="sculpture-details">
                    <h3>{sculpture.name}</h3>
                    <div className="details">
                      <span>{sculpture.desc}</span>
                      <span className="price">R{sculpture.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(sculpture)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </>
        ) : status === "pending" ? (
          <p>Loading...</p>
        ) : (
          <p>Unexpected error occurred...</p>
        )}
      </div>
    </>
  );
};

export default Sculptures;
