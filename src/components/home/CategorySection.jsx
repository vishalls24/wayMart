import { Link } from "react-router-dom";
import "../../styles/components/category.css";
import { categories } from "../../data/categories";
import { products } from "../../data/products";

const CategorySection = () => {
  const getCategoryCount = (categoryName) => {
    if (categoryName === "All") {
      return products.length;
    }

    return products.filter((product) => product.category === categoryName)
      .length;
  };

  return (
    <section className="categories">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-tag">Browse Collection</span>
            <h2>Shop By Category</h2>
            <p>Find your favorite products from our premium collections.</p>
          </div>

          <Link to="/categories" className="view-all-btn">
            View All →
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => {
            const Icon = category.icon;
            const productCount = getCategoryCount(category.name);

            return (
              <Link
                key={category.id}
                to={
                  category.name === "All"
                    ? "/products"
                    : `/products?category=${encodeURIComponent(category.name)}`
                }
                className="category-card"
              >
                <div className="category-icon">
                  <Icon size={34} />
                </div>

                <h3>{category.name}</h3>

                <span>
                  {productCount} {productCount === 1 ? "Product" : "Products"}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
