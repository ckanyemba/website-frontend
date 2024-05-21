import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h1 className="about-heading">Terms and Conditions</h1>

      <h2 className="about-heading"> Acceptance of Terms:</h2>
      <p className="about-text">
        By accessing and using this website StreetStyleStash.co.za, you agree to abide by
        these terms and conditions and all applicable laws and regulations. If
        you do not agree with any of these terms, you are prohibited from using
        or accessing this site.
      </p>

      <h2 className="about-heading"> Use of the Site:</h2>
      <p className="about-text">
        You may use the Site for personal, non-commercial purposes only. You
        agree not to use the Site for any unlawful or prohibited activities.
      </p>

      <h2 className="about-heading"> Intellectual Property:</h2>
      <p className="about-text">
        All content on this Site, including text, graphics, logos, images, and
        software, is the property of Street Style Stash or its licensors and is
        protected by copyright and other intellectual property laws. You may not
        reproduce, distribute, modify, or republish any content from this Site
        without prior written consent.
      </p>

      <h2 className="about-heading"> Product Information:</h2>
      <p className="about-text">
        We make every effort to display accurate and up-to-date information
        about our products, including descriptions, pricing, and availability.
        However, we do not guarantee the accuracy or completeness of this
        information. Prices and availability are subject to change without
        notice.
      </p>

      <h2 className="about-heading"> Order Acceptance:</h2>
      <p className="about-text">
        By placing an order through this Site, you agree to provide accurate and
        complete information about yourself and your payment method. We reserve
        the right to refuse or cancel any order for any reason, including but
        not limited to product availability, errors in pricing or product
        information, or suspicion of fraudulent activity.
      </p>

      <h2 className="about-heading"> Shipping and Delivery:</h2>
      <p className="about-text">
        We will make every effort to ship orders promptly and to deliver them
        within the estimated timeframe. However, we are not responsible for
        delays or other issues caused by third-party shipping carriers.
      </p>
      <h2 className="about-heading"> Returns and Exchanges:</h2>
      <li>
        <Link to="/returns">returns and refunds</Link>
      </li>

      <h2 className="about-heading"> Policy Updates: </h2>
      <p className="about-text">
        Your privacy is important to us. Please review our Privacy Policy to
        understand how we collect, use, and protect your personal information.
      </p>
      <h2 className="about-heading"> Changes to Terms:</h2>
      <p className="about-text">
        We reserve the right to update or modify these terms and conditions at
        any time without prior notice. Your continued use of the Site after any
        such changes constitutes acceptance of the updated terms.
      </p>
      <h2 className="about-heading">Limitation of Liability:</h2>
      <p className="about-text">
        In no event shall Street Style Stash or its affiliates be liable for
        any direct, indirect, incidental, special, or consequential damages
        arising out of or in any way connected with your use of this Site or the
        purchase or use of any products or services obtained through this Site.
      </p>
    </div>
  );
};

export default Terms;
