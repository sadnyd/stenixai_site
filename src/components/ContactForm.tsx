import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });
    
    formDataObj.append("access_key", "9d0ba77f-0527-40ac-a613-084353d3104f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Error submitting form");
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
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
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block text-slate-200 mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="company" className="block text-slate-200 mb-2">Company</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-slate-200 mb-2">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none" />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="block text-slate-200 mb-2">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 rounded-lg bg-slate-600 text-white border border-slate-500 focus:border-blue-500 focus:outline-none"></textarea>
      </div>
      <div className="mt-8 text-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">Send Message</button>
      </div>
      <div className="mt-4 text-center text-white">{result}</div>
    </form>
  );
}

export default ContactForm;
