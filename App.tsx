import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Contact from './components/Contact';
import LoadingScreen from './components/ui/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import BookingModal from './components/BookingModal';
import { BookingProvider } from './context/BookingContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage to only show loader once per session
    const hasVisited = sessionStorage.getItem('hasVisitedLumiere');
    if (hasVisited) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasVisitedLumiere', 'true');
  };

  return (
    <BookingProvider>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!loading && (
        <div className="min-h-screen bg-lumiere-50 text-lumiere-900 font-sans selection:bg-lumiere-300 selection:text-lumiere-900 animate-[fadeIn_0.5s_ease-out]">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <BookingModal />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfUse />} />
            </Routes>
          </main>
          <Contact />
        </div>
      )}
    </BookingProvider>
  );
}

export default App;