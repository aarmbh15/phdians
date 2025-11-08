export default function Contact() {
    return (
      <section className="py-32 px-6 bg-gray-900 overflow-hidden">
        
        {/* --- CSS Keyframes for Animations --- */}
        <style>{`
            @keyframes headerFadeUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-header-fade {
                animation: headerFadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                opacity: 0; 
            }
        `}</style>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white animate-header-fade">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-header-fade" style={{ animationDelay: '0.3s' }}>
            Get in touch with PhDians for collaborations, submissions, or membership inquiries.
          </p>
  
          {/* Contact Details (Staggered fade-in) */}
          <div className="space-y-6 text-lg text-gray-300">
            <p className="animate-header-fade" style={{ animationDelay: '0.5s' }}>
              Email:{' '}
              <a href="mailto:phdians@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-medium transition duration-300 hover:underline">
                phdians@gmail.com
              </a>
            </p>
            <p className="animate-header-fade" style={{ animationDelay: '0.6s' }}>
              Phone:{' '}
              <span className="text-cyan-400 font-medium">+91 9538354137</span>
            </p>
            <p className="animate-header-fade" style={{ animationDelay: '0.7s' }}>
              Instagram:{' '}
              <a
                href="https://instagram.com/phdians"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition duration-300 hover:underline"
              >
                @phdians
              </a>
            </p>
          </div>
  
          <div className="mt-12 flex justify-center gap-4 animate-header-fade" style={{ animationDelay: '0.9s' }}>
            <a
              href="mailto:phdians@gmail.com"
              className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:scale-[1.05]"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    );
  }