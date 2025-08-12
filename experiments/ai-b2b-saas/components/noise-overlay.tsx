"use client"

export function NoiseOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] dark:opacity-[0.025]">
      <div className="absolute inset-0 bg-noise animate-noise-drift" />
      <style jsx>{`
        .bg-noise {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0),
            radial-gradient(circle at 2px 3px, rgba(0,0,0,0.1) 1px, transparent 0),
            radial-gradient(circle at 3px 1px, rgba(0,0,0,0.12) 1px, transparent 0),
            radial-gradient(circle at 1px 4px, rgba(0,0,0,0.08) 1px, transparent 0);
          background-size: 8px 8px, 12px 12px, 16px 16px, 20px 20px;
          background-position: 0 0, 4px 6px, 8px 2px, 2px 8px;
          filter: contrast(1.2) brightness(1.1);
        }
        
        .animate-noise-drift {
          animation: noise-drift 8s infinite linear;
        }
        
        @keyframes noise-drift {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-1px, 1px) scale(1.001);
          }
          50% {
            transform: translate(1px, -1px) scale(0.999);
          }
          75% {
            transform: translate(-0.5px, -0.5px) scale(1.0005);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-noise-drift {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}