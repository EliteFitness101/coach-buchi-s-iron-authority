import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "@/components/layout/Layout";

// Pages (must match your repo structure)
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Membership from "@/pages/Membership";
import About from "@/pages/About";

/**
 * Sovereign OS Routing Layer (FINAL)
 * - Zero 404 system
 * - Clean funnel separation
 * - External ChatB2K handled outside this app
 */

export default function App() {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          {/* 🏠 HOME */}
          <Route path="/" element={<Home />} />

          {/* 🛍️ SHOP */}
          <Route path="/shop" element={<Shop />} />

          {/* 💳 MEMBERSHIP */}
          <Route path="/membership" element={<Membership />} />

          {/* 👤 ABOUT */}
          <Route path="/about" element={<About />} />

          {/* 🚀 ZERO-404 SAFETY NET */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>

      </Layout>

    </BrowserRouter>
  );
}