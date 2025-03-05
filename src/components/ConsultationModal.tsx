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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Thank you! We will contact you shortly.');
    setIsSubmitting(false);
    onClose();
    setStep(1);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      message: ''
    });
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
              <button
                onClick={onClose}
                className="text-[#f8e4d3]/60 hover:text-[#f8e4d3] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                {[1, 2].map(i => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      step >= i ? 'bg-[#5ca869]' : 'bg-[#c4d0af]/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="name" className="block text-[#f8e4d3] mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[#f8e4d3] mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[#f8e4d3] mb-2">Company *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                      />
                    </div>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!formData.name || !formData.email || !formData.company}
                        className="w-full bg-[#5ca869] hover:bg-[#90bc8c] disabled:opacity-50 disabled:hover:bg-[#5ca869] text-[#0a222e] font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                      >
                        Next Step
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="phone" className="block text-[#f8e4d3] mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-[#f8e4d3] mb-2">Project Type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                      >
                        <option value="">Select a project type</option>
                        <option value="ai-consulting">AI Consulting</option>
                        <option value="process-automation">Process Automation</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="custom-solution">Custom Solution</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-[#f8e4d3] mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-[#5ca869] text-[#5ca869] hover:bg-[#5ca869] hover:text-[#0a222e] font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.projectType || !formData.message}
                        className="flex-1 bg-[#5ca869] hover:bg-[#90bc8c] disabled:opacity-50 disabled:hover:bg-[#5ca869] text-[#0a222e] font-bold py-3 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader className="animate-spin" size={20} />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Submit
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}