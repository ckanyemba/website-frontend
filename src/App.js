import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import CheckoutSuccess from "./components/CheckoutSuccess";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ForjewelleryCollection from "./components/ForjewelleryCollection";
import ForthriftCollection from "./components/ForthriftCollection";
import ForshoeCollection from "./components/ForshoeCollection";
import ForarticleCollection from "./components/ForarticleCollection";
import Catalogue from "./components/Catalogue";
import ForEvent from "./components/ForEvent";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/admin/Dashboard";
import shipping from "./components/shipping";
import Terms from "./components/Terms";
import Returns from "./components/Returns";
import Orders from "./components/admin/Orders";
import UserProfile from "./components/Details/UserProfile";
import Order from "./components/Details/Order";
import Product from "./components/Details/Product";
import JewelleryCollection from "./components/Details/JewelleryCollection";
import ThriftCollection from "./components/Details/ThriftCollection";
import ShoeCollection from "./components/Details/ShoeCollection";
import Socials from "./components/admin/Socials";
import Calendar from "./components/admin/Calendar";
import Products from "./components/admin/Products";
import NewEvents from "./components/admin/NewEvents";
import NewJewelleryCollections from "./components/admin/NewJewelleryCollections";
import NewThriftCollections from "./components/admin/NewThriftCollections";
import NewShoeCollections from "./components/admin/NewShoeCollections";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct";
import CreateEvent from "./components/admin/CreateEvent";
import CreateJewelleryCollection from "./components/admin/CreateJewelleryCollection";
import CreateThriftCollection from "./components/admin/CreateThriftCollection";
import CreateShoeCollection from "./components/admin/CreateShoeCollection";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./features/authSlice";
import ProductsList from "./components/admin/list/ProductsList";
import EventsList from "./components/admin/list/EventsList";
import Users from "./components/admin/Users";
import JewelleryCollectionsList from "./components/admin/list/JewelleryCollectionsList";
import ThriftCollectionsList from "./components/admin/list/ThriftCollectionsList";
import ShoeCollectionsList from "./components/admin/list/ShoeCollectionsList";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/street-and-thrift-wear" element={<ForthriftCollection />} />
            <Route path="/jewellery-wear" element={<ForjewelleryCollection />} />
            <Route path="/shoe-wear" element={<ForshoeCollection />} />
            <Route path="/street-style-medium" element={<ForarticleCollection />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/shipping" element={<shipping />} />
            <Route path="/Returns" element={<Returns />} />
            <Route path="Terms" element={<Returns />} />
            <Route path="/forevent" element={<ForEvent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/jewelleryCollection/:id" element={<JewelleryCollection />} />
            <Route path="/thriftCollection/:id" element={<ThriftCollection />} />
            <Route path="/shoeCollection/:id" element={<ShoeCollection />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/admin" element={<Dashboard />}>
              <Route path="products" element={<Products />}>
                <Route index element={<ProductsList />} />
                <Route path="create-product" element={<CreateProduct />} />
              </Route>

              <Route path="newjewelleryCollections" element={<NewJewelleryCollections />}>
                <Route index element={<JewelleryCollectionsList />} />
                <Route path="create-jewelleryCollection" element={<CreateJewelleryCollection />} />
              </Route>

              
              <Route path="newthriftCollections" element={<NewThriftCollections />}>
                <Route index element={<ThriftCollectionsList />} />
                <Route path="create-thriftCollection" element={<CreateThriftCollection />} />
              </Route>

              <Route path="newshoeCollections" element={<NewShoeCollections />}>
                <Route index element={<ShoeCollectionsList />} />
                <Route path="create-shoeCollection" element={<CreateShoeCollection />} />
              </Route>

              <Route path="events" element={<NewEvents />}>
                <Route index element={<EventsList />} />
                <Route path="create-event" element={<CreateEvent />} />
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
