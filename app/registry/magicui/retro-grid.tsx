"use client";
import React from 'react';

interface RetroGridProps {
  className?: string;
}

export function RetroGrid({ className }: RetroGridProps) {
  return (
    <div
      className={`${className || ''} pointer-events-none absolute inset-0`}
      style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.05) 75%, rgba(139, 92, 246, 0.05) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.05) 75%, rgba(139, 92, 246, 0.05) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px',
      }}
    />
  );
}
