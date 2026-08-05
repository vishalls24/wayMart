import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Toast from "./components/Toast";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true",
  );

  return (
    <>
      {loggedIn && <Navbar setLoggedIn={setLoggedIn} />}
      <Toast />

      <Routes>
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login setLoggedIn={setLoggedIn} />
            )
          }
        />

        <Route
          path="/"
          element={loggedIn ? <Home /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/products"
          element={loggedIn ? <Products /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/categories"
          element={loggedIn ? <Categories /> : <Navigate to="/auth" />}
        />

        <Route
          path="/about"
          element={loggedIn ? <About /> : <Navigate to="/auth" />}
        />

        <Route
          path="/products/:id"
          element={
            loggedIn ? <ProductDetails /> : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/cart"
          element={loggedIn ? <Cart /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/wishlist"
          element={loggedIn ? <Wishlist /> : <Navigate to="/login" replace />}
        />

      </Routes>
      {loggedIn && <Footer />}
    </>
  );
};

export default App;
