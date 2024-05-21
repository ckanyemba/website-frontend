import { useState, useEffect } from "react";
import { setHeaders, url } from "../../features/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ThriftCollection = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [thriftCollection, setThriftCollection] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `${url}/thriftCollections/find/${params.id}`,
          setHeaders()
        );

        setThriftCollection(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleAddToCart = (thriftCollection) => {
    dispatch(addToCart(thriftCollection));
    navigate("/cart");
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="ProductDetails">
            <img src={thriftCollection.image?.url} alt="thriftCollection" />
            <h3>{thriftCollection.name}</h3>
            <p>
              <span>Type:</span>
              {thriftCollection.type}
            </p>
            <p>
              <span>Description:</span>
              {thriftCollection.desc}
            </p>
            <p>
              <span>Content:</span>
              {thriftCollection.content}
            </p>
            <div>R{thriftCollection.price?.toLocaleString()}</div>
            <button className="product-add-to-cart" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ThriftCollection;
