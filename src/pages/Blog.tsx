import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';

const categories = Array.from(new Set(blogPosts.flatMap(post => post.categories)));
const tags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = 
        selectedCategory === 'All' || 
        post.categories.includes(selectedCategory);
      const matchesTag = 
        selectedTag === 'All' || 
        post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedTag]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">AI Insights & Updates</h1>
        <p className="text-[#f8e4d3]/80 max-w-2xl mx-auto">
          Stay informed about the latest developments in AI technology and its applications in business.
        </p>
      </motion.div>

      <div className="mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f8e4d3]/40" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="px-4 py-2 rounded-lg bg-[#0a222e] text-[#f8e4d3] border border-[#c4d0af]/20 focus:border-[#5ca869] focus:outline-none"
          >
            <option value="All">All Tags</option>
            {tags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="wait">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </AnimatePresence>
      </motion.div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === page
                  ? 'bg-[#5ca869] text-[#0a222e]'
                  : 'bg-[#0a222e] text-[#f8e4d3] hover:bg-[#c4d0af]/10'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}