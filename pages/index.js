import React, { useEffect, useState } from 'react';
import BackgroundStars from '../components/Stars/BackgroundStars';
import OrionConstellation from '../components/Stars/OrionConstellation';
import ShootingStar from '../components/Stars/ShootingStar';
import NavMenu from '../components/Navigation/NavMenu';
import SocialIcons from '../components/Navigation/SocialIcons';

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const createShootingStar = () => {
      setIsAnimating(true);
      setPosition({
        x: Math.random() * 80,
        y: Math.random() * 80
      });

      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    };

    createShootingStar();
    const interval = setInterval(createShootingStar, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-black to-blue-950 overflow-hidden">
      <BackgroundStars />
      <OrionConstellation />
      {isAnimating && <ShootingStar position={position} />}
      
      <div className="relative z-10 pt-12 pl-8">
        <div className="flex flex-col items-center w-64">
          <h1 className="text-6xl font-bold text-white mb-6">DEBO</h1>
          <h2 className="text-sm text-blue-300 font-extralight tracking-widest uppercase">
            Full Stack Data Scientist
          </h2>
        </div>
      </div>

      <NavMenu />
      <SocialIcons />
    </div>
  );
};

export default Home;