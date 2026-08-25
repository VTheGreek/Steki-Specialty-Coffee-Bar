function Footer() {

  const businessEmail = "steki@example.com";

  function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;

    const subject = "Message from Steki website";

    const body = `Hello Steki,

I would like to get in touch with you.

My email is: ${email}`;

    const mailtoLink =
      `mailto:${businessEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">

            <h2>Steki</h2>

            <p>
              Your little place away from home.
            </p>

          </div>

          <div className="footer-contact">

            <h3>
              Get in touch
            </h3>

            <p>
              Have a question?
              <br />
              Send us your email and we'll get back to you.
            </p>

            <form
              className="email-form"
              onSubmit={handleSubmit}
            >

              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
              />

              <button type="submit">
                Send
              </button>

            </form>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Steki. All rights reserved.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;