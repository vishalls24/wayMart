import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import "../../styles/components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-dot"></span>
              WayMart
            </Link>

            <p>
              Premium shopping experience with quality products, secure
              payments, and lightning-fast delivery.
            </p>

            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div>
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">FAQs</a>
            </div>
          </div>

          <div className="newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to get new arrivals and exclusive offers.</p>

            <form>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />

              <button type="submit" aria-label="Subscribe">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} WayMart. All rights reserved.</p>
          <span>Developed by Vishal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
