import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      // Simulate search results
      const mockResults: SearchResult[] = [
        {
          id: '1',
          title: 'AI in Business Process Automation',
          excerpt: 'Learn how AI is transforming business processes...',
          slug: 'ai-business-process-automation',
        },
        {
          id: '2',
          title: 'Machine Learning Applications',
          excerpt: 'Discover practical applications of machine learning...',
          slug: 'machine-learning-applications',
        },
      ].filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.excerpt.toLowerCase().includes(query.toLowerCase())
      );

      setResults(mockResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleResultClick = (slug: string) => {
    navigate(`/blog/${slug}`);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="flex items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-[#f8e4d3] hover:text-[#5ca869] transition-colors"
        >
          <Search size={20} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 top-12 w-96 bg-[#0a222e] rounded-lg shadow-xl border border-[#c4d0af]/20 z-50"
          >
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-transparent text-[#f8e4d3] border border-[#c4d0af]/20 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-[#5ca869]"
                  autoFocus
                />
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f8e4d3]/40"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#f8e4d3]/40 hover:text-[#f8e4d3]"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {results.length > 0 && (
                <div className="mt-4 space-y-2">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result.slug)}
                      className="w-full text-left p-3 rounded-lg hover:bg-[#c4d0af]/10 transition-colors"
                    >
                      <h4 className="text-[#f8e4d3] font-medium">{result.title}</h4>
                      <p className="text-sm text-[#f8e4d3]/60 line-clamp-1">
                        {result.excerpt}
                      </p>
                    </button>
                  ))}
                </div>
              )}

              {query.length >= 2 && results.length === 0 && (
                <div className="mt-4 text-center text-[#f8e4d3]/60">
                  No results found for "{query}"
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}