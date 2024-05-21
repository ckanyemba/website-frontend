import React from "react";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <div>
      <h1 className="about-heading">Shipping Information</h1>

      <h2 className="about-heading"> Shipping Policy:</h2>
      <p className="about-text">
        At StreetStyleStash.co.za, we strive to deliver your fashion finds to
        you as swiftly as possible. Please review our shipping policy below for
        details on delivery times, fees, and any additional information
        regarding the shipment of your orders.
      </p>

      <h2 className="about-heading"> Delivery Times:</h2>
      <p className="about-text">
        Our standard delivery timeframe typically ranges from 3 to 7 business
        days within domestic regions. However, please note that delivery times
        may vary based on your location and any unforeseen circumstances.
      </p>

      <h2 className="about-heading"> Shipping Fees:</h2>
      <p className="about-text">
        Shipping fees are calculated based on various factors, including the
        shipping method selected, the weight of your order, and your delivery
        location. You will be provided with shipping fee details during the
        checkout process.
      </p>

      <h2 className="about-heading"> International Shipping:</h2>
      <p className="about-text">
        We offer international shipping to fashion enthusiasts around the
        globe. International shipping rates and delivery times may vary
        depending on your location. Please refer to our international shipping
        policy for further information.
      </p>

      <h2 className="about-heading"> Order Tracking:</h2>
      <p className="about-text">
        Once your order has been processed and shipped, you will receive a
        tracking number via email. You can use this tracking number to monitor
        the progress of your delivery.
      </p>

      <h2 className="about-heading"> Shipping Partners:</h2>
      <p className="about-text">
        We partner with trusted shipping carriers to ensure the safe and timely
        delivery of your orders. However, please note that we are not
        responsible for any delays or issues caused by third-party shipping
        carriers.
      </p>

      <h2 className="about-heading"> Returns and Exchanges:</h2>
      <p className="about-text">
        We understand that sometimes a fashion piece might not fit perfectly or
        meet your expectations. Please refer to our <Link to="/returns">returns and refunds</Link> policy for information on how to initiate a return or exchange.
      </p>

      <h2 className="about-heading"> Need Further Assistance?</h2>
      <p className="about-text">
        If you have any questions or concerns regarding our shipping policy or
        any other aspect of your shopping experience, please don't hesitate to
        contact our customer support team. We're here to help!
      </p>

      <h2 className="about-heading"> Policy Updates: </h2>
      <p className="about-text">
        Your satisfaction and trust are paramount to us. We may update our
        shipping policy from time to time to reflect any changes in our
        procedures or to comply with regulatory requirements. Please review our
        shipping policy periodically for any updates.
      </p>
    </div>
  );
};

export default Shipping;
