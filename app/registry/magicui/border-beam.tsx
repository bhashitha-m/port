"use client";
import React from 'react';

interface BorderBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function BorderBeam({ children, className }: BorderBeamProps) {
  return (
    <div
      className={`${className || ''} relative rounded-full`}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          animation: 'beam-travel 3s linear infinite',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
}
