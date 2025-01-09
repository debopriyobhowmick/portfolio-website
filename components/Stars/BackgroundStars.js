import React, { useMemo } from 'react';

const BackgroundStars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: Math.random() < 0.3 ? 2 : Math.random() < 0.7 ? 1.5 : 1,
      brightness: Math.random() < 0.2 ? '1' : Math.random() < 0.6 ? '0.8' : '0.6',
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: `rgba(255, 255, 255, ${star.brightness})`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundStars;