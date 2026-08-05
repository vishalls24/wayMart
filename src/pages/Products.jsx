import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { products } from "../data/products";
import { categories } from "../data/categories";
import "../styles/pages/products.css";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const validCategory = categories.some(
    (category) => category.name === initialCategory,
  )
    ? initialCategory
    : "All";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(validCategory);
  const [sortBy, setSortBy] = useState("featured");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }

    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    let filtered = products.filter((product) => {
      const matchesSearch =
        !searchTerm ||
        product.name?.toLowerCase().includes(searchTerm) ||
        product.category?.toLowerCase().includes(searchTerm) ||
        product.brand?.toLowerCase().includes(searchTerm);

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      case "newest":
        filtered.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;

      case "featured":
      default:
        filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    return filtered;
  }, [search, selectedCategory, sortBy]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSortBy("featured");
    setSearchParams({});
  };

  const hasActiveFilters =
    search.trim() !== "" || selectedCategory !== "All" || sortBy !== "featured";

  return (
    <main className="products-page">
      <div className="container">
        <section className="products-header">
          <h1>Premium Electronics</h1>
          <p>
            Explore our latest collection of premium gadgets, accessories and
            smart devices.
          </p>
        </section>

        <section className="products-toolbar">
          <div className="search-field">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search-btn"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price : Low to High</option>
            <option value="price-high">Price : High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </section>

        <section className="category-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={
                selectedCategory === category.name
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => handleCategoryChange(category.name)}
            >
              {category.name}
            </button>
          ))}
        </section>

        <section className="products-info">
          <p>
            Showing <strong>{filteredProducts.length}</strong>{" "}
            {filteredProducts.length === 1 ? "Product" : "Products"}
          </p>

          {hasActiveFilters && (
            <button className="reset-filters-btn" onClick={resetFilters}>
              <X size={16} />
              Reset Filters
            </button>
          )}
        </section>

        <section className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="empty-products">
              <Search size={48} />
              <h2>No Products Found</h2>
              <p>Try changing your search or selected category.</p>
              <button onClick={resetFilters}>Reset Filters</button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Products;
