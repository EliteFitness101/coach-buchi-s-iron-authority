import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Sovereign OS Boot Layer
 * (lightweight initialization only)
 */
if (typeof window !== "undefined") {
  console.log("ResoFit OS initialized");
}

createRoot(document.getElementById("root")!).render(<App />);