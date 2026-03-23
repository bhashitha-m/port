"use client";
import React from 'react';

interface HyperTextProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export function HyperText({ children, className, duration = 100 }: HyperTextProps) {
  return (
    <span
      className={className}
      style={{
        background: 'linear-gradient(90deg, #EA5811, #ee5bcc, #EC4990)',
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        animation: `gradient-shift ${duration}ms ease infinite`,
      }}
    >
      {children}
    </span>
  );
}
