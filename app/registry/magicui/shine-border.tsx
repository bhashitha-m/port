"use client";
import React from 'react';

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function ShineBorder({ children, className }: ShineBorderProps) {
  return (
    <div
      className={`${className || ''} relative overflow-hidden rounded-3xl`}
      style={{
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      }}
    >
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          animation: 'shine-effect 3s linear infinite',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
}
