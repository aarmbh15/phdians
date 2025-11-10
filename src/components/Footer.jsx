import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.PNG';
import Marquee from 'react-fast-marquee';

// -----------------------------------------------------------------
// ✅ STATIC IMPORTS — Safe for Deployment
// -----------------------------------------------------------------
import Partner1 from '../assets/Global Partner/1.png';
import Partner2 from '../assets/Global Partner/2.png';
import Partner3 from '../assets/Global Partner/3.jpg';
import Partner4 from '../assets/Global Partner/4.jpg';
import Partner5 from '../assets/Global Partner/5.jpg';
import Partner6 from '../assets/Global Partner/6.jpg';
import Partner7 from '../assets/Global Partner/7.jpg';
import Partner8 from '../assets/Global Partner/8.png';
import Partner9 from '../assets/Global Partner/9.jpg';
import Partner10 from '../assets/Global Partner/10.png';
import Partner11 from '../assets/Global Partner/11.jpg';
import Partner12 from '../assets/Global Partner/12.jpg';
import Partner13 from '../assets/Global Partner/13.jpg';
import Partner14 from '../assets/Global Partner/14.jpg';
import Partner15 from '../assets/Global Partner/15.png';
import Partner16 from '../assets/Global Partner/16.png';
import Partner17 from '../assets/Global Partner/17.jpg';
import Partner18 from '../assets/Global Partner/18.png';
import Partner19 from '../assets/Global Partner/19.jpg';
import Partner20 from '../assets/Global Partner/20.jpg';
import Partner21 from '../assets/Global Partner/21.jpg';

// -----------------------------------------------------------------
// 🧩 PARTNER IMAGES ARRAY
// -----------------------------------------------------------------
const partnerImages = [
  Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7,
  Partner8, Partner9, Partner10, Partner11, Partner12, Partner13,
  Partner14, Partner15, Partner16, Partner17, Partner18, Partner19,
  Partner20, Partner21,
];

// -----------------------------------------------------------------
// 🌍 FOOTER COMPONENT
// -----------------------------------------------------------------
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      
      {/* === Global Partners Marquee Banner === */}
      <div className="py-6 border-b border-gray-800 overflow-hidden">
        <h3 className="text-center text-md font-bold text-white uppercase tracking-wider mb-4 px-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
             Global Partners
          </span>
        </h3>
        
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {partnerImages.map((src, index) => (
            <div key={index} className="flex items-center mx-8 md:mx-12 h-16 md:h-20">
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="h-full w-auto object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500 max-w-none"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* === Footer Main Content === */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* === Brand Section with Logo === */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center justify-center md:justify-start gap-3 mb-3"
            >
              <img
                src={Logo}
                alt="PhDians Logo"
                className="h-20 w-20 object-contain shadow-md hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Celebrating research, connecting minds,
              <br />
              advancing science.
            </p>
          </div>

          {/* === Quick Links === */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                { to: '/about', label: 'About' },
                { to: '/hall-of-honour', label: 'Hall of Honour' },
                { to: '/publications', label: 'Publications' },
                { to: '/join', label: 'Join' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-cyan-400 transition duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Contact & Social === */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                Email:{' '}
                <a
                  href="mailto:phdians@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition font-medium"
                >
                  phdians@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <span className="text-cyan-400 font-medium">+91 9538354137</span>
              </p>
              <p>
                Instagram:{' '}
                <a
                  href="https://instagram.com/phdians"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition font-medium"
                >
                  @phdians
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* === Bottom Bar === */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} PhDians. All rights reserved.</p>
          <p className="mt-1">Empowering researchers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
