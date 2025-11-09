import React from 'react';

// --- Placeholder for Members (Since you don't have images for them) ---
const PLACEHOLDER_IMAGE = 'BLANK_MEMBER_IMAGE'; 

// --- LEGEND IMAGE IMPORTS (Verified and kept) ---
import apj_kalam from "../assets/Legend/apj.jpg";
import carl_sagan from "../assets/Legend/carl.jpg";
import charles_darwin from "../assets/Legend/chalrlie.jpg";
import s_chandrasekhar from "../assets/Legend/chandrshekhar.jpg";
import cv_raman from "../assets/Legend/cv.jpg"; 
import albert_einstein from "../assets/Legend/einstine.webp";
import elon_musk from "../assets/Legend/elon.webp";
import rosalind_franklin from "../assets/Legend/franklin.jpg";
import gagandeep_kang from "../assets/Legend/gangadeep.jpg";
import homi_bhabha from "../assets/Legend/homi.jpg";
import jane_goodall from "../assets/Legend/jane.webp";
import k_kasturirangan from "../assets/Legend/kasturigan.avif";
import marie_curie from "../assets/Legend/marie.jpg";
import ra_mashelkar from "../assets/Legend/mashelkar.jpg"; 
import isaac_newton from "../assets/Legend/newton.jpg";
import stephen_hawking from "../assets/Legend/stephen.jpg";
import ms_swaminathan from "../assets/Legend/swaminathan.webp";
import nikola_tesla from "../assets/Legend/tesl.jpeg";
import tessy_thomas from "../assets/Legend/tessy.avif";
import vikram_sarabhai from "../assets/Legend/vikram.png"; 

// --- CERTIFICATE IMAGE IMPORTS (New Imports) ---
// Assuming your Certificates folder is accessible via "../assets/Certificates/"
import cert1 from "../assets/Certificates/1.jpeg";
import cert2 from "../assets/Certificates/2.jpeg";
import cert3 from "../assets/Certificates/3.jpeg";
import cert4 from "../assets/Certificates/4.jpeg";
import cert5 from "../assets/Certificates/5.jpeg";
import cert6 from "../assets/Certificates/6.jpeg";
import cert7 from "../assets/Certificates/7.jpeg";
import cert8 from "../assets/Certificates/8.jpeg";
import cert9 from "../assets/Certificates/9.jpeg";
import cert10 from "../assets/Certificates/10.jpeg";
import cert11 from "../assets/Certificates/11.jpeg";
import cert12 from "../assets/Certificates/12.jpeg";
import cert13 from "../assets/Certificates/13.jpeg";
import cert14 from "../assets/Certificates/14.jpeg";
import cert15 from "../assets/Certificates/15.jpeg";
import cert16 from "../assets/Certificates/16.jpeg";
import cert17 from "../assets/Certificates/17.jpeg";
import cert18 from "../assets/Certificates/18.jpeg";
import cert19 from "../assets/Certificates/19.jpeg";
import cert20 from "../assets/Certificates/20.jpeg";
import cert21 from "../assets/Certificates/21.jpeg";


// --- Component Data Arrays (Legends section is unchanged) ---
const legends = [
  { person: "Dr. A.P.J. Abdul Kalam", title: "“Missile Man of India”; former President; visionary behind India’s space and defence technology revolution", image: apj_kalam },
  { person: "Dr. C.V. Raman", title: "Nobel Laureate in Physics (1930) for discovering the Raman Effect", image: cv_raman },
  { person: "Dr. Homi J. Bhabha", title: "Architect of India’s nuclear programme and founder of BARC and TIFR", image: homi_bhabha },
  { person: "Dr. Vikram A. Sarabhai", title: "Father of the Indian Space Programme; established ISRO and promoted space applications for development", image: vikram_sarabhai },
  { person: "Dr. S. Chandrasekhar", title: "Nobel Laureate in Physics (1983); known for the Chandrasekhar Limit in stellar evolution", image: s_chandrasekhar },
  { person: "Dr. M.S. Swaminathan", title: "Father of the Green Revolution in India; champion of agricultural sustainability and food security", image: ms_swaminathan },
  { person: "Dr. K. Kasturirangan", title: "Space scientist; led ISRO’s scientific missions and national education policy reforms", image: k_kasturirangan },
  { person: "Dr. R. A. Mashelkar", title: "Chemical engineer; global leader in innovation policy, intellectual property, and sustainable technologies", image: ra_mashelkar }, 
  { person: "Dr. Tessy Thomas", title: "“Missile Woman of India”; key DRDO scientist behind Agni missile systems", image: tessy_thomas },
  { person: "Dr. Gagandeep Kang", title: "Leading microbiologist; expert in infectious diseases and vaccine research", image: gagandeep_kang },
  { person: "Albert Einstein", title: "Theoretical physicist; father of relativity; symbol of intellectual brilliance and humanism", image: albert_einstein },
  { person: "Marie Curie", title: "Pioneer in radioactivity; first person to win two Nobel Prizes in Physics and Chemistry", image: marie_curie },
  { person: "Stephen Hawking", title: "Theoretical physicist; advanced our understanding of black holes and cosmology despite physical adversity", image: stephen_hawking },
  { person: "Isaac Newton", title: "Mathematician and physicist; formulated laws of motion and universal gravitation", image: isaac_newton },
  { person: "Charles Darwin", title: "Naturalist; proposed the theory of evolution by natural selection", image: charles_darwin },
  { person: "Nikola Tesla", title: "Inventor and engineer; laid foundations for AC electricity, wireless energy, and modern electrical systems", image: nikola_tesla },
  { person: "Rosalind Franklin", title: "Molecular biophysicist; provided key X-ray data for discovery of DNA structure", image: rosalind_franklin },
  { person: "Carl Sagan", title: "Astrophysicist and communicator; popularized science and cosmic exploration", image: carl_sagan },
  { person: "Jane Goodall", title: "Primatologist; transformed our understanding of animal behaviour and conservation", image: jane_goodall },
  { person: "Elon Musk", title: "Entrepreneur-engineer; leading innovations in electric vehicles, space technology, and sustainable energy", image: elon_musk },
];

// --- New Certificate Data Array ---
const certificates = [
  { id: 1, image: cert1, alt: "Certificate 1" },
  { id: 2, image: cert2, alt: "Certificate 2" },
  { id: 3, image: cert3, alt: "Certificate 3" },
  { id: 4, image: cert4, alt: "Certificate 4" },
  { id: 5, image: cert5, alt: "Certificate 5" },
  { id: 6, image: cert6, alt: "Certificate 6" },
  { id: 7, image: cert7, alt: "Certificate 7" },
  { id: 8, image: cert8, alt: "Certificate 8" },
  { id: 9, image: cert9, alt: "Certificate 9" },
  { id: 10, image: cert10, alt: "Certificate 10" },
  { id: 11, image: cert11, alt: "Certificate 11" },
  { id: 12, image: cert12, alt: "Certificate 12" },
  { id: 13, image: cert13, alt: "Certificate 13" },
  { id: 14, image: cert14, alt: "Certificate 14" },
  { id: 15, image: cert15, alt: "Certificate 15" },
  { id: 16, image: cert16, alt: "Certificate 16" },
  { id: 17, image: cert17, alt: "Certificate 17" },
  { id: 18, image: cert18, alt: "Certificate 18" },
  { id: 19, image: cert19, alt: "Certificate 19" },
  { id: 20, image: cert20, alt: "Certificate 20" },
  { id: 21, image: cert21, alt: "Certificate 21" },
];

// The MemberImage helper component and members array are now unnecessary 
// as the "Senior & Fellow Members" section is removed.

// ✅ Component
export default function HallOfHonour() {
  
  // Removed MemberImage and its usage as the Members section is gone.
  
  const legendsCount = legends.length;
  const initialDelay = 0.6 + legendsCount * 0.05; // Calculate starting delay for Certificates section

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen overflow-hidden">
      
      {/* --- CSS Keyframes for Animations --- */}
      <style>{`
        @keyframes headerFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-header-fade {
            animation: headerFadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            opacity: 0; 
        }
        .animate-card-slide {
            animation: slideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            opacity: 0; 
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- (Added Animation) */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white animate-header-fade">
          Hall of Honour
        </h1>
        <p className="text-center text-gray-400 mb-16 text-lg animate-header-fade" style={{ animationDelay: '0.3s' }}>
          Celebrating those who changed the world through science and innovation.
        </p>
        
        {/* --- Legends Section --- (Unchanged) */}
        <h2 className="text-4xl font-bold text-white mb-10 border-b-2 border-cyan-500/30 pb-2 animate-header-fade" style={{ animationDelay: '0.5s' }}>
          The Legends
        </h2>
        {/* Responsive Check: The grid layout (1, 2, 3, 4 columns) is inherently responsive. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {legends.map((p, index) => (
            <div
              key={p.person}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:border-cyan-500 transition-all duration-300 group text-center border-2 border-gray-700 hover:scale-[1.03] transform animate-card-slide"
              style={{ animationDelay: `${0.6 + index * 0.05}s` }} // Staggered delay
            >
              {/* Image Container for Legends - Enhanced Hover */}
              <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-4 border-cyan-500/50 flex items-center justify-center shadow-inner shadow-cyan-300/30 group-hover:border-cyan-300 transition-all duration-300">
                
                {p.image === PLACEHOLDER_IMAGE ? (
                  // Placeholder content for Dr. R. A. Mashelkar (or any other missing Legend image)
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 transition duration-500 group-hover:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 4 0 0 0-4-4H9a4 4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                ) : (
                  // Actual Image content
                  <img 
                    src={p.image} 
                    alt={p.person} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" // Image zoom on hover
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.style.display = 'none'; 
                      e.target.parentElement.innerHTML = '<div class="text-gray-500 text-xs p-4">Image Missing</div>';
                    }}
                  />
                )}
              </div>
              
              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">{p.person}</h4>
              <p className="text-sm text-gray-400 mt-1 line-clamp-3" title={p.title}>{p.title}</p>
            </div>
          ))}
        </div>

        {/* --- Certificates Section (New) --- */}
        <h2 className="text-4xl font-bold text-white mb-10 border-b-2 border-cyan-500/30 pb-2 animate-header-fade" style={{ animationDelay: `${initialDelay}s` }}>
          Certificates of Achievement
        </h2>
        {/* Responsive Grid: 2 columns on small, 3 on medium, 4 on large, 5 on extra-large */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              // Card styling is simplified for images, focusing on the container and hover effect
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 group border border-gray-700 hover:scale-[1.05] transform animate-card-slide"
              style={{ animationDelay: `${initialDelay + 0.1 + index * 0.03}s` }} 
            >
              <a href={cert.image} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img 
                  src={cert.image} 
                  alt={cert.alt} 
                  // Image is set to cover the container while maintaining aspect ratio
                  className="w-full h-full object-cover aspect-[4/3] group-hover:opacity-80 transition-opacity duration-300"
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.style.display = 'none'; 
                    e.target.parentElement.innerHTML = '<div class="p-4 text-center text-gray-500">Image Load Error</div>';
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}