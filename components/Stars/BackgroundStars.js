import React, { useMemo } from 'react';

const BackgroundStars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`,
      size: Math.random() < 0.3 ? 2 : Math.random() < 0.7 ? 1.5 : 1,
      brightness: Math.random() < 0.2 ? '1' : Math.random() < 0.6 ? '0.8' : '0.6',
      pulseScale: Math.random() < 0.3 ? '1.8' : '1.4'
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: `rgba(255, 255, 255, ${star.brightness})`,
            animation: `twinkle-${i} ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
          }}
        />
      ))}
      <style jsx>{`
        ${stars.map((star, i) => `
          @keyframes twinkle-${i} {
            0%, 100% { transform: scale(1); opacity: ${star.brightness}; }
            50% { transform: scale(${star.pulseScale}); opacity: 1; }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
};

export default BackgroundStars;