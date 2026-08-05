import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ShopProvider } from "./context/ShopContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import "./styles/variables.css";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <ShopProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ShopProvider>
    </BrowserRouter>
);
