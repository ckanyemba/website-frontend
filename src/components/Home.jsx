import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { items: data, status } = useSelector((state) => state.products);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home-container">
      <div className="hero-image">
        <iframe
          src="https://www.youtube.com/embed/Dc3ZEHI8p-w?autoplay=1&mute=1&loop=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <div className="hero-text">
          <h2>MISSION AND VALUES</h2>
          <div>
            <div>
              <span>
                <p>
                  Complete with a full zip closure and functional pockets, this
                  jacket seamlessly blends fashion and functionality. Pair it
                  with your favorite jeans for a casual yet chic look, or layer
                  it over a dress for added sophistication. Elevate your
                  wardrobe with the Red Spiderweb Jacket and unleash your inner
                  style icon.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {status === "success" ? (
        <>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product._id} className="product-overlay">
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.image.url}
                      alt={product.name}
                      className="product-image"
                    />
                  </Link>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <div className="details">
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
      <div className="hero-image">
        <img src="./images/Redjacket.jpg" alt="Hero Image" />
        <div className="hero-text">
          <h2>MISSION AND VALUES</h2>
          <div>
            <div>
              <span>
                <p>
                  Introducing our striking Red Spiderweb Jacket, a bold
                  statement piece that effortlessly merges style with attitude.
                  Crafted with meticulous attention to detail, this jacket is a
                  testament to both quality craftsmanship and unique design.
                </p>
              </span>
              <span>
                <p>
                  Each spiderweb is delicately embroidered, creating a striking
                  contrast against the rich red background. Constructed from
                  high-quality materials, this jacket is as durable as it is
                  stylish.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
