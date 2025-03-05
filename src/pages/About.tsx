import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Target, Shield, Users, BarChart as ChartBar, Rocket, Award, Globe } from 'lucide-react';

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'Continuously pushing boundaries to deliver cutting-edge solutions.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining the highest standards in everything we do.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Building trust through honest and transparent partnerships.'
  },
  {
    icon: Target,
    title: 'Client Success',
    description: "Measuring our success through our clients' achievements."
  }
];

const features = [
  {
    title: "Hands-On Leadership",
    description: "Our founders directly oversee every project, ensuring the highest quality and attention to detail."
  },
  {
    title: "Custom AI Solutions",
    description: "We develop tailored automation solutions designed specifically for your unique business needs."
  },
  {
    title: "Seamless Integration",
    description: "Our AI solutions work harmoniously with your existing systems and workflows."
  },
  {
    title: "Results-Driven Impact",
    description: "We focus on delivering measurable efficiency gains and tangible business growth."
  }
];

export default function About() {
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

  return (
    <div className="min-h-screen bg-[#0a222e] text-[#f8e4d3]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
              alt="AI Technology"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Stenix AI
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-[#f8e4d3]/80 max-w-3xl mx-auto"
          >
            Empowering B2B SaaS companies and startups with intelligent automation that enhances efficiency, 
            reduces operational bottlenecks, and drives sustainable growth.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why We Exist</h2>
            <p className="text-lg text-[#f8e4d3]/80 leading-relaxed">
              Businesses today waste countless hours on repetitive tasks, manual data entry, inefficient workflows, 
              and outdated processes. We're here to change that. By leveraging cutting-edge AI, NLP, and predictive 
              analytics, we help businesses automate smarter and grow faster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-[#0a222e]/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Expertise</h2>
            <p className="text-lg text-[#f8e4d3]/80 leading-relaxed">
              With experience at PwC, EY, JPMorgan Chase, and Quantiphi, our founding team combines deep 
              technical expertise with business strategy. From AI consulting to custom automation solutions, 
              we don't just build AI—we build AI that delivers real ROI.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const [ref, inView] = useInView({
                threshold: 0.2,
                triggerOnce: true
              });

              return (
                <motion.div
                  key={feature.title}
                  ref={ref}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0a222e] p-8 rounded-xl border border-[#c4d0af]/20 hover:border-[#5ca869] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#5ca869]/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#5ca869]" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-[#f8e4d3]/80">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Values
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const [ref, inView] = useInView({
                threshold: 0.2,
                triggerOnce: true
              });

              return (
                <motion.div
                  key={value.title}
                  ref={ref}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0a222e] p-8 rounded-xl border border-[#c4d0af]/20 hover:border-[#5ca869] transition-all duration-300 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    className="w-16 h-16 rounded-full bg-[#5ca869]/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <value.icon className="text-[#5ca869]" size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-[#f8e4d3]/80">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}