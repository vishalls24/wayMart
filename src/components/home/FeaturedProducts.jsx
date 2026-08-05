import { Link } from "react-router-dom";
import "../../styles/components/featured-products.css";
import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-tag">Featured Collection</span>
            <h2>Featured Products</h2>
            <p>Discover our most loved premium products.</p>
          </div>

          <Link to="/products" className="view-all-btn">
            View All →
          </Link>
        </div>

        <div className="product-grid">
          {products
            .filter((product) => product.featured)
            .slice(0, 8)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
