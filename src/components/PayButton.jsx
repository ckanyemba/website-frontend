import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems }) => {
 const user = useSelector((state) => state.auth);
 const subtotal = useSelector((state) => state.cart.cartTotalAmount); // Access subtotal from Redux state

 const handleCheckout = async () => {
    try {
      // Prepare the request body
      const requestBody = {
        subtotal, // Include the subtotal in the request body
        cartItems,
        userId: user._id,
      };

      // Make a POST request to your server's /api/yocoPayment/create-checkout endpoint
      const response = await axios.post("http://localhost:5000/api/yocoPayment/create-checkout", requestBody);

      // Redirect the user to the checkout URL
      if (response.data.checkoutUrl) {
        window.location.href = response.data.checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("An error occurred while creating the checkout session. Please try again later.");
    }
 };

 return (
    <>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </>
 );
};

export default PayButton;
