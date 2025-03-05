import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Twitter, Mail, X } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Shreyansh Mathur',
    role: 'Founder & CEO',
    image: 'https://i.imgur.com/YhiQcJn.jpg',
    bio: 'Shreyansh has helped businesses leverage AI and automation to drive efficiency, with experience at PwC, EY, and BelleVidCo in business strategy, financial analysis, and process optimization.',
    linkedin: 'https://linkedin.com/in/shreyansh-mathur',
    github: 'https://github.com/shreyansh-mathur',
    twitter: 'https://twitter.com/shreyansh_m',
    email: 'shreyansh@stenixai.com',
    expertise: ['Business Strategy', 'AI Implementation', 'Process Optimization']
  },
  {
    id: 2,
    name: 'Devayan Das',
    role: 'Founder & CTO',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Devayan specializes in AI-driven automation and predictive analytics, bringing expertise in machine learning and software development to create intelligent business solutions.',
    linkedin: 'https://linkedin.com/in/devayan-das',
    github: 'https://github.com/devayan-das',
    twitter: 'https://twitter.com/devayan_d',
    email: 'devayan@stenixai.com',
    expertise: ['Machine Learning', 'Software Architecture', 'AI Development']
  },
  {
    id: 3,
    name: 'Sarthak Tanwar',
    role: 'Founder & CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Sarthak has built scalable AI-driven applications and backend systems, leveraging his experience in AI solutions and full-stack development at Quantiphi.',
    linkedin: 'https://linkedin.com/in/sarthak-tanwar',
    github: 'https://github.com/sarthak-tanwar',
    twitter: 'https://twitter.com/sarthak_t',
    email: 'sarthak@stenixai.com',
    expertise: ['System Architecture', 'AI Solutions', 'Full-stack Development']
  },
  {
    id: 4,
    name: 'Tanya Nijhawan',
    role: 'Founder & CDO',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Tanya has crafted intuitive AI-powered interfaces, ensuring seamless user adoption. With experience at JPMorgan Chase, she bridges the gap between AI technology and user experience.',
    linkedin: 'https://linkedin.com/in/tanya-nijhawan',
    github: 'https://github.com/tanya-nijhawan',
    twitter: 'https://twitter.com/tanya_n',
    email: 'tanya@stenixai.com',
    expertise: ['UX Design', 'AI Integration', 'Product Strategy']
  }
];

interface MemberModalProps {
  member: typeof teamMembers[0];
  onClose: () => void;
}

function MemberModal({ member, onClose }: MemberModalProps) {
  return (
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
        className="bg-[#0a222e] rounded-xl p-6 max-w-2xl w-full shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-[#f8e4d3]">{member.name}</h2>
              <p className="text-[#5ca869]">{member.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#f8e4d3]/60 hover:text-[#f8e4d3] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#f8e4d3]">About</h3>
            <p className="text-[#f8e4d3]/80">{member.bio}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-[#f8e4d3]">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-[#5ca869]/10 text-[#5ca869] text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f8e4d3]/60 hover:text-[#5ca869] transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f8e4d3]/60 hover:text-[#5ca869] transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f8e4d3]/60 hover:text-[#5ca869] transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href={`mailto:${member.email}`}
              className="text-[#f8e4d3]/60 hover:text-[#5ca869] transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="min-h-screen bg-[#0a222e] text-[#f8e4d3]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[40vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-[#f8e4d3]/80 max-w-3xl mx-auto px-4"
          >
            Innovators and experts driving the future of AI technology
          </motion.p>
        </div>
      </motion.section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0a222e] rounded-xl overflow-hidden border border-[#c4d0af]/20 hover:border-[#5ca869] transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#5ca869] font-medium mb-4">{member.role}</p>
                  <p className="text-[#f8e4d3]/80 mb-4 line-clamp-3">{member.bio}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-[#f8e4d3]/60 hover:text-[#5ca869] transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-[#f8e4d3]/60 hover:text-[#5ca869] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-[#f8e4d3]/60 hover:text-[#5ca869] transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}