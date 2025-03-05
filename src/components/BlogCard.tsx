import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, Tag } from 'lucide-react';
import { format } from 'date-fns';

interface BlogCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: string;
    publishedAt: string;
    author: {
      name: string;
      avatar: string;
    };
    readTime: string;
    categories: string[];
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-[#0a222e] rounded-xl overflow-hidden border border-[#c4d0af]/20 hover:border-[#5ca869] transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span
                key={category}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#5ca869]/10 text-[#5ca869]"
              >
                {category}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-3 text-[#f8e4d3] line-clamp-2 hover:text-[#5ca869] transition-colors">
            {post.title}
          </h2>
          <p className="text-[#f8e4d3]/80 mb-4 line-clamp-2">{post.excerpt}</p>
          
          <div className="flex items-center justify-between text-sm text-[#f8e4d3]/60">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-6 h-6 rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
              <span>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}