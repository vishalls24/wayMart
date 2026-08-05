import { Link } from "react-router-dom";
import "../../styles/components/hero.css";
import HeroImage from "../../assets/products/headphones.webp";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">Premium Shopping Experience</span>

          <h1>
            Discover
            <span> Smart Shopping </span>
            For Every Lifestyle.
          </h1>

          <p>
            Shop the latest electronics, fashion, furniture, and lifestyle
            essentials with premium quality, unbeatable prices, and
            lightning-fast delivery.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-btn">
              Shop Now
              <ArrowRight size={18} />
            </Link>

            <Link to="/products" className="secondary-btn">
              Explore
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={HeroImage} alt="Hero Product" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
