import { useState, useEffect } from "react";
import { setHeaders, url } from "../../features/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Sculpture = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sculpture, setSculpture] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `${url}/sculptures/find/${params.id}`,
          setHeaders()
        );

        setSculpture(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleAddToCart = (sculpture) => {
    dispatch(addToCart(sculpture));
    navigate("/cart");
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="SculptureDetails">
            <img src={sculpture.image?.url} alt="Sculpture" />
            <h3>{sculpture.name}</h3>
            <p>
              <span>Type:</span>
              {sculpture.type}
            </p>
            <p>
              <span>Description:</span>
              {sculpture.desc}
            </p>
            <div>R{sculpture.price?.toLocaleString()}</div>
            <button
              className="Sculpture-add-to-cart"
              onClick={() => handleAddToCart(Sculpture)}
            >
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sculpture;
