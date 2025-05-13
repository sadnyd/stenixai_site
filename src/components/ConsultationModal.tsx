import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader } from 'lucide-react';
import toast from 'react-hot-toast';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "9d0ba77f-0527-40ac-a613-084353d3104f"); // Replace with your Web3Forms key
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });
      
      const result = await response.json();
      if (result.success) {
        toast.success("Thank you! We will contact you shortly.");
        onClose();
        setStep(1);
        setFormData({ name: '', email: '', company: '', phone: '', projectType: '', message: '' });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
            className="bg-[#0a222e] rounded-xl p-6 max-w-lg w-full shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#f8e4d3]">Schedule a Consultation</h2>
              <button onClick={onClose} className="text-[#f8e4d3]/60 hover:text-[#f8e4d3] transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
                <div>
                  <label className="block text-[#f8e4d3] mb-2">Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[#f8e4d3] mb-2">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[#f8e4d3] mb-2">Company *</label>
                  <input type="text" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[#f8e4d3] mb-2">Message *</label>
                  <textarea name="message" required value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#5ca869] hover:bg-[#90bc8c] disabled:opacity-50 disabled:hover:bg-[#5ca869] text-[#0a222e] font-bold py-3 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
                  {isSubmitting ? <Loader className="animate-spin" size={20} /> : <Send size={20} />}
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}