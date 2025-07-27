"use client";

import { useState, useEffect, useMemo, useCallback, memo } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  onPortfolioClick?: () => void;
}

// Service data constants moved outside component to prevent recreation
const SERVICE_CONFIG = {
  Photography: {
    description:
      "Capturing life's precious moments with artistic precision, creative vision, and professional expertise that tells your unique story.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  Videography: {
    description:
      "Bringing stories to life through cinematic storytelling, motion graphics, and visual narratives that captivate and inspire.",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
} as const;

// Floating particles component extracted for better performance
const FloatingParticles = memo(({ isVisible }: { isVisible: boolean }) => {
  // Memoize particle positions to prevent recalculation on every render
  const particles = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        left: `${20 + i * 15}%`,
        top: `${30 + i * 8}%`,
        delay: `${i * 0.2}s`,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-2 h-2 bg-white/20 rounded-full transition-all duration-1000 ${
            isVisible ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
});

FloatingParticles.displayName = "FloatingParticles";

const ServiceCard = memo<ServiceCardProps>(
  ({ title, image, onPortfolioClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Memoize service config to prevent object recreation
    const serviceConfig = useMemo(
      () => SERVICE_CONFIG[title as keyof typeof SERVICE_CONFIG],
      [title]
    );

    // Memoize event handlers to prevent unnecessary re-renders
    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);
    const handlePortfolioClick = useCallback(() => {
      onPortfolioClick?.();
    }, [onPortfolioClick]);

    return (
      <article
        className="group relative h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700/50 shadow-2xl transition-all duration-700 hover:border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        aria-label={`${title} service card`}
      >
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={image}
            alt={`${title} service showcase`}
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2"
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Floating Elements */}
        <FloatingParticles isVisible={isHovered} />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          {/* Service Icon */}
          <div className="mb-4 transform transition-all duration-500 group-hover:scale-110">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              {serviceConfig?.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-700">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-base mb-6 leading-relaxed transform transition-all duration-500 group-hover:text-gray-200">
            {serviceConfig?.description}
          </p>

          {/* Action Button */}
          <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={handlePortfolioClick}
              className="group/btn relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              aria-label={`View ${title} portfolio`}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Portfolio
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-500 pointer-events-none" />
      </article>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

// Services data moved outside component for better performance
const SERVICES_DATA = [
  { title: "Photography", image: "/photography.jpg", delay: 200 },
  { title: "Videography", image: "/videography.jpg", delay: 400 },
] as const;

// Background component extracted for better organization
const ServicesBackground = memo(() => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
  </div>
));

ServicesBackground.displayName = "ServicesBackground";

// Header component extracted for better organization
const ServicesHeader = memo(({ isVisible }: { isVisible: boolean }) => (
  <header
    className={`text-center mb-16 transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
  >
    <div className="inline-block mb-4">
      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-blue-400 text-sm font-medium uppercase tracking-wider">
        What We Offer
      </span>
    </div>

    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
      Our{" "}
      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Services
      </span>
    </h2>

    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
      We blend artistic vision with technical excellence to create unforgettable
      visual experiences.
    </p>
  </header>
));

ServicesHeader.displayName = "ServicesHeader";

const ServicesSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  // Memoize portfolio click handler
  const handlePortfolioClick = useCallback((serviceTitle: string) => {
    console.log(`Navigate to ${serviceTitle} portfolio`);
    // Add navigation logic here
  }, []);

  return (
    <section
      className="relative w-full py-20 px-4 sm:px-8 bg-black"
      aria-labelledby="services-heading"
    >
      {/* Background elements */}
      <ServicesBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <ServicesHeader isVisible={isVisible} />

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16" role="list">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
              role="listitem"
            >
              <ServiceCard
                title={service.title}
                image={service.image}
                onPortfolioClick={() => handlePortfolioClick(service.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
