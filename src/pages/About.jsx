import React from 'react';

// --- Image Imports ---
import authorImg1 from '../assets/Author Gallary/author 1.jpg';
import authorImg3 from '../assets/Author Gallary/author 3.jpg';
import authorImg4 from '../assets/Author Gallary/author 4.jpg';
import authorImg5 from '../assets/Author Gallary/Author 5.jpg';
import authorImg6 from '../assets/Author Gallary/Author 6.jpg';
import authorImg7 from '../assets/Author Gallary/Author 7.jpg';
import authorImg8 from '../assets/Author Gallary/Author 8.jpg';
import authorImg9 from '../assets/Author Gallary/author 9.jpg';
import authorImg0 from '../assets/Author Gallary/author10.jpg';

// --- Data for Author Cards ---
const authorProfiles = [
  { src: authorImg0, name: 'Ms. Simran. I', title: 'Lead Researcher' },
  { src: authorImg1, name: 'Author Name 2', title: 'Data Scientist' },
  { src: authorImg3, name: 'Author Name 3', title: 'PhD Scholar' },
  { src: authorImg4, name: 'Author Name 4', title: 'Professor Emeritus' },
  { src: authorImg5, name: 'Author Name 5', title: 'Sr. Fellow' },
  { src: authorImg6, name: 'Author Name 6', title: 'Astrophysicist' },
  { src: authorImg7, name: 'Author Name 7', title: 'Medical Doctor' },
  { src: authorImg8, name: 'Author Name 8', title: 'AI Expert' },
  { src: authorImg9, name: 'Author Name 9', title: 'Economist' },
  // Adding a few more profiles to ensure scrolling is visible
  // { src: authorImg0, name: 'Author Name 10', title: 'Biologist' },
  // { src: authorImg1, name: 'Author Name 11', title: 'Chemist' },
];

// --- Author Card Component ---
const AuthorCard = ({ src, name, title, delay }) => (
  <div
    className={`flex-shrink-0 min-w-32 text-center p-3 sm:p-4 bg-gray-800 rounded-lg shadow-xl hover:shadow-cyan-500/50 transition duration-500 ease-in-out transform hover:scale-105 mx-2 sm:mx-3`}
    style={{
      // Re-using the slideIn animation for a staggered effect
      animation: `slideIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
      animationDelay: `${delay}ms`,
      opacity: 0, 
      transform: 'translateY(15px)', // Increased initial translateY for more impact
    }}
  >
    <img
      src={src}
      alt={name}
      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mx-auto mb-2 border-3 border-cyan-400/50 transition duration-300 transform group-hover:rotate-6" // Added a subtle rotate on hover
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/80x80/374151/FFFFFF?text=P";
      }}
    />
    <h4 className="text-sm font-semibold text-white truncate">{name}</h4>
    <p className="text-xs text-gray-400 truncate">{title}</p>
  </div>
);

// --- About Page Component ---
export default function About() {
  return (
    <section className="min-h-screen py-20 lg:py-32 px-4 sm:px-6 bg-gray-900 relative overflow-hidden">
      
      {/* Background Glow Effect - New Addition */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 opacity-10 blur-3xl rounded-full animate-slow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 opacity-10 blur-3xl rounded-full animate-slow-pulse-delay" />

      <style>{`
        /* Keyframes for the AuthorCard slideIn animation */
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Keyframes for the Header fade-up animation */
        @keyframes headerFadeUp {
            from {
                opacity: 0;
                transform: translateY(30px); /* More aggressive initial move */
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-header-fade {
            animation: headerFadeUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        /* Keyframes for the Section fade-in animation (for content further down) */
        @keyframes sectionFadeIn {
            from { 
              opacity: 0; 
              transform: translateY(20px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
        }
        .animate-section-fade {
            animation: sectionFadeIn 1s ease-out forwards;
            opacity: 0; /* Start hidden */
            transform: translateY(20px); /* Start slightly below */
        }
        /* Keyframes for the subtle background glow */
        @keyframes slowPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
        }
        .animate-slow-pulse {
            animation: slowPulse 10s infinite ease-in-out;
        }
        .animate-slow-pulse-delay {
            animation: slowPulse 10s infinite ease-in-out 5s; /* 5 second delay to offset the pulse */
        }
      `}</style>
      
      {/* Ensure all content is above the background effects */}
      <div className="max-w-7xl mx-auto space-y-20 relative z-10"> 

        {/* Header - Added Initial Animation */}
        <header className="text-center animate-header-fade">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white transition duration-700 ease-out">
            About PhDians
          </h1>
          <p className="text-base sm:text-xl text-gray-400 mt-4 max-w-3xl mx-auto px-2 transition duration-700 delay-300 ease-out">
            A global platform dedicated to celebrating the scientific community and promoting research excellence** across all disciplines.
          </p>
        </header>

        {/* Authors Section - Staggered Animation */}
        <div className="space-y-8 sm:space-y-12 animate-section-fade" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
            Featured <span className="text-cyan-400">Authors & Scholars</span>
          </h2>
          
          {/* SCROLLING CONTAINER */}
          <div className="flex overflow-x-scroll pb-4 -mx-4 sm:-mx-6 lg:-mx-8 cursor-grab scrollbar-thin scrollbar-thumb-cyan-500/50 hover:scrollbar-thumb-cyan-300 scrollbar-track-gray-800 transition duration-300">
            {authorProfiles.map((author, index) => (
              // Staggered slide-in effect
              <AuthorCard 
                key={index} 
                src={author.src} 
                name={author.name} 
                title={author.title} 
                delay={20 * index + 600} // Small stagger for a ripple effect
              />
            ))}
          </div>
        </div>
        
        {/* --- Horizontal Rule for separation --- */}
        <hr className="border-gray-700 max-w-4xl mx-auto transition duration-1000 transform hover:scale-x-105" />

        {/* Mission & Vision - Enhanced Hover/Transition */}
        <div className="space-y-12 animate-section-fade" style={{ animationDelay: '1.2s' }}>
            <h2 className="text-4xl font-bold text-white text-center">
                Our <span className="text-cyan-400">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Vision Card - Added Subtle Shadow Pulse */}
                <div className="bg-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 shadow-lg transition duration-500 group transform hover:scale-[1.03] hover:shadow-cyan-500/20">
                    <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition duration-300">
                        Vision
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        To create a world where scientific discovery knows no boundaries and **collaboration drives innovation**.
                    </p>
                </div>

                {/* Mission Card - Added Subtle Shadow Pulse */}
                <div className="bg-gray-800/60 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 shadow-lg transition duration-500 group transform hover:scale-[1.03] hover:shadow-cyan-500/20">
                    <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition duration-300">
                        Mission
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        PhDians is committed to **honouring scientific excellence**, empowering researchers, and fostering a **global community** of scholars.
                    </p>
                </div>
            </div>
        </div>

        {/* --- Horizontal Rule for separation --- */}
        <hr className="border-gray-700 max-w-4xl mx-auto transition duration-1000 transform hover:scale-x-105" />


        {/* Initiative - Added Simple Fade-in/up */}
        <div className="max-w-5xl mx-auto space-y-6 pt-10 animate-section-fade" style={{ animationDelay: '1.8s' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">
            The PhDians <span className="text-cyan-400">Initiative</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            PhDians was founded to address the growing need for a centralized, supportive, and international platform that not only showcases high-impact research but also connects scholars across various disciplines and geographies.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed border-l-4 border-cyan-400 pl-4 italic transition duration-500 hover:border-cyan-200">
            Over the years, PhDians has grown into a thriving **international network** that champions open science, mentorship, and cross-cultural academic exchange, empowering the next generation of thought leaders.
          </p>
        </div>
        
        {/* --- Horizontal Rule for separation --- */}
        <hr className="border-gray-700 max-w-4xl mx-auto transition duration-1000 transform hover:scale-x-105" />

        {/* Board & Mentors - Enhanced Transition on Hover */}
        <div className="pt-10 animate-section-fade" style={{ animationDelay: '2.4s' }}>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
                Leadership & <span className="text-cyan-400">Support</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Advisory Board / Founders Card */}
                <div className="space-y-4 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition duration-500 transform hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan-500/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                        <span className="text-cyan-400 mr-3 text-3xl transition duration-300">★</span> Advisory Board / Founders
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                        Our advisory board is composed of **distinguished academicians and leaders** from top institutions worldwide, guiding our strategic direction.
                    </p>
                </div>

                {/* Our Mentors Card */}
                <div className="space-y-4 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition duration-500 transform hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan-500/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                        <span className="text-cyan-400 mr-3 text-3xl transition duration-300">🎓</span> Our Mentors
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                        PhDians mentors are **leaders with 25+ years of experience** in research, industry, and academia, providing invaluable career guidance.
                    </p>
                </div>

                {/* Global Collaborations Card */}
                <div className="space-y-4 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition duration-500 transform hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan-500/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                        <span className="text-cyan-400 mr-3 text-3xl transition duration-300">🌐</span> Global Collaborations
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                        We foster active **collaborations with research institutes and universities worldwide** to maximize our collective scientific impact.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}