import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";


const Catalogue = () => {
  const { items: data, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
 return (
   <div className="catalogue-container">
      {status === "success" ? (
        <>
          <h2>Sculpture Africa</h2>
         
            <div className="scuptures">
              {data &&
                data?.map((product) => (
                  <div key={product._id} className="sculpture-overlay">
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.image.url}
                        alt={product.name}
                        className="product-image"
                      />
                    </Link>
                    <div className="sculpture-details">
                      <h2>{product.name}</h2>
                      <h3>Stone Type</h3>
                      <div className="details">
                        <span>{product.desc}</span>
                        <span>{product.desc}</span>
                        <span className="price">R{product.price}</span>
                      </div>
                      <button onClick={() => handleAddToCart(product)}>
                        {" "}
                        Add to Cart{" "}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
         
        </>
      ) : status === "pending" ? (
        <p> Loading ... </p>
      ) : (
        <p>Unexpected error occured ... </p>
      )}

    </div>
  );
};

export default Catalogue;
