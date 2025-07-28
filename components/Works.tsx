"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const imageList = [
  "/work1.jpg",
  "/work2.jpg",
  "/work3.jpg",
  "/work4.jpg",
  "/work5.jpg",
  "/work6.jpg",
  "/work7.jpg",
  "/work8.jpg",
  "/work9.jpg",
  "/work10.jpg",
];

const OurWorkGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative w-full bg-black py-20 px-6 sm:px-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-purple-400 text-sm font-medium uppercase tracking-wider">
              Portfolio
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of our finest moments captured through the lens of
            creativity and passion.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-5 gap-4 sm:gap-6">
          {imageList.map((imgSrc, index) => (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-2xl bg-gray-900 border border-gray-800/50 shadow-2xl cursor-pointer transition-all duration-700 hover:border-gray-700/50 hover:shadow-purple-500/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
              }}
              onClick={() => openModal(imgSrc)}
            >
              {/* Image */}
              <Image
                height={1000}
                width={1000}
                src={imgSrc}
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Hover content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 mx-auto border border-white/30">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">View Details</p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              height={1000}
              width={1000}
              src={selectedImage}
              alt="Full size work"
              className="max-w-full max-h-full w-96 object-contain rounded-2xl shadow-2xl"
            />

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurWorkGallery;
