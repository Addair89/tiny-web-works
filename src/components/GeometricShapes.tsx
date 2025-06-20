
import React from 'react';

interface FloatingShapeProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
}

export const FloatingTriangle: React.FC<FloatingShapeProps> = ({ 
  className = "", 
  color = "bg-blue-400/20", 
  size = 20,
  delay = 0 
}) => (
  <div 
    className={`absolute ${color} animate-float ${className}`}
    style={{ 
      width: `${size}px`, 
      height: `${size}px`,
      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      animationDelay: `${delay}s`
    }}
  />
);

export const FloatingCircle: React.FC<FloatingShapeProps> = ({ 
  className = "", 
  color = "bg-purple-400/20", 
  size = 24,
  delay = 0 
}) => (
  <div 
    className={`absolute rounded-full ${color} animate-float-reverse ${className}`}
    style={{ 
      width: `${size}px`, 
      height: `${size}px`,
      animationDelay: `${delay}s`
    }}
  />
);

export const FloatingHexagon: React.FC<FloatingShapeProps> = ({ 
  className = "", 
  color = "bg-teal-400/20", 
  size = 28,
  delay = 0 
}) => (
  <div 
    className={`absolute ${color} animate-spin-slow ${className}`}
    style={{ 
      width: `${size}px`, 
      height: `${size}px`,
      clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
      animationDelay: `${delay}s`
    }}
  />
);

export const FloatingDiamond: React.FC<FloatingShapeProps> = ({ 
  className = "", 
  color = "bg-coral-400/20", 
  size = 22,
  delay = 0 
}) => (
  <div 
    className={`absolute ${color} animate-bounce-gentle ${className}`}
    style={{ 
      width: `${size}px`, 
      height: `${size}px`,
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      animationDelay: `${delay}s`
    }}
  />
);

interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'zigzag';
  color?: string;
  flip?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'wave', 
  color = 'bg-white',
  flip = false 
}) => {
  const getClipPath = () => {
    switch (variant) {
      case 'wave':
        return flip ? 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 85%, 0 100%)';
      case 'diagonal':
        return flip ? 'polygon(0 100%, 100% 0, 100% 100%)' : 'polygon(0 0, 100% 0, 0 100%)';
      case 'zigzag':
        return 'polygon(0 0, 10% 100%, 20% 0, 30% 100%, 40% 0, 50% 100%, 60% 0, 70% 100%, 80% 0, 90% 100%, 100% 0, 100% 100%, 0 100%)';
      default:
        return 'polygon(0 0, 100% 0, 100% 85%, 0 100%)';
    }
  };

  return (
    <div 
      className={`w-full h-16 ${color}`}
      style={{ clipPath: getClipPath() }}
    />
  );
};
