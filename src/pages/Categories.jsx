import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";
import { categories } from "../data/categories";
import { products } from "../data/products";
import "../styles/pages/categories.css";

const Categories = () => {
  const availableCategories = categories
    .filter((category) => category.name !== "All")
    .map((category) => ({
      ...category,
      items: products.filter((product) => product.category === category.name)
        .length,
    }));

  return (
    <main className="categories-page">
      <div className="container">
        <section className="categories-header">
          <span className="categories-label">
            <Package size={16} />
            Explore Collection
          </span>

          <h1>Shop by Category</h1>

          <p>
            Find the perfect products across our carefully selected categories.
          </p>
        </section>

        <section className="categories-grid">
          {availableCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="category-card"
              >
                <div className="category-icon">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                <div className="category-content">
                  <div className="category-title-row">
                    <h2>{category.name}</h2>

                    <span className="category-count">
                      {category.items} Products
                    </span>
                  </div>

                  <p>
                    Explore our {category.name.toLowerCase()} collection and
                    discover products you'll love.
                  </p>

                  <span className="category-link">
                    Shop Now
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </section>

        <section className="categories-cta">
          <div className="categories-cta-content">
            <span>Can't find what you're looking for?</span>
            <h2>Explore all products in one place.</h2>
          </div>

          <Link to="/products" className="categories-cta-btn">
            View All Products
            <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Categories;
