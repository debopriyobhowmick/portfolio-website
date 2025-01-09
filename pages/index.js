import React from 'react';
import Head from 'next/head';
import { Github, Linkedin } from 'lucide-react';
import { ORION_STARS, ORION_PATH } from '../lib/constants';

export default function Home() {
  const [shootingStar, setShootingStar] = React.useState(null);

  React.useEffect(() => {
    const createShootingStar = () => {
      setShootingStar({
        x: Math.random() * 80,
        y: Math.random() * 80
      });
      setTimeout(() => setShootingStar(null), 2000);
    };

    createShootingStar();
    const interval = setInterval(createShootingStar, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-black to-blue-950 overflow-hidden">
      <Head>
        <title>DEBO - Full Stack Data Scientist</title>
      </Head>

      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star-base animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              backgroundColor: 'white',
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Orion Constellation */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full">
          <path
            d={ORION_PATH}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
        {ORION_STARS.map((star, i) => (
          <div
            key={i}
            className="star-base animate-twinkle"
            style={{
              top: `${star.y}%`,
              left: `${star.x}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Shooting Star */}
      {shootingStar && (
        <div 
          className="absolute"
          style={{
            top: `${shootingStar.y}%`,
            left: `${shootingStar.x}%`
          }}
        >
          <div className="animate-shooting-star">
            <div className="absolute w-1 h-1 bg-blue-300 rounded-full" />
            <div className="absolute animate-tail h-px bg-gradient-to-l from-transparent to-blue-300" />
          </div>
        </div>
      )}

      {/* Header Content */}
      <div className="relative z-10 pt-12 pl-8">
        <div className="flex flex-col items-center w-64">
          <h1 className="text-6xl font-bold text-white mb-6">DEBO</h1>
          <h2 className="text-sm text-blue-300 font-extralight tracking-widest uppercase">
            Full Stack Data Scientist
          </h2>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex gap-4 p-4 rounded-2xl backdrop-blur-sm bg-black/10 border border-white/5">
          <button className="nav-button">About Me <span className="text-lg">+</span></button>
          <button className="nav-button">Projects <span className="text-lg">+</span></button>
          <button className="nav-button">Resume <span className="text-lg">+</span></button>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-6 p-4 rounded-2xl backdrop-blur-sm bg-black/10 border border-white/5">
          <button className="social-button">
            <Github className="w-6 h-6" />
          </button>
          <button className="social-button">
            <Linkedin className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}