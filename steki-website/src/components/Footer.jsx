import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Footer Header */}
        <div className="footer-header">
          <p className="footer-label">
            GET IN TOUCH
          </p>

          <h2>
            Come say
            <br />
            hello.
          </h2>
        </div>


        {/* Footer Content */}
        <div className="footer-content">

          {/* Contact Form */}
          <div className="footer-form-wrapper">

            <p className="footer-intro">
              Have a question, want to say hello,
              or simply want to get in touch?
              We'd love to hear from you.
            </p>

            <form className="footer-form">

              <div className="form-field">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>


              <div className="form-field">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  required
                />
              </div>


              <button
                type="submit"
                className="footer-submit"
              >
                Send Message
              </button>

            </form>

          </div>


          {/* Location */}
          <div className="footer-location">

            <div className="location-header">
              <p className="footer-label">
                FIND US
              </p>

              <p className="location-address">
                Steki Specialty Coffee Bar
                <br />
                Leuven, Belgium
              </p>
            </div>

            <div className="map-placeholder">
              <span>
                MAP
              </span>
            </div>

          </div>

        </div>


        {/* Footer Bottom */}
        <div className="footer-bottom">

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/steki_specialty_coffee_bar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a href="mailto:">
              Email
            </a>
          </div>

          <p>
            © 2026 Steki. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;