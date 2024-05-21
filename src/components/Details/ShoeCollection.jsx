import { useState, useEffect } from "react";
import { setHeaders, url } from "../../features/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ShoeCollection = () => {
  const params = useParams(); // Assuming 'id' is still used for some reason
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shoeCollection, setShoeCollection] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `${url}/shoeCollections/find/${params.id}`,
          setHeaders()
        );

        setShoeCollection(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleAddToCart = (shoeCollection) => {
    dispatch(addToCart(shoeCollection));
    navigate("/cart");
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="ProductDetails">
            <img src={shoeCollection.image?.url} alt="product" />
            <h3>{shoeCollection.name}</h3>
            <p>
              <span>Type:</span>
              {shoeCollection.type}
            </p>
            <p>
              <span>Description:</span>
              {shoeCollection.desc}
            </p>
            <div>R{shoeCollection.price?.toLocaleString()}</div>
            <button
              className="product-add-to-cart"
              onClick={() => handleAddToCart(shoeCollection)}
            >
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoeCollection;
