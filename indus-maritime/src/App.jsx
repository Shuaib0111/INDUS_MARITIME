import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop"; 
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import ContactPage from "./Pages/ContactPage";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Videos from "./Pages/Videos";
import Certificate from "./Pages/Certificate";
import FloatingButtons from "./Components/FloatingButtons";
import Footer from "./Components/Footer";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Loader from "./Components/Loader"; // Import Loader Component
// import Translator from "./Components/Translator";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time before showing main content
    setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust time as needed
  }, []);

  return (
    <>
      {loading ? ( 
        <Loader onComplete={() => setLoading(false)} /> 
      ) : (
        <>
          <ScrollToTop />
          {/* <Translator /> */}
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/video" element={<Videos />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/tnc" element={<TermsAndConditions />} />
            </Routes>
          </main>
          <FloatingButtons />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
