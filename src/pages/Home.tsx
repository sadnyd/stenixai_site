import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronRight, 
  Bot, 
  Brain, 
  BarChart, 
  MessageSquareCode, 
  Zap,
  Database,
  Cloud,
  Code,
  Workflow,
  Shield,
  Users
} from 'lucide-react';

function Home() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Expert guidance on integrating AI into your business operations for maximum impact and ROI.'
    },
    {
      icon: Bot,
      title: 'Process Automation',
      description: 'Streamline workflows with intelligent automation solutions that reduce manual effort and boost productivity.'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and predictive modeling.'
    },
    {
      icon: MessageSquareCode,
      title: 'Custom Solutions',
      description: 'Tailored AI solutions designed specifically for your unique business challenges and goals.'
    },
    {
      icon: Cloud,
      title: 'Cloud AI Integration',
      description: 'Seamlessly integrate AI capabilities with your cloud infrastructure for scalable solutions.'
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI implementations are secure, compliant, and follow best practices.'
    }
  ];

  return (
    <div className="text-[#f8e4d3]">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1920"
              alt="AI Technology"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              Transform Your Business with{' '}
              <span className="text-[#5ca869]">Intelligent AI</span>
            </h1>
            <p className="text-2xl text-[#f8e4d3]/80 mb-12 max-w-3xl mx-auto">
              Unleash the power of AI to streamline operations, boost efficiency, and drive 
              unprecedented growth in your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5ca869] hover:bg-[#90bc8c] text-[#0a222e] font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
              >
                Start Your AI Journey
                <ChevronRight size={20} />
              </motion.a>
              <motion.a 
                href="#solutions"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#5ca869] text-[#5ca869] hover:bg-[#5ca869] hover:text-[#0a222e] font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
              >
                Explore Solutions
                <ChevronRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#solutions"
            className="text-[#f8e4d3]/60 hover:text-[#5ca869] transition-colors flex flex-col items-center gap-2"
          >
            <span>Discover More</span>
            <ChevronRight size={24} className="animate-bounce rotate-90" />
          </a>
        </motion.div>
      </header>

      {/* Services Section */}
      <section id="solutions" className="py-32 bg-[#0a222e]/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transformative AI Solutions</h2>
            <p className="text-xl text-[#f8e4d3]/80 max-w-3xl mx-auto">
              Leverage our comprehensive suite of AI-powered services to revolutionize 
              your business operations and stay ahead of the competition.
            </p>
          </motion.div>
          
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`bg-[#0a222e] p-8 rounded-xl border border-[#c4d0af]/20 h-full flex flex-col ${
                  index === 0 || index === services.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex justify-center mb-6">
                  <service.icon size={48} className="text-[#5ca869]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
                <p className="text-[#f8e4d3]/80 text-center flex-grow">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Begin Your AI Transformation</h2>
              <p className="text-xl text-[#f8e4d3]/80">
                Ready to revolutionize your business with AI? Connect with our experts 
                for a personalized consultation and discover the perfect solution for your needs.
              </p>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a222e] p-8 rounded-xl border border-[#c4d0af]/20"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#f8e4d3] mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#f8e4d3] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[#f8e4d3] mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#f8e4d3] mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-[#f8e4d3] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
                ></textarea>
              </div>
              <motion.div
                className="mt-8 text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="bg-[#5ca869] hover:bg-[#90bc8c] text-[#0a222e] font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-flex items-center gap-2"
                >
                  Start Your Journey
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;