import React from 'react';

const NavMenu = () => {
  return (
    <div className="absolute top-8 right-8 z-20">
      <div className="flex gap-4 p-4 rounded-2xl backdrop-blur-sm bg-black/10 border border-white/5"
           style={{
             boxShadow: '0 4px 24px -1px rgba(56,182,255,0.15)',
             background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(30,64,175,0.05) 100%)',
           }}>
        <button className="px-8 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-blue-900/30 transition-all duration-300 text-white/90 text-sm uppercase tracking-widest font-extralight hover:shadow-[0_0_20px_rgba(56,182,255,0.5)] hover:text-white flex items-center gap-2">
          About Me <span className="text-lg">+</span>
        </button>
        <button className="px-8 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-blue-900/30 transition-all duration-300 text-white/90 text-sm uppercase tracking-widest font-extralight hover:shadow-[0_0_20px_rgba(56,182,255,0.5)] hover:text-white flex items-center gap-2">
          Projects <span className="text-lg">+</span>
        </button>
        <button className="px-8 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-blue-900/30 transition-all duration-300 text-white/90 text-sm uppercase tracking-widest font-extralight hover:shadow-[0_0_20px_rgba(56,182,255,0.5)] hover:text-white flex items-center gap-2">
          Resume <span className="text-lg">+</span>
        </button>
      </div>
    </div>
  );
};

export default NavMenu;