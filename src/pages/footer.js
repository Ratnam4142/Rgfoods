import React from "react";
import "../css/footer.css";
const Footer = () => {
  return (
         <footer className="hf-footer">
        <div className="container footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col">
            <h4>RPfoods</h4>
            <p className="muted">
              Missing mom's cooking? We're your food family.
            </p>
            <div className="footer-social">
              {/* WhatsApp (uses site's contact number) */}
              <a
                className="social-icon"
                href="https://wa.me/917981213612"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M20.52 3.47998C18.1199 1.07998 14.8599 0.159973 11.6699 0.999973C6.33993 2.37997 2.23995 6.71998 1.37995 12.03C0.749953 16.07 2.29995 19.95 5.34995 22.2499L4.18995 23.9999L6.56995 23.5199C8.63995 24.8699 11.0699 25.3999 13.4599 24.9499C18.8299 23.5899 22.9299 19.2499 23.7899 13.9399C24.6299 10.4399 23.8999 6.33998 20.52 3.47998Z"
                    fill="#25D366"
                  />
                  <path
                    d="M17.42 14.08C17.16 13.78 15.7 12.69 15.45 12.55C15.2 12.41 15.02 12.38 14.82 12.72C14.61 13.05 13.88 13.76 13.69 13.97C13.5 14.18 12.89 14.17 12.05 13.92C10.46 13.45 8.65 11.99 7.88 10.9C7.32 10.11 6.9 9.04 7.23 8.46C7.39 8.17 8 7.69 8.7 7.42C9.07 7.27 9.44 7.36 9.66 7.64C9.86 7.91 10.48 8.88 10.68 9.18C10.88 9.48 11.06 9.64 11.53 9.89C11.99 10.14 12.47 10.54 12.69 10.79C12.89 11.04 13.02 11.29 12.98 11.57C12.94 11.86 12.58 12.41 12.44 12.63C12.3 12.85 12.09 13.02 11.75 13.22C11.41 13.43 10.88 13.53 10.4 13.54C9.92 13.55 9.52 13.49 9.18 13.41C8.84 13.33 8.29 13.12 8.06 12.99C7.83 12.85 7.61 12.66 7.45 12.43"
                    stroke="white"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                className="social-icon"
                href="https://www.instagram.com/rpfoods_sweets_snacks?igsh=MTVsaGQ1bmowZHNjZA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="#555"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="#555"
                    strokeWidth="1.2"
                  />
                  <circle cx="17.5" cy="6.5" r="0.7" fill="#555" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                className="social-icon"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M22 12.07C22 6.48 17.52 2 11.93 2C6.34 2 1.86 6.48 1.86 12.07C1.86 17.06 5.78 21.2 10.57 22V14.89H8.19V12.07H10.57V9.88C10.57 7.54 11.99 6.2 14.18 6.2C15.18 6.2 16.24 6.38 16.24 6.38V8.69H15.01C13.8 8.69 13.43 9.43 13.43 10.2V12.07H16.09L15.61 14.89H13.43V22C18.22 21.2 22 17.06 22 12.07Z"
                    fill="#3b5998"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="footer-col">
            <h5>Contact Us</h5>
            <p className="muted">
              📞 <a href="tel:+917981213612">+91 7981213612</a>
              <br />
              ✉️{" "}
              <a href="mailto:hello@rpfoods.example">hello@rpfoods.example</a>
              <br />
              📍 Hyderabad, Telangana
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/#/menu">Menu & Order</a>
              </li>
              <li>
                <a href="/#/about">Our Story</a>
              </li>
              <li>
                <a href="/#/about">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Policies (Optional) */}
          <div className="footer-col">
            <h5>Help & Info</h5>
            <ul className="footer-links">
              <li>
                <a href="#/shipping">Shipping Policy</a>
              </li>
              <li>
                <a href="#/returns">Returns & Refunds</a>
              </li>
              <li>
                <a href="#/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom container">
          <small>
            © {new Date().getFullYear()} RPfoods — Handcrafted with love from
            our village kitchen to yours.
          </small>
          <div className="footer-legal">
            <a href="#/privacy">Privacy</a> • <a href="#/terms">Terms</a> •{" "}
            <a href="#/sitemap">Sitemap</a>
          </div>
        </div>
      </footer>
    );
};
export default Footer;