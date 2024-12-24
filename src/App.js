import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Phones from "./components/Phones.jsx";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs.jsx";
import Books from "./components/Books.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/admin/Dashboard";
import shipping from "./components/shipping";
import Search from "./components/tools/Search.jsx";
import Returns from "./components/Returns";
import Orders from "./components/admin/Orders";
import UserProfile from "./components/Details/UserProfile";
import Order from "./components/Details/Order";
import Product from "./components/Details/Product";
import Sculpture from "./components/Details/Sculpture";
import Socials from "./components/admin/Socials";
import Calendar from "./components/admin/Calendar";
import Products from "./components/admin/Products";
import SculptureNav from "./components/admin/SculptureNav.jsx";
import BookNav from "./components/admin/BookNav.jsx";
import BlogNav from "./components/admin/BlogNav.jsx";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";
import CreateSculpture from "./components/admin/CreateSculpture";
import CreateBlog from "./components/admin/CreateBlog";
import CreateBook from "./components/admin/CreateBook";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./features/authSlice";
import ProductsList from "./components/admin/list/ProductsList";
import SculpturesList from "./components/admin/list/SculpturesList";
import Sculptures from "./components/Sculptures.jsx";
import BlogsList from "./components/admin/list/BlogsList";
import BooksList from "./components/admin/list/BooksList";
import Users from "./components/admin/Users";
import MenuBar from "./components/MenuBar.jsx";
import Accessories from "./components/Accessories.jsx";
import Computers from "./components/Computers.jsx";
import Electronics from "./components/Electronics.jsx";
import Help from "./components/Help.jsx";
import Tracking from "./components/Tracking.jsx";
import Shop from "./components/Shop.jsx";
import Code from "./components/Code.jsx";
import MyAccount from "./components/user/MyAccount.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  const bgStyle = {
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/background.jpg"
    })`,
    backgroundSize: "cover", // Cover the entire container
    backgroundPosition: "center", // Center the background image
    height: "100%", // Full viewport height
    width: "100%" // Full viewport width
  };

  return (
    <div styles={bgStyle} className="App">
      <Router>
        <ToastContainer />
        <NavBar />
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/books" element={<Books />} />
          <Route path="/accessories/phones" element={<Phones />} />
          <Route path="/accessories/computers" element={<Computers />} />
          <Route path="/accessories/electronics" element={<Electronics />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/sculptures" element={<Sculptures />} />
          <Route path="/help" element={<Help />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/code" element={<Code />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shipping" element={<shipping />} />
          <Route path="/Returns" element={<Returns />} />
          <Route path="search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/sculpture/:id" element={<Sculpture />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/profile" element={<MyAccount />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="products" element={<Products />}>
              <Route index element={<ProductsList />} />
              <Route path="create-product" element={<CreateProduct />} />
            </Route>
            <Route path="nav-sculpture" element={<SculptureNav />}>
              <Route index element={<SculpturesList />} />
              <Route path="create-sculpture" element={<CreateSculpture />} />
            </Route>
            <Route path="nav-blog" element={<BlogNav />}>
              <Route index element={<BlogsList />} />
              <Route path="create-blog" element={<CreateBlog />} />
            </Route>
            <Route path="nav-book" element={<BookNav />}>
              <Route index element={<BooksList />} />
              <Route path="create-book" element={<CreateBook />} />
            </Route>

            <Route path="summary" element={<Summary />} />
            <Route path="users" element={<Users />} />
            <Route path="orders" element={<Orders />} />
            <Route path="socials" element={<Socials />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
