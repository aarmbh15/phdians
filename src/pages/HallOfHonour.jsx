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
// The problematic import has been commented out to resolve the error
// import ra_mashelkar from "../assets/Legend/mashelkar.jpg"; 
import isaac_newton from "../assets/Legend/newton.jpg";
import stephen_hawking from "../assets/Legend/stephen.jpg";
import ms_swaminathan from "../assets/Legend/swaminathan.webp";
import nikola_tesla from "../assets/Legend/tesl.jpeg";
import tessy_thomas from "../assets/Legend/tessy.avif";
import vikram_sarabhai from "../assets/Legend/vikram.png"; 

// --- Component Data Arrays (Updated Dr. R. A. Mashelkar's image to use placeholder) ---
const legends = [
  { person: "Dr. A.P.J. Abdul Kalam", title: "“Missile Man of India”; former President; visionary behind India’s space and defence technology revolution", image: apj_kalam },
  { person: "Dr. C.V. Raman", title: "Nobel Laureate in Physics (1930) for discovering the Raman Effect", image: cv_raman },
  { person: "Dr. Homi J. Bhabha", title: "Architect of India’s nuclear programme and founder of BARC and TIFR", image: homi_bhabha },
  { person: "Dr. Vikram A. Sarabhai", title: "Father of the Indian Space Programme; established ISRO and promoted space applications for development", image: vikram_sarabhai },
  { person: "Dr. S. Chandrasekhar", title: "Nobel Laureate in Physics (1983); known for the Chandrasekhar Limit in stellar evolution", image: s_chandrasekhar },
  { person: "Dr. M.S. Swaminathan", title: "Father of the Green Revolution in India; champion of agricultural sustainability and food security", image: ms_swaminathan },
  { person: "Dr. K. Kasturirangan", title: "Space scientist; led ISRO’s scientific missions and national education policy reforms", image: k_kasturirangan },
  // Using PLACEHOLDER_IMAGE since the asset import was failing.
  { person: "Dr. R. A. Mashelkar", title: "Chemical engineer; global leader in innovation policy, intellectual property, and sustainable technologies", image: PLACEHOLDER_IMAGE }, 
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

const members = [
  { person: "Dr. Sonam Wangchuk", title: "Promoting sustainable innovation...", image: PLACEHOLDER_IMAGE },
  { person: "Mr. Samba Siva Rao Madamanchi", title: "Innovator in AI-driven robotics...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Allison Koenecke", title: "Researching algorithmic fairness...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Catherine Dulac", title: "Studying neural circuits...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Shweta Singh", title: "Developing carbon-neutral technologies...", image: PLACEHOLDER_IMAGE },
  { person: "Mr. Lakshmi Kalyani Chinthala", title: "AI-driven healthcare analytics...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Wen Sun", title: "Advancing reinforcement learning...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Melissa J. Moore", title: "Investigating RNA biology...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Ying Yang", title: "Creating recyclable polymers...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Deepa Khosla", title: "Investigating sustainable agriculture...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Amruta Gadre", title: "Researching microbial genomics...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Ravichandra Mulpuri", title: "Expert in materials science...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Siddharth Mishra Sharma", title: "Advancing quantum computing...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Sara Hooker", title: "Focusing on machine learning interpretability...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Marion Villenave", title: "Developing renewable energy solutions...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Sara Mascia", title: "Innovating in pharmaceutical development...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Veerendra Batulla", title: "Pioneer in robotics and automation...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Ilaria Caiazzo", title: "Astrophysicist studying exoplanets...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Shailesh Acharya", title: "Specializing in orthopedic research...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Catriona Nguyen-Robertson", title: "Immunologist and science communicator...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Ajay Kumar Kota", title: "Chemical engineering expert...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Syed Baker", title: "Leading research in nanotechnology...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Kanishka Biswas", title: "Materials scientist focused on thermoelectrics...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Garima Raheja", title: "Environmental science and sustainability...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Vikas Dhamu", title: "Researching plasma physics...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Monali Priyadarshini", title: "Expert in climate modeling...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Mahendra Patel", title: "Innovator in drug discovery...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Eshaan Patheria", title: "Neuroscientist studying brain function...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Harish Govinda Gowda", title: "Specialist in bioinformatics...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Neveen S. Gadallah", title: "Entomologist and biodiversity expert...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Tanima Dudani", title: "Cancer researcher and oncologist...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Harshita Sadhana", title: "Focusing on renewable materials...", image: PLACEHOLDER_IMAGE },
  { person: "Mr. Tejas Kumar", title: "Software engineer and open-source contributor...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Ghume Prajakta Chandrakant", title: "Food science and safety expert...", image: PLACEHOLDER_IMAGE },
  { person: "Mr. Gokul G. Nair", title: "Data scientist and machine learning specialist...", image: PLACEHOLDER_IMAGE },
  { person: "Mr. Santhosh Kumar Maddineni", title: "Expert in embedded systems...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Arnob Chakrovorty", title: "Quantum information theorist...", image: PLACEHOLDER_IMAGE },
  { person: "Dr. Banani Bhattacharjee", title: "Biotechnology and fermentation expert...", image: PLACEHOLDER_IMAGE },
];


// ✅ Component
export default function HallOfHonour() {
  
  // Helper Component for Image or Placeholder (Used only for Members section for size)
  const MemberImage = ({ person, image }) => {
    // If image is the placeholder, render a blank box
    if (image === PLACEHOLDER_IMAGE) {
      return (
        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gray-600 bg-gray-700 flex items-center justify-center transition duration-500 group-hover:bg-cyan-900/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 transition duration-500 group-hover:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
      );
    }
    
    // Otherwise, render the actual image
    return (
      <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-cyan-500/50 flex items-center justify-center transition duration-500 group-hover:border-cyan-300">
        <img 
          src={image} 
          alt={person} 
          className="w-full h-full object-cover" 
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.style.display = 'none'; 
            e.target.parentElement.innerHTML = '<div class="text-gray-500 text-xs p-2">Image Missing</div>';
          }}
        />
      </div>
    );
  };


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
        
        {/* --- Legends Section --- (Added Staggered Animation) */}
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
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

        {/* --- Members Section --- (Added Staggered Animation) */}
        <h2 className="text-4xl font-bold text-white mb-10 border-b-2 border-cyan-500/30 pb-2 animate-header-fade" style={{ animationDelay: `${0.6 + legends.length * 0.05}s` }}>
          Senior & Fellow Members
        </h2>
        {/* Responsive Check: The grid layout (2, 3, 4, 6 columns) is inherently responsive. */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {members.map((p, index) => (
            <div
              key={p.person}
              className="p-4 bg-gray-800 rounded-lg shadow hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 group text-center border border-gray-700 hover:scale-[1.05] transform animate-card-slide"
              style={{ animationDelay: `${1.2 + index * 0.03}s` }} 
            >
              
              {/* Image/Placeholder Component (Handles all Member placeholder images) */}
              <MemberImage person={p.person} image={p.image} />

              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">{p.person}</h4>
              <p className="text-xs text-gray-400 mt-1 truncate" title={p.title}>{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}