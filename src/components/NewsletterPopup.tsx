import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Loader, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    toast.success('Successfully subscribed to newsletter!');
    
    setTimeout(() => {
      onClose();
      setEmail('');
      setIsSubscribed(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#0a222e] rounded-xl p-6 max-w-md w-full shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#f8e4d3] mb-2">Stay Updated</h2>
                <p className="text-[#f8e4d3]/80">Get the latest AI insights and updates delivered to your inbox.</p>
              </div>
              <button
                onClick={onClose}
                className="text-[#f8e4d3]/60 hover:text-[#f8e4d3] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f8e4d3]/40" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubscribed || !email}
                className="w-full bg-[#5ca869] hover:bg-[#90bc8c] disabled:opacity-50 disabled:hover:bg-[#5ca869] text-[#0a222e] font-bold py-3 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Subscribing...
                  </>
                ) : isSubscribed ? (
                  <>
                    <CheckCircle size={20} />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}