import { Link } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from "lucide-react";
import useShop from "../useShop";
import useToast from "../useToast";
import "../styles/pages/wishlist.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();
  const { showToast } = useToast();

  return (
    <main className="wishlist-page">
      <div className="container">
        <Link to="/products" className="back-link">
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <div className="wishlist-header">
          <h1>My Wishlist</h1>
          <p>
            {wishlist.length} {wishlist.length === 1 ? "Item" : "Items"}
          </p>
        </div>

        {wishlist.length === 0 ? (
          <section className="empty-wishlist">
            <Heart size={80} />
            <h2>Your Wishlist is Empty</h2>
            <p>Save your favourite products here and access them anytime.</p>
            <Link to="/products" className="browse-btn">
              Browse Products
            </Link>
          </section>
        ) : (
          <section className="wishlist-items">
            {wishlist.map((item) => (
              <article key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.name} />

                <div className="wishlist-info">
                  <span className="wishlist-category">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.brand}</p>
                  <div className="wishlist-price">
                    ₹{item.price.toLocaleString()}
                  </div>
                </div>

                <div className="wishlist-actions">
                  <button
                    className="move-cart-btn"
                    onClick={() => {
                      addToCart(item);
                      showToast(`${item.name} added to cart`, "success");
                    }}
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => {
                      removeFromWishlist(item.id);
                      showToast(`${item.name} removed from wishlist`, "info");
                    }}
                  >
                    <Trash2 size={18} />
                    <span>Remove</span>
                  </button>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
