import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import useToast from "../useToast";
import "../styles/components/toast.css";

const Toast = () => {
  const { toasts, removeToast } = useToast();

  const getIcon = (type) => {
    switch (type) {
      case "error":
        return <AlertCircle size={20} />;

      case "info":
        return <Info size={20} />;

      case "success":
      default:
        return <CheckCircle size={20} />;
    }
  };

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <div className="toast-icon">{getIcon(toast.type)}</div>

          <p className="toast-message">{toast.message}</p>

          <button
            className="toast-close"
            onClick={() => removeToast(toast.id)}
            aria-label="Close notification"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
