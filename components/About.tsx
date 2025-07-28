"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";
import { getCloudinaryImageBaseUrl } from "@/utils/helpers";

const PORTRAIT_IMAGE = "/v1753684843/rahul-portrait_juhupj.jpg";
const ABOUT_HERO = "/v1753684867/about-hero_fiea5g.jpg";

const AboutSection = memo(() => {
  const cloudinaryImageBaseUrl = getCloudinaryImageBaseUrl();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  const stats = [
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Passion for Photography" },
    { number: "Fresh", label: "Creative Perspective" },
    { number: "∞", label: "Dedication to Excellence" },
  ];

  return (
    <section
      className="relative w-full py-20 px-4 sm:px-8 bg-black"
      aria-labelledby="about-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-blue-400 text-sm font-medium uppercase tracking-wider">
              About Us
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Story
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I&apos;m Rahul Nag, an emerging photographer with a fresh
            perspective and boundless passion for capturing life&apos;s most
            precious moments. Every shot is an opportunity to create something
            beautiful, and I approach each project with creativity, dedication,
            and an unwavering commitment to exceeding expectations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <Image
                src={`${cloudinaryImageBaseUrl}${ABOUT_HERO}`}
                alt="Rahul Nag - Photographer"
                width={600}
                height={400}
                className="w-full lg:h-[660px] h-[500px] object-cover rounded-2xl shadow-2xl"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              A Fresh Vision in Photography
            </h3>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                My journey into photography began with a simple fascination for
                capturing the beauty in everyday moments. What started as a
                hobby has quickly grown into a passionate pursuit of visual
                storytelling. I believe that every moment tells a story, and my
                mission is to capture those stories with fresh eyes, creativity,
                and genuine care.
              </p>

              <p>
                As a new photographer, I bring enthusiasm, modern techniques,
                and a hunger to create something extraordinary with every shoot.
                I don&apos;t just take pictures – I craft visual narratives that
                evoke emotions, preserve memories, and celebrate the unique
                beauty in each moment.
              </p>

              <p>
                Whether it&apos;s an intimate portrait session, a special
                celebration, or a creative project, I approach every opportunity
                with fresh energy and meticulous attention to detail. My goal is
                simple: to deliver stunning images that not only meet but exceed
                your expectations, creating memories you&apos;ll treasure
                forever.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", title: "Precision", desc: "Every shot matters" },
                {
                  icon: "💡",
                  title: "Creativity",
                  desc: "Unique perspectives",
                },
                { icon: "❤️", title: "Passion", desc: "Love what we do" },
                { icon: "🤝", title: "Trust", desc: "Reliable partnership" },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{value.icon}</div>
                  <h4 className="text-white font-semibold mb-1">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl hover:from-white/10 hover:to-white/15 transition-all duration-300"
              >
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Section */}
        <div
          className={`transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Meet{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Rahul Nag
                </span>
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Based in Sydney, I&apos;m an emerging photographer who
                  discovered my passion for visual storytelling through a love
                  of capturing authentic moments. Though I&apos;m new to the
                  professional scene, my enthusiasm and fresh perspective drive
                  me to create meaningful visual experiences for every client.
                </p>

                <p>
                  I&apos;m eager to work across various photography styles –
                  from intimate portraits and special celebrations to creative
                  projects and events. Each opportunity is a chance to grow,
                  learn, and deliver something truly special while building
                  lasting relationships with my clients.
                </p>

                <p>
                  When I&apos;m not behind the camera, you&apos;ll find me
                  exploring Sydney&apos;s stunning locations, studying the work
                  of master photographers, practicing new techniques, and
                  constantly seeking inspiration to bring fresh ideas to every
                  shoot.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src={`${cloudinaryImageBaseUrl}${PORTRAIT_IMAGE}`}
                alt="Rahul Nag - Photographer"
                width={500}
                height={600}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
