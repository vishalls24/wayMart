import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "../../styles/components/product-card.css";
import useShop from "../../useShop";
import useToast from "../../useToast";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const {
    id,
    name,
    category,
    image,
    price,
    originalPrice,
    rating,
    reviews,
    isNew,
  } = product;

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  const { showToast } = useToast();

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} className="product-image" />
        </Link>

        <div className="product-badges">
          {isNew && <span className="new-badge">NEW</span>}
          <span className="discount-badge">-{discount}%</span>
        </div>

        <button
          className={`wishlist-btn ${isInWishlist(product.id) ? "active" : ""}`}
          onClick={() => {
            const alreadyInWishlist = isInWishlist(product.id);

            toggleWishlist(product);

            showToast(
              alreadyInWishlist
                ? `${product.name} removed from wishlist`
                : `${product.name} added to wishlist`,
              "success",
            );
          }}
          aria-label="Wishlist"
        >
          <Heart
            size={18}
            fill={isInWishlist(product.id) ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="product-content">
        <span className="product-category">{category}</span>

        <Link to={`/products/${id}`} className="product-title">
          {name}
        </Link>

        <div className="product-rating">
          <Star size={16} fill="currentColor" strokeWidth={0} />
          <span>{rating}</span>
          <span className="review-count">({reviews} Reviews)</span>
        </div>

        <div className="product-price">
          <span className="current-price">₹{price.toLocaleString()}</span>
          <span className="original-price">
            ₹{originalPrice.toLocaleString()}
          </span>
        </div>

        <button
          className="add-cart-btn"
          onClick={() => {
            addToCart(product);
            showToast(`${product.name} added to cart`);
          }}
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
