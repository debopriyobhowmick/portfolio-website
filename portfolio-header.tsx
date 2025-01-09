import React, { useEffect, useState, useMemo } from 'react';
import { Github, Linkedin } from 'lucide-react';

const PortfolioHeader = () => {
  // Previous star and constellation logic remains the same...
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  // Orion constellation star coordinates
  const orionStars = [
    { x: 75, y: 15, size: 2.5, name: 'Betelgeuse' },
    { x: 80, y: 20, size: 2, name: 'Belt1' },
    { x: 82, y: 20, size: 2, name: 'Belt2' },
    { x: 84, y: 20, size: 2, name: 'Belt3' },
    { x: 73, y: 18, size: 2.2, name: 'Bellatrix' },
    { x: 82, y: 25, size: 2.3, name: 'Rigel' },
    { x: 80, y: 12, size: 2, name: 'Head' }
  ];

  // Background stars generation
  const backgroundStars = useMemo(() => {
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

  // Shooting star logic
  useEffect(() => {
    const createShootingStar = () => {
      setIsAnimating(true);
      setPosition({
        x: Math.random() * 80,
        y: Math.random() * 80
      });
      setTimeout(() => setIsAnimating(false), 2000);
    };
    createShootingStar();
    const interval = setInterval(createShootingStar, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-black to-blue-950 overflow-hidden">
      {/* Stars and constellation components remain the same... */}
      <div className="absolute inset-0">
        {backgroundStars.map((star, i) => (
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
      </div>

      {/* Orion Constellation */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full">
          <path
            d="M75,12 L69,14 L72,18 L75,12 M72,18 L73,20 L75,20 L77,20 M74,22 L74,24 M69,14 L68,18 L67,20 L67,22 M73,20 L71,26 M77,20 L77,26"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Nebula glow effect */}
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
            className="absolute rounded-full animate-pulse"
            style={{
              top: `${star.y}%`,
              left: `${star.x}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color || 'rgba(255,255,255,1)',
              boxShadow: `0 0 ${star.size * 3}px ${typeof star.color === 'string' ? star.color.replace('1)', '0.6)') : 'rgba(255,255,255,0.6)'}`,
              animation: `twinkle-orion-${i} 3s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting star */}
      {isAnimating && (
        <div 
          className="absolute"
          style={{
            top: `${position.y}%`,
            left: `${position.x}%`,
          }}
        >
          <div className="relative animate-shooting-star">
            <div className="absolute w-1 h-1 bg-blue-300 rounded-full" 
              style={{ 
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
            <div className="absolute animate-tail origin-center"
              style={{
                height: '1px',
                background: 'linear-gradient(-135deg, rgba(56,182,255,0.8) 0%, transparent 100%)',
                transform: 'rotate(-135deg)',
                transformOrigin: 'left center',
              }}
            />
          </div>
        </div>
      )}

      {/* Header content */}
      <div className="relative z-10 pt-12 pl-8">
        <div className="flex flex-col items-center w-64">
          <h1 className="text-6xl font-bold text-white mb-6">DEBO</h1>
          <h2 className="text-sm text-blue-300 font-extralight tracking-widest uppercase">
            Full Stack Data Scientist
          </h2>
        </div>
      </div>

      {/* Bento Box Navigation */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex gap-4 p-4 rounded-2xl backdrop-blur-sm bg-black/10 border border-white/5"
             style={{
               boxShadow: '0 4px 24px -1px rgba(56,182,255,0.15)',
               background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(30,64,175,0.05) 100%)',
             }}>
          <button className="px-8 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-blue-900/30 transition-all duration-300 text-white/90 text-sm uppercase tracking-widest font-extralight hover:shadow-[0_0_20px_rgba(56,182,255,0.5)] hover:text-white">
            About Me
          </button>
          <button className="px-8 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-blue-900/30 transition-all duration-300 text-white/90 text-sm uppercase tracking-widest font-extralight hover:shadow-[0_0_20px_rgba(56,182,255,0.5)] hover:text-white">
            Projects
          </button>
          <button className="px-8 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-blue-900/30 transition-all duration-300 text-white/90 text-sm uppercase tracking-widest font-extralight hover:shadow-[0_0_20px_rgba(56,182,255,0.5)] hover:text-white">
            Resume
          </button>
          <button className="px-8 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-blue-900/30 transition-all duration-300 text-white/90 text-sm uppercase tracking-widest font-extralight hover:shadow-[0_0_20px_rgba(56,182,255,0.5)] hover:text-white flex items-center justify-center">
            <Github className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        ${backgroundStars.map((star, i) => `
          @keyframes twinkle-${i} {
            0%, 100% { transform: scale(1); opacity: ${star.brightness}; }
            50% { transform: scale(${star.pulseScale}); opacity: 1; }
          }
        `).join('\n')}

        ${orionStars.map((_, i) => `
          @keyframes twinkle-orion-${i} {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.4); opacity: 1; }
          }
        `).join('\n')}

        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(400px) translateY(400px);
            opacity: 0;
          }
        }

        @keyframes tail {
          0% {
            width: 0;
            opacity: 0;
          }
          30% {
            width: 100px;
            opacity: 1;
          }
          70% {
            width: 150px;
            opacity: 1;
          }
          100% {
            width: 0;
            opacity: 0;
          }
        }

        .animate-shooting-star {
          animation: shooting-star 2s ease-out forwards;
        }

        .animate-tail {
          animation: tail 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PortfolioHeader;