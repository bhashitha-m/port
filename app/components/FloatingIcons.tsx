"use client";
import React from 'react';
import { motion } from 'framer-motion';

const techIcons = [
  { icon: '⚛️', label: 'React' },
  { icon: '▲', label: 'Next.js' },
  { icon: '🎨', label: 'Tailwind' },
  { icon: '⚙️', label: 'Node.js' },
  { icon: '🐍', label: 'Python' },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            opacity: 0.15,
          }}
          animate={{
            x: Math.random() * 600 - 300,
            y: Math.random() * 600 - 300,
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute text-4xl md:text-6xl"
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + index * 10}%`,
          }}
        >
          {tech.icon}
        </motion.div>
      ))}
    </div>
  );
}
