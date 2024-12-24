import React, { useState } from "react";
import axios from "axios";
import { url, setHeaders } from "../features/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [buttonColor, setButtonColor] = useState('red'); // State to manage button color

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
/*Change the messaging system in order to suit the one you are supposed to use */
    try {
      await axios.post("https://sa-frica-backend.vercel.app/api/transporter/send-email", formData);
      setButtonColor('green'); // Change button color on successful submission
      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setButtonColor('red'); // Ensure button stays red if there's an error
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button className="submit-button" type="submit" style={{ backgroundColor: buttonColor }}>Submit</button>
      </form>

      <div className="reach-out-container">
        <h2>Reach Out</h2>
        <p>Our customer support team is available 24/7 and our average response time is 24 hours.
        Our team can be contacted via:</p>
        <p>Phone: +27 84 727 0685</p>
        <p>Support Email: apadanapublishinghouse@gmail.com</p>
        <p>Sales: sales@sculptureafrica.co.za</p>
      </div>
{/*}
      <div className="legal-stuff-container">
        <h2>Legal Stuff</h2>
        <p>Terms & conditions</p>
        <p>Privacy and cookies</p>
      </div>

      <div className="terms-conditions-container">
        <h3>Terms & Conditions</h3>
        <p>Updated: June 15th 2024.</p>
      </div>
      */}
    </div>
  );
};

export default Contact;
