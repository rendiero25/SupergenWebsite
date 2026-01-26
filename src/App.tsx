import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import HelpAndContact from "./pages/HelpAndContact";
import Products from "./pages/Products";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-[72px] md:pt-[80px]"> {/* Add padding-top to account for fixed header */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products/*" element={<Products />} />
              <Route path="/solutions/*" element={<Solutions />} />
              <Route path="/about/*" element={<About />} />
              <Route path="/contact" element={<HelpAndContact />} />
              {/* Fallback route */}
              <Route path="*" element={<Index />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

