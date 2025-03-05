import React, { useState, useEffect } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', calculateProgress);
    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#c4d0af]/20 z-50">
      <div
        className="h-full bg-[#5ca869] transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}