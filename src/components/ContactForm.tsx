import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-700/50 p-8 rounded-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-slate-200 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-slate-200 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-slate-200 mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-slate-200 mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="block text-slate-200 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none"
        ></textarea>
      </div>
      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;