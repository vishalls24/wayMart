import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import useShop from "../useShop";
import useToast from "../useToast";
import "../styles/pages/cart.css";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useShop();

  const { showToast } = useToast();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = cart.length ? 199 : 0;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <main className="cart-page">
      <div className="container">
        <Link to="/products" className="back-link">
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>
            {cart.length} {cart.length === 1 ? "Item" : "Items"}
          </p>
        </div>

        {cart.length === 0 ? (
          <section className="empty-cart">
            <ShoppingBag size={80} />
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any products yet.</p>
            <Link to="/products" className="shop-btn">
              Shop Now
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {cart.map((item) => (
                <article key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <span className="cart-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.brand}</p>
                    <div className="cart-price">
                      ₹{item.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="cart-quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      <Minus size={16} />
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="cart-total">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => {
                      removeFromCart(item.id);
                      showToast(`${item.name} removed from cart`, "info");
                    }}
                  >
                    <Trash2 size={20} />
                  </button>
                </article>
              ))}
            </section>

            <aside className="order-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>₹{shipping.toLocaleString()}</span>
              </div>

              <div className="summary-row">
                <span>Tax (18%)</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>
              <button
                className="clear-cart-btn"
                onClick={() => {
                  clearCart();
                  showToast("All items removed from cart", "info");
                }}
              >
                Clear Cart
              </button>
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
