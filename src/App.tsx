import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "@/pages/Home";
import { launchChatB2K, trackFunnel } from "@/lib/sovereignFunnelOS";

function AssessmentRedirect() {
  useEffect(() => {
    launchChatB2K("https://reso-fit.lovable.app");
  }, []);

  return null;
}

export default function App() {
  useEffect(() => {
    trackFunnel("page_view");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<AssessmentRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
