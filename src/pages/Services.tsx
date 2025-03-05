import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Workflow, 
  MessageSquareCode, 
  BarChart as ChartBar, 
  Shield, 
  Users, 
  Bot, 
  Database, 
  Cloud, 
  Code,
  Zap,
  Search
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    description: 'Strategic guidance on integrating AI into your business operations and processes.',
    features: [
      'AI Readiness Assessment',
      'Technology Stack Evaluation',
      'Implementation Roadmap',
      'ROI Analysis'
    ]
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation solutions.',
    features: [
      'Workflow Analysis',
      'Custom Automation Solutions',
      'Integration Services',
      'Performance Monitoring'
    ]
  },
  {
    icon: ChartBar,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights for better decision-making.',
    features: [
      'Data Strategy Development',
      'Predictive Analytics',
      'Business Intelligence',
      'Performance Metrics'
    ]
  },
  {
    icon: MessageSquareCode,
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions designed for your specific business needs.',
    features: [
      'Natural Language Processing',
      'Machine Learning Models',
      'Computer Vision',
      'AI-Powered Applications'
    ]
  },
  {
    icon: Bot,
    title: 'Conversational AI',
    description: 'Build intelligent chatbots and virtual assistants for enhanced customer engagement.',
    features: [
      'Custom Chatbot Development',
      'Voice Assistant Integration',
      'Multi-language Support',
      'Analytics Dashboard'
    ]
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Comprehensive data solutions for efficient storage and processing.',
    features: [
      'Data Architecture Design',
      'ETL Pipeline Development',
      'Data Quality Assurance',
      'Scalability Planning'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud AI Solutions',
    description: 'Leverage cloud platforms for scalable AI implementations.',
    features: [
      'Cloud Infrastructure Setup',
      'Serverless AI Solutions',
      'Cost Optimization',
      'Security Implementation'
    ]
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Ensure your AI implementations are secure and compliant.',
    features: [
      'Security Assessment',
      'Compliance Monitoring',
      'Risk Management',
      'Best Practices Implementation'
    ]
  },
  {
    icon: Search,
    title: 'AI Research & Development',
    description: 'Stay ahead with cutting-edge AI research and development.',
    features: [
      'Technology Research',
      'Prototype Development',
      'Innovation Labs',
      'Industry Partnerships'
    ]
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="container mx-auto px-4 py-20 text-[#f8e4d3]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-[#f8e4d3]/80 max-w-3xl mx-auto text-lg">
          We offer comprehensive AI consulting services to help businesses identify,
          implement, and optimize AI solutions that drive growth and efficiency.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => {
          const [cardRef, cardInView] = useInView({
            threshold: 0.1,
            triggerOnce: true
          });

          return (
            <motion.div
              key={index}
              ref={cardRef}
              initial={{ opacity: 0, y: 20 }}
              animate={cardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0a222e] p-8 rounded-xl border border-[#c4d0af]/20 hover:border-[#5ca869] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[#5ca869]/10">
                  <service.icon className="text-[#5ca869]" size={32} />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-[#f8e4d3]/80 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[#f8e4d3]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5ca869]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}