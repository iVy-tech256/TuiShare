import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error";
  duration?: number; // Optional: auto-hide after duration (ms)
};

export default function Toast({
  message,
  type = "success",
  duration = 3000,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [message, duration]);

  if (!visible || !message) return null;

  return (
    <div
      className={`fixed top-6 right-6 px-4 py-2 rounded shadow-lg text-white font-semibold z-50 transition-opacity duration-300 ${
        type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {message}
    </div>
  );
}
