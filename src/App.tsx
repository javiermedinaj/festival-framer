import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./pages/404";
import LineUp from "./pages/LineUp";
import SustainabilityPage from "./pages/Sustainability";
import RecyclePage from "./pages/Recycle";
import GreenSpiritPage from "./pages/GreenSpirit";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/lineup" element={<LineUp />} />
          <Route path="/sustentabilidad" element={<SustainabilityPage />} />
          <Route path="/recycle" element={<RecyclePage />} />
          <Route path="/green-spirit" element={<GreenSpiritPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
