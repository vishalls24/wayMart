import { NavLink, useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Moon,
  Sun,
  User,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { useEffect, useState } from "react";
import "../../styles/components/navbar.css";
import useShop from "../../useShop";
import useToast from "../../useToast";

const Navbar = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
  ];

  const { cartCount, wishlistCount, theme, toggleTheme } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setAccountOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    setAccountOpen(false);
    setMenuOpen(false);
    showToast("You have been logged out successfully.", "success");
    navigate("/auth");
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container navbar-container">
          <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-dot"></span>
            <span className="logo-text">WayMart</span>
          </NavLink>

          <nav className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-right">
            <div className="nav-actions">
              <NavLink
                to="/wishlist"
                className="icon-btn"
                aria-label="Wishlist"
              >
                <Heart size={20} />

                {wishlistCount > 0 && (
                  <span className="badge">{wishlistCount}</span>
                )}
              </NavLink>

              <NavLink
                to="/cart"
                className="icon-btn cart-btn"
                aria-label="Cart"
              >
                <ShoppingCart size={20} />

                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </NavLink>

              <button
                className="icon-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <div className="account-wrapper">
                <button
                  className="profile-btn"
                  aria-label="Account"
                  onClick={() => setAccountOpen((prev) => !prev)}
                >
                  <User size={18} />
                  <span>Account</span>
                </button>

                {accountOpen && (
                  <div className="account-menu">
                    <button
                      onClick={handleLogout}
                      className="account-menu-item logout-item"
                    >
                      <LogOut size={17} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            className="menu-btn"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-dot"></span>
            <span className="logo-text">WayMart</span>
          </NavLink>
        </div>

        <nav className="drawer-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "drawer-link active-link" : "drawer-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="drawer-actions">
          <NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>
            <Heart size={18} />
            <span>Wishlist</span>

            {wishlistCount > 0 && (
              <span className="drawer-badge">{wishlistCount}</span>
            )}
          </NavLink>

          <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
            <ShoppingCart size={18} />
            <span>Cart</span>
            {cartCount > 0 && <span className="drawer-badge">{cartCount}</span>}
          </NavLink>

          <button onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            <span>Theme</span>
          </button>

          <button onClick={handleLogout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
