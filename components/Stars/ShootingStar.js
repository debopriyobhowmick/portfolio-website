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
      <style jsx>{`
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

export default ShootingStar;