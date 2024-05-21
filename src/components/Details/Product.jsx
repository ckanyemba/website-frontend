import { useState, useEffect } from "react";
import { setHeaders, url } from "../../features/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `${url}/products/find/${params.id}`,
          setHeaders()
        );

        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="ProductDetails">
            <img src={product.image?.url} alt="product" />
            <h3>{product.name}</h3>
            <p>
              <span>Type:</span>
              {product.type}
            </p>
            <p>
              <span>Description:</span>
              {product.desc}
            </p>
            <div>R{product.price?.toLocaleString()}</div>
            <button
              className="product-add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
