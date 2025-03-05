import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className="fixed bottom-6 right-6 bg-[#0a222e] dark:bg-[#f8e4d3] p-3 rounded-full shadow-lg"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
      >
        {isDark ? (
          <Sun className="text-[#0a222e] w-6 h-6" />
        ) : (
          <Moon className="text-[#f8e4d3] w-6 h-6" />
        )}
      </motion.div>
    </motion.button>
  );
}