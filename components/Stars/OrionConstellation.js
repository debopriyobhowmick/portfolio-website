import React from 'react';
import { orionStars } from './starData';

const OrionConstellation = () => {
  return (
    <div className="absolute inset-0">
      <svg className="absolute inset-0 w-full h-full">
        <path
          d="M75,12 L69,14 L72,18 L75,12 M72,18 L73,20 L75,20 L77,20 M74,22 L74,24 M69,14 L68,18 L67,20 L67,22 M73,20 L71,26 M77,20 L77,26"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.5"
          fill="none"
        />
        <circle
          cx="74"
          cy="23"
          r="1.5"
          fill="url(#nebulaGradient)"
          opacity="0.3"
        />
        <defs>
          <radialGradient id="nebulaGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#4A90E2" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
      {orionStars.map((star, i) => (
        <div
          key={`orion-${i}`}
          className="absolute rounded-full orion-twinkle"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color || 'rgba(255,255,255,1)',
            boxShadow: `0 0 ${star.size * 3}px ${typeof star.color === 'string' ? star.color.replace('1)', '0.6)') : 'rgba(255,255,255,0.6)'}`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default OrionConstellation;