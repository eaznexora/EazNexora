"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <main className="min-h-screen bg-[url('/bg.jpeg')] bg-cover bg-[center_0px] bg-no-repeat w-full">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Section 1: Navbar */}
        <nav className="flex justify-between items-center w-full px-6 py-6 md:px-12 md:py-8 animate-fade-in-down">
          <img src="/eaz-nexora-logo.png" alt="Eaz Nexora Logo" className="h-8 md:h-10 w-auto object-contain" />
          <button className="bg-[#111111] hover:bg-black text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full flex items-center gap-2 text-xs md:text-sm font-medium transition-all shadow-md">
            Let&apos;s Talk
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </nav>

        {/* Section 2: Hero & Typography */}
        <section className="flex flex-col items-center justify-center text-center mt-4 md:mt-8 px-4 w-full animate-fade-in-up">
          <div className="flex items-center gap-2.5 bg-white/60 backdrop-blur-md px-4 py-1.5 md:py-2 rounded-full border border-white/50 shadow-sm mb-6 md:mb-8">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#185adb] shadow-[0_0_8px_rgba(24,90,219,0.5)]" />
            <span className="text-xs md:text-sm font-semibold text-gray-800">A New Digital Experience is Being Crafted</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight md:leading-tight text-[#111111] mb-4 md:mb-6">
            A New Chapter
            <br />
            <span className="text-[#185adb]">
              Begins Soon.
            </span>
          </h1>

          <p className="max-w-md md:max-w-lg lg:max-w-xl text-sm md:text-base text-gray-700 font-medium leading-relaxed">
            We&apos;re making a few improvements, driven by creativity and our passion for helping businesses grow online.
          </p>
        </section>

        {/* Content Container for remaining sections */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-8 mt-8 md:mt-12 flex flex-col gap-8 md:gap-12">
          {/* Section 3: Glassmorphic Feature Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Card 1 */}
            <div className="relative flex flex-col justify-between bg-transparent border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-[3rem] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
              <div>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                  Crafting New Experiences
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We are building innovative solutions that solve real problems and drive growth.
                </p>
              </div>
              <button className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-[0_12px_24px_-6px_rgba(0,0,0,0.15)] ml-auto mt-4 text-black hover:scale-105 transition-transform">
                <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="relative flex flex-col justify-between bg-transparent border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-[3rem] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">
                  Sharper Case Studies
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Real results, real stories. Better showcases of the impact we create.
                </p>
              </div>
              <button className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-[0_12px_24px_-6px_rgba(0,0,0,0.15)] ml-auto mt-4 text-black hover:scale-105 transition-transform">
                <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col justify-between bg-transparent border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-[3rem] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
              <div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">
                  Creative Momentum
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thoughtfully improving every detail to create a better digital experience.
                </p>
              </div>
              <button className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-[0_12px_24px_-6px_rgba(0,0,0,0.15)] ml-auto mt-4 text-black hover:scale-105 transition-transform">
                <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </div>

            {/* Card 4 */}
            <div className="relative flex flex-col justify-between bg-transparent border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-[3rem] p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
              <div>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                  More Powerful Solutions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advanced strategies and stronger systems to help brands scale effortlessly.
                </p>
              </div>
              <button className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-[0_12px_24px_-6px_rgba(0,0,0,0.15)] ml-auto mt-4 text-black hover:scale-105 transition-transform">
                <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </div>
          </section>

          {/* Section 4: WhatsApp Contact Banner */}
          <section className="w-full">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-2 px-4 md:py-1 md:px-6 md:pl-8 bg-transparent border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-[2rem] md:rounded-full transition-all">
              <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 md:text-lg">Have a project in mind?</h4>
                  <p className="text-sm text-gray-700 mt-1 max-w-md">
                    Don&apos;t worry, we&apos;re still available on WhatsApp for inquiries and new projects.
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-3 md:gap-4 bg-[#111111] hover:bg-black text-white pl-6 pr-1.5 py-1.5 rounded-full transition-transform hover:scale-105 w-full md:w-auto justify-between md:justify-center">
                <span className="text-sm font-medium">Chat on WhatsApp</span>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center shadow-sm">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </button>
            </div>
          </section>

          {/* Section 5: Footer/Status Card */}
          <section className="w-full">
            <div className="flex flex-col md:flex-row bg-[#0A1128] rounded-3xl overflow-hidden relative shadow-2xl">
              <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 self-start backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-medium text-white/90 uppercase tracking-wider">Currently Building</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-3 leading-tight max-w-[95%]">
                  The finishing touches<br />are underway.
                </h2>
                <p className="text-white/60 text-base md:text-lg max-w-md">
                  Launching when it&apos;s perfect, not when it&apos;s rushed.
                </p>
              </div>

              <div className="w-full md:w-1/2 h-56 md:h-auto relative bg-[#0A1128] flex items-center justify-center">
                <img src="/nexora_reveal.png" alt="Nexora Reveal" className="absolute inset-0 w-full h-full object-cover md:object-contain md:scale-[0.85] opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/50 to-transparent hidden md:block w-1/3" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
