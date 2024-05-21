import React from "react";

const About = () => {
  // Example URLs for founder images
  const giftImageURL = "images/CEO";
  const carlosImageURL = "images/CEO";
  const chipoImageURL = "images/CEO";
  const craigImageURL = "images/CEO";

  return (
    <div className="about-background-image">
      <div className="hero-image">
        <img src="./images/Shoepage4.jpg" alt="Hero Image" />
      </div>
      <div className="about-container">
        <h1 className="about-heading">About Steet Style Stash:</h1>
        {/* Your existing content */}
        <p className="about-text">
          Street Styles Stash is a leading fashion destination, catering to
          individuals seeking trendy and unique Contemporary options. Our online
          platform showcases a diverse range of fashion pieces, curated to
          appeal to urban fashion enthusiasts. From streetwear staples to
          high-fashion statement pieces, we offer a wide selection of Contemporary
          and accessories to suit various tastes and styles.
        </p>
        <h1 className="about-heading">Our Mission:</h1>
        <div>
          <span>
            <h3>Mission and Values</h3>
            <p>
              At Street Styles Stash, we're committed to staying ahead of the
              fashion curve, constantly sourcing the latest trends and emerging
              styles from around the globe. Our team of fashion experts handpick
              each item, ensuring that every piece meets our standards of
              quality, style, and affordability.
            </p>
          </span>
        </div>
        {/* Your existing content */}
        <p className="about-text">
          With a passion for creativity and self-expression, we provide a
          platform for both established and emerging designers to showcase their
          talent. By supporting independent brands and designers, we aim to
          foster a vibrant and inclusive fashion community.
        </p>
        <div>
          <span>
            <h3>Artistic Excellence</h3>
            <p>
              Whether you're searching for everyday essentials or standout
              pieces to make a statement, Street Styles Stash has you covered.
              Join us in celebrating individuality and self-expression through
              fashion, and discover your unique style with us today.
            </p>
          </span>
        </div>
        <div>
          <span>
            <h3>Diverse Materials</h3>
            <p></p>
          </span>
        </div>
        <h1 className="about-heading">Global Reach</h1>
        {/* Your existing content */}
        <p className="about-text">
          Whether it's a monumental sculpture gracing a city square or a
          delicate piece adorning a private residence, each artwork carries with
          it a piece of Africa's rich cultural heritage.
        </p>
        <div>
          <span>
            <h3>Cultural Inspiration</h3>
            <p>
              Crafted with precision and an eye for detail, Street Style Stash
              places a premium on quality materials and meticulous
              craftsmanship. Our commitment to excellence ensures that each
              piece not only stands out in terms of design but also stands the
              test of time.
            </p>
          </span>
        </div>

        <h1 className="about-heading">Our Founder</h1>
        <div className="founder-profile">
          <div>
            <div className="founder-info">
              <h3>Founder: Gift Chirimuta</h3>
              <div className="companyImg">
                <img src="images/CEO.jpg" alt="Gift Chirimuta" />
              </div>
              <p>Position: CEO</p>
              <p>{/* Additional information about Gift Chirimuta */}</p>
            </div>
          </div>
          <div>
            <div className="founder-info">
              <h3>co-Founder: Carlos - SK-Capital</h3>
              <div className="companyImg">
                <img src="images/CSO.jpg" alt="Carlos - SK-Capital" />
              </div>
              <p>Position: Chief Designer</p>
              <p>{/* Additional information about Carlos - SK-Capital */}</p>
            </div>
          </div>
          <div>
            <div className="founder-info">
              <h3>co-Founder: Chipo Chikanda</h3>
              <div className="companyImg">
                <img src="images/COO.jpg" alt="Chipo Chikanda" />
              </div>
              <p>Position: COO</p>
              <p>{/* Additional information about Chipo Chirimuta */}</p>
            </div>
          </div>
          <div>
            <div className="founder-info">
              <h3>co-Founder: Craig Kanyemba</h3>
              <div className="companyImg">
                <img src="images/CTO.JPG" alt="Craig Kanyemba" />
              </div>
              <p>Position: CTO</p>
              <p>{/* Additional information about Craig Kanyemba */}</p>
            </div>
          </div>
          <p>In partnership with Sculpture Africa</p>
        </div>
      </div>
    </div>
  );
};

export default About;
