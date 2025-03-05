import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Blog from './pages/Blog';
import ConsultationModal from './components/ConsultationModal';
import NewsletterPopup from './components/NewsletterPopup';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';
import ReadingProgress from './components/ReadingProgress';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  useEffect(() => {
    // Show newsletter popup after 30 seconds
    const timer = setTimeout(() => {
      const hasSeenNewsletter = localStorage.getItem('hasSeenNewsletter');
      if (!hasSeenNewsletter) {
        setIsNewsletterOpen(true);
        localStorage.setItem('hasSeenNewsletter', 'true');
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About Us' },
    { to: '/services', text: 'Services' },
    { to: '/team', text: 'Our Team' },
    { to: '/blog', text: 'Blog' }
  ];

  return (
    <div className="min-h-screen bg-[#0a222e]">
      <ReadingProgress />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="bg-[#0a222e]/90 py-4 sticky top-0 z-40 backdrop-blur-sm border-b border-[#c4d0af]/10"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-[#f8e4d3]"
              >
                Stenix
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-[#5ca869]"
              >
                Ai
              </motion.span>
            </Link>
            
            <button 
              className="md:hidden text-[#f8e4d3]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    to={link.to}
                    className="text-[#f8e4d3] hover:text-[#5ca869] transition-colors"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsConsultationOpen(true)}
                className="bg-[#5ca869] hover:bg-[#90bc8c] text-[#0a222e] font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 space-y-4 overflow-hidden"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-[#f8e4d3] hover:text-[#5ca869] transition-colors"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => {
                    setIsConsultationOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full bg-[#5ca869] hover:bg-[#90bc8c] text-[#0a222e] font-bold py-2 px-6 rounded-lg transition-colors text-center"
                >
                  Schedule a Consultation
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home onConsultation={() => setIsConsultationOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#0a222e] py-12 mt-20 border-t border-[#c4d0af]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-[#f8e4d3]">Stenix</span>
                <span className="text-2xl font-bold text-[#5ca869]">Ai</span>
              </div>
              <p className="text-[#f8e4d3]/80">Empowering businesses through intelligent automation solutions.</p>
            </div>
            <div>
              <h3 className="text-[#f8e4d3] font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-[#f8e4d3]/80 hover:text-[#5ca869] transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#f8e4d3] font-bold mb-4">Services</h3>
              <div className="space-y-2">
                <Link to="/services" className="block text-[#f8e4d3]/80 hover:text-[#5ca869]">AI Consulting</Link>
                <Link to="/services" className="block text-[#f8e4d3]/80 hover:text-[#5ca869]">Process Automation</Link>
                <Link to="/services" className="block text-[#f8e4d3]/80 hover:text-[#5ca869]">Data Analytics</Link>
                <Link to="/services" className="block text-[#f8e4d3]/80 hover:text-[#5ca869]">Custom Solutions</Link>
              </div>
            </div>
            <div>
              <h3 className="text-[#f8e4d3] font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-[#f8e4d3]/80">stenixai@gmail.com</p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/shreyansh-mathur" className="text-[#f8e4d3]/80 hover:text-[#5ca869]">Shreyansh</a>
                  <a href="https://linkedin.com/in/devayan-das" className="text-[#f8e4d3]/80 hover:text-[#5ca869]">Devayan</a>
                </div>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/sarthak-tanwar" className="text-[#f8e4d3]/80 hover:text-[#5ca869]">Sarthak</a>
                  <a href="https://linkedin.com/in/tanya-nijhawan" className="text-[#f8e4d3]/80 hover:text-[#5ca869]">Tanya</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#c4d0af]/20 mt-12 pt-8 text-center">
            <p className="text-[#f8e4d3]/80">© 2024 Stenix AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Components */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
      <NewsletterPopup
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
      <ChatBot />
      <ScrollToTop />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;