"use client";

import { cn } from "@/lib/utils";

type ColorBackdropProps = {
  c1?: string;
  c2?: string;
  c3?: string;
  variant?: 'bands' | 'segmented';
  className?: string;
};

export function ColorBackdrop({ 
  c1 = '#0e0e0e', 
  c2 = '#1b1a17', 
  c3 = '#2a2623',
  variant = 'segmented',
  className 
}: ColorBackdropProps) {
  const bandsStyle = {
    background: `
      linear-gradient(135deg, ${c1} 0%, ${c1} 33.33%),
      linear-gradient(135deg, ${c2} 33.33%, ${c2} 66.66%),
      linear-gradient(135deg, ${c3} 66.66%, ${c3} 100%)
    `,
    backgroundSize: '100% 33.33%, 100% 33.33%, 100% 33.33%',
    backgroundPosition: '0% 0%, 0% 33.33%, 0% 66.66%',
    backgroundRepeat: 'no-repeat'
  };

  const segmentedStyle = {
    background: `
      linear-gradient(
        135deg,
        ${c1} 0%,
        ${c1} 25%,
        ${c2} 35%,
        ${c2} 65%,
        ${c3} 75%,
        ${c3} 100%
      )
    `
  };

  return (
    <div 
      className={cn(
        "fixed inset-0 w-full h-full grain-subtle pointer-events-none z-0",
        className
      )}
      style={variant === 'bands' ? bandsStyle : segmentedStyle}
      aria-hidden="true"
    />
  );
}
