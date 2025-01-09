import React from 'react';

const ShootingStar = ({ position }) => {
  return (
    <div 
      className="absolute"
      style={{
        top: `${position.y}%`,
        left: `${position.x}%`,
      }}
    >
      <div className="relative animate-shooting-star">
        <div 
          className="absolute w-1 h-1 bg-blue-300 rounded-full"
          style={{ 
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute animate-tail"
          style={{
            height: '1px',
            background: 'linear-gradient(-135deg, rgba(56,182,255,0.8) 0%, transparent 100%)',
            transform: 'rotate(-135deg)',
            transformOrigin: 'left center',
          }}
        />
      </div>
    </div>
  );
};

export default ShootingStar;