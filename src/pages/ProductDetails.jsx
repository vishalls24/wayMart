import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useState } from "react";

import { products } from "../data/products";
import ProductCard from "../components/product/ProductCard";
import useShop from "../useShop";
import useToast from "../useToast";

import "../styles/pages/product-details.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const { showToast } = useToast();
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <main className="product-details-page">
        <div className="container">
          <section className="product-not-found">
            <ArrowLeft size={40} />

            <h1>Product Not Found</h1>

            <p>
              The product you're looking for doesn't exist or may have been
              removed.
            </p>

            <Link to="/products" className="back-btn">
              Back to Products
            </Link>
          </section>
        </div>
      </main>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    showToast(
      quantity > 1
        ? `${quantity} × ${product.name} added to cart`
        : `${product.name} added to cart`,
      "success",
    );
  };

  const wishlistActive = isInWishlist(product.id);

  const handleWishlist = () => {
    const alreadyInWishlist = isInWishlist(product.id);

    toggleWishlist(product);

    showToast(
      alreadyInWishlist
        ? `${product.name} removed from wishlist`
        : `${product.name} added to wishlist`,
      "success",
    );
  };

  const discount =
    product.discount ??
    (product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : 0);

  return (
    <main className="product-details-page">
      <div className="container">
        <Link to="/products" className="back-link">
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="product-details">
          <div className="product-image-section">
            <img
              src={product.image}
              alt={product.name}
              className="details-image"
            />
          </div>

          <div className="product-info">
            <span className="details-category">{product.category}</span>
            <h1>{product.name}</h1>
            {product.brand && (
              <p className="brand">
                Brand: <strong>{product.brand}</strong>
              </p>
            )}

            <div className="details-rating">
              <Star size={18} fill="currentColor" />
              <span>{product.rating}</span>
              <span className="reviews">({product.reviews || 0} reviews)</span>
            </div>

            <div className="details-price">
              <span className="current-price">
                ₹{product.price.toLocaleString()}
              </span>

              {product.originalPrice && (
                <span className="original-price">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}

              {discount > 0 && (
                <span className="discount">{discount}% OFF</span>
              )}
            </div>

            {product.stock !== undefined && (
              <div className="stock-status">
                {product.stock > 0
                  ? `${product.stock} items available`
                  : "Out of Stock"}
              </div>
            )}

            {product.description && (
              <p className="description">{product.description}</p>
            )}

            {product.colors && product.colors.length > 0 && (
              <div className="color-section">
                <h4>Color</h4>

                <div className="color-list">
                  {product.colors.map((color) => (
                    <button key={color} className="color-chip">
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="quantity-section">
              <h4>Quantity</h4>

              <div className="quantity-selector">
                <button
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                  disabled={quantity === 1}
                >
                  <Minus size={18} />
                </button>

                <span>{quantity}</span>

                <button
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <div className="product-actions">
              <button
                className="add-cart-btn"
                onClick={handleAddToCart}
                disabled={product.stock !== undefined && product.stock === 0}
              >
                <ShoppingCart size={20} />

                {product.stock !== undefined && product.stock === 0
                  ? "Out of Stock"
                  : "Add to Cart"}
              </button>

              <button
                className={`wishlist-btn ${wishlistActive ? "active" : ""}`}
                onClick={handleWishlist}
                aria-label={
                  wishlistActive ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                <Heart
                  size={20}
                  fill={wishlistActive ? "currentColor" : "none"}
                />

                {wishlistActive ? "Wishlisted" : "Wishlist"}
              </button>
            </div>
          </div>
        </div>

        <section className="related-products">
          <div className="section-header">
            <h2>You May Also Like</h2>
            <p>Explore more products you might love.</p>
          </div>

          <div className="related-grid">
            {products
              .filter(
                (item) =>
                  String(item.id) !== String(product.id) &&
                  item.category === product.category,
              )
              .slice(0, 4)
              .map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetails;
