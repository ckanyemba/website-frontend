// Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic for handling the form submission here

    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
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

        <button type="submit">Submit</button>
      </form>

      <div className="reach-out-container">
        <h2>Reach Out</h2>
        <p>Contact us:</p>

        <p>Support Email: support@streetstylestash.co.za</p>
        <p>Sales Email: sales@streetstylestash.co.za</p>
        <p>Whatsapp: +44 7397 614899</p>
      </div>

      <div className="legal-stuff-container">
        <h2>Legal Stuff</h2>
        <p>Terms & conditions</p>
        <p>Privacy and cookies</p>
      </div>

      <div className="terms-conditions-container">
        <h3>Terms & Conditions</h3>
        <p>Updated: April 15th 2024.</p>
        <p>
          These terms and conditions ("Terms") govern your use of the Sculpture
          Africa website operated by Sculpture Africa ("us", "we",
          or "our"). Please read these Terms carefully before accessing or using
          the Site.
        </p>
        <p>
          By accessing or using the Site, you agree to be bound by these Terms.
          If you disagree with any part of the Terms, you may not access the
          Site.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Site, you agree to abide by these Terms. If
          you do not agree to these Terms, you may not use the Site.
        </p>
        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on the Site for personal,
          non-commercial transitory viewing only. This is the grant of a
          license, not a transfer of title, and under this license, you may not:
          Modify or copy the materials; Use the materials for any commercial
          purpose or for any public display (commercial or non-commercial);
          Attempt to decompile or reverse engineer any software contained on the
          Site; Remove any copyright or other proprietary notations from the
          materials; or Transfer the materials to another person or "mirror" the
          materials on any other server. This license shall automatically
          terminate if you violate any of these restrictions and may be
          terminated by Sculpture Africa at any time. Upon terminating your
          viewing of these materials or upon the termination of this license,
          you must destroy any downloaded materials in your possession whether
          in electronic or printed format.
        </p>
        <h2>3. Intellectual Property Rights</h2>
        <p>
          All content, including but not limited to text, graphics, logos,
          images, and software, on the Site is the property of Sculpture Africa
          or its licensors and is protected by copyright and other intellectual
          property laws. You may not modify, copy, reproduce, republish, upload,
          post, transmit, or distribute any material from the Site without prior
          written permission from Sculpture Africa.
        </p>
        <h2>4. Limitations</h2>
        <p>
          In no event shall Sculpture Africa or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on the Site, even if Sculpture Africa
          or a Sculpture Africa authorized representative has been notified
          orally or in writing of the possibility of such damage.
        </p>
        <h2>5. Revisions and Errata</h2>
        <p>
          The materials appearing on the Site could include technical,
          typographical, or photographic errors. Sculpture Africa does not
          warrant that any of the materials on the Site are accurate, complete,
          or current. Sculpture Africa may make changes to the materials
          contained on the Site at any time without notice. Sculpture Africa
          does not, however, make any commitment to update the materials.
        </p>
        <h2>6. Links</h2>
        <p>
          Sculpture Africa has not reviewed all of the sites linked to the Site
          and is not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by Sculpture Africa
          of the site. Use of any such linked website is at the user's own risk.
        </p>
        <h2>7. Modifications to Terms</h2>
        <p>
          Sculpture Africa may revise these Terms at any time without notice. By
          using the Site, you are agreeing to be bound by the then current
          version of these Terms.
        </p>
        <h2>8. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of South Africa, without regard to its conflict of law
          provisions.
        </p>
        <p>
          We, Sculptor Africa, reserve the right to review and amend any of
          these Terms of Service at our sole discretion. Upon doing so, we will
          update this page. Any changes to these Terms of Service will take
          effect immediately from the date of publication.
        </p>
        <p>These Terms of Service were last updated on 15 April 2024.</p>
      </div>
    </div>
  );
};

export default Contact;
