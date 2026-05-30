import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// 🚀 SOVEREIGN FUNNEL OS INIT
import { initSovereignOS } from "@/lib/sovereignFunnelOS";

initSovereignOS();

createRoot(document.getElementById("root")!).render(<App />);