import { useState, useEffect } from "react";
import { setHeaders, url } from "../../features/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Gallery = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [gallery, setGallery] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `${url}/galleries/find/${params.id}`,
          setHeaders()
        );

        setGallery(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleAddToCart = (gallery) => {
    dispatch(addToCart(gallery));

    navigate("/cart");
  };

  return (
    <div>
      
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="GalleryDetails">
            
            <h3>{gallery.name}</h3>
            <p>
              <span>Type:</span>
              {gallery.type}
            </p>
            <p>
              <span>Description:</span>
              {gallery.desc}
            </p>
            <p>
              <span>Content:</span>
              {gallery.content}
            </p>
            <img src={gallery.image?.url} alt="gallery" />
            <div>
              ${gallery.prize?.toLocaleString()}
            </div>
            <button
              className="gallery-add-to-cart"
              onClick={() => handleAddToCart()}
            >
       
              Add To Cart
            </button>
            </div>
          </>
        )}
    </div>
  );
};

export default Gallery;

