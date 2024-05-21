import { useState, useEffect } from "react";
import { setHeaders, url } from "../../features/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const JewelleryCollection = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [jewelleryCollection, setJewelleryCollection] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `${url}/jewelleryCollections/find/${params.id}`,
          setHeaders()
        );

        setJewelleryCollection(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(jewelleryCollection));
    navigate("/cart");
  };

  return (
    <div>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <>
        <div className="ProductDetails">
          <img src={jewelleryCollection.image?.url} alt="product" />
          <h3>{jewelleryCollection.name}</h3>
          <p>
            <span>Type:</span>
            {jewelleryCollection.type}
          </p>
          <p>
            <span>Description:</span>
            {jewelleryCollection.desc}
          </p>
          <div>R{jewelleryCollection.price?.toLocaleString()}</div>
          <button
            className="product-add-to-cart"
            onClick={() => handleAddToCart(jewelleryCollection)}
          >
            Add To Cart
          </button>
        </div>
      </>
    )}
  </div>
  );
};

export default JewelleryCollection;
