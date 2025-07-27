// 'use client';

// import { useEffect, useRef } from 'react';

// const VideoBackground: React.FC = () => {
//   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

//   useEffect(() => {
//     videoRefs.current.forEach((video) => {
//       video?.play().catch((err) => {
//         console.error('Auto-play was prevented:', err);
//       });
//     });
//   }, []);

//   const videoSources = [
//     '/bg-video.mp4',
//     // '/1.MP4',
//     // '/2.MP4',
//     // '/3.MP4',
//     // '/4.MP4',
//   ];

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
//       {/* Grid of videos */}
//       <div className="absolute inset-0 grid grid-cols-1 w-full h-full z-[-1]">
//         {videoSources.map((src, idx) => (
//           <video
//             key={idx}
//             ref={(el) => {
//               videoRefs.current[idx] = el;
//             }}
//             src={src}
//             muted
//             loop
//             playsInline
//             autoPlay
//             preload="auto"
//             className="w-full h-full object-cover"
//           />
//         ))}
//         {/* <video src={"/bg-video.mp4"} muted loop playsInline autoPlay preload="auto" className="w-full h-full object-cover" /> */}
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Hero Text */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
//         <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white drop-shadow-lg animate-fadein">
//           Welcome to <span>CineVisualStudios</span>
//         </h1>
//         <p className="text-lg sm:text-xl text-white/80 font-medium animate-fadein [animation-delay:0.3s]">
//           Experience the magic of motion and design
//         </p>
//       </div>

//       <style>
//         {`
//           @keyframes fadein {
//             from { opacity: 0; transform: translateY(16px);}
//             to { opacity: 1; transform: translateY(0);}
//           }
//           .animate-fadein {
//             animation: fadein 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default VideoBackground;


'use client';

import { useEffect, useRef, useState } from 'react';

const VideoBackground: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      video?.play().catch((err) => {
        console.error('Auto-play was prevented:', err);
      });
    });
    
    // Trigger animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const videoSources = [
    '/bg-video.mp4',
    // '/1.MP4',
    // '/2.MP4',
    // '/3.MP4',
    // '/4.MP4',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        {videoSources.map((src, idx) => (
          <video
            key={idx}
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
            src={src}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.7) contrast(1.1)',
            }}
          />
        ))}
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />

      {/* Animated particles/dots */}
      <div className="absolute inset-0 z-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center justify-center px-6 text-center max-w-6xl mx-auto">
        {/* Main title with enhanced styling */}
        <div className="mb-8">
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 text-white leading-tight transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
              Cine
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
              Visual
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Studios
            </span>
          </h1>
        </div>

        {/* Subtitle with better typography */}
        <p className={`text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-8 max-w-4xl leading-relaxed transition-all duration-1000 ease-out delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Where <span className="text-white font-medium">cinematic storytelling</span> meets{' '}
          <span className="text-white font-medium">visual artistry</span>
        </p>

        {/* CTA Buttons */}
        {/* <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 ease-out delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <span className="relative z-10">Get In Touch</span>
          </button>
        </div> */}

        {/* Scroll indicator */}
        {/* <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col items-center text-white/60">
            <span className="text-xs uppercase tracking-wider mb-2">Scroll to explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent relative">
              <div className="absolute top-0 w-px h-4 bg-white animate-scroll-down" />
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(48px); opacity: 0; }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
        
        /* Backdrop blur fallback */
        @supports not (backdrop-filter: blur(10px)) {
          .backdrop-blur-sm {
            background-color: rgba(255, 255, 255, 0.15);
          }
        }
      `}</style>
    </div>
  );
};

export default VideoBackground;