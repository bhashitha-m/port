"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: nextId,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle].slice(-50)); // Keep only last 50
      setNextId((prev) => prev + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [nextId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-sm"
          style={{
            left: particle.x,
            top: particle.y,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}
