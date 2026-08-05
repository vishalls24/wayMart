import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import useToast from "../useToast";
import "../styles/pages/login.css";

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isLogin = mode === "login";

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setShowPassword(false);

    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.email.trim().toLowerCase();
    const password = form.password;

    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        localStorage.setItem("loggedIn", "true");

        setLoggedIn(true);
        showToast(`Welcome back, ${savedUser.name}!`, "success");

        navigate("/");
      } else {
        showToast("Invalid email or password", "error");
      }

      return;
    }

    if (form.name.trim().length < 2) {
      showToast("Please enter your full name", "error");
      return;
    }

    if (password.length < 6) {
      showToast("Password must be at least 6 characters", "error");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.email === email) {
      showToast("An account with this email already exists", "error");
      return;
    }

    const newUser = {
      name: form.name.trim(),
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    showToast("Account created successfully!", "success");

    setForm({
      name: "",
      email: "",
      password: "",
    });

    setMode("login");
  };

  return (
    <main className="auth-page">
      <div className="auth-glow auth-glow-one"></div>
      <div className="auth-glow auth-glow-two"></div>

      <section className="auth-card">
        <div className="auth-brand">
          <div className="auth-brand-dot"></div>

          <span>WayMart</span>
        </div>

        <div className="auth-header">
          <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>

          <p>
            {isLogin
              ? "Login to continue shopping with WayMart."
              : "Create your WayMart account and start shopping."}
          </p>
        </div>

        <div className="auth-tabs">
          <button
            type="button"
            className={isLogin ? "auth-tab active" : "auth-tab"}
            onClick={() => switchMode("login")}
          >
            Login
          </button>

          <button
            type="button"
            className={!isLogin ? "auth-tab active" : "auth-tab"}
            onClick={() => switchMode("register")}
          >
            Register
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label htmlFor="name">Full Name</label>

              <div className="auth-input">
                <User size={18} />

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>
            </>
          )}

          <label htmlFor="email">Email</label>

          <div className="auth-input">
            <Mail size={18} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <label htmlFor="password">Password</label>

          <div className="auth-input">
            <Lock size={18} />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={
                isLogin ? "Enter your password" : "Create a password"
              }
              value={form.password}
              onChange={handleChange}
              autoComplete={isLogin ? "current-password" : "new-password"}
              required
            />

            <button
              type="button"
              className="auth-eye-btn"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {isLogin && (
            <div className="auth-options">
              <label className="remember-option">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-btn"
                onClick={() =>
                  showToast("Password recovery will be available soon.", "info")
                }
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button type="submit" className="auth-submit">
            <span>{isLogin ? "Login" : "Create Account"}</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <p className="auth-bottom">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <button
            type="button"
            onClick={() => switchMode(isLogin ? "register" : "login")}
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </p>

        <Link to="/" className="auth-home-link">
          Continue as guest
        </Link>
      </section>
    </main>
  );
};

export default Login;
