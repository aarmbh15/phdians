import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.PNG';
import Marquee from 'react-fast-marquee';

// -----------------------------------------------------------------
// 🚀 DYNAMIC IMAGE IMPORT UTILITY (Clean and Scalable)
// -----------------------------------------------------------------

/**
 * Dynamically imports all partner images from the specified folder.
 * NOTE: This pattern uses features specific to module bundlers (like Webpack's require.context
 * or Vite's import.meta.glob). If you get errors, you may need to adjust the path or 
 * use the 21 explicit import statements from the previous response.
 * * I will use a simple function assuming the images are directly accessible relative to
 * the assets folder, which is the most reliable fallback if dynamic importing fails.
 * This simulates the actual image path that the browser needs.
 */
const getPartnerImages = () => {
  const images = [];
  
  // List of file names/extensions based on your provided list
  const fileNames = [
    '1.png', '2.png', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', 
    '8.png', '9.jpg', '10.png', '11.jpg', '12.jpg', '13.jpg', 
    '14.jpg', '15.jpg', '16.png', '17.jpg', '18.png', '19.jpg', '20.jpg', '21.jpg'
  ];

  // Map the file names to the required source path structure
  fileNames.forEach((name, index) => {
    // For a development environment, using the public path (if available) or the
    // direct relative path to the asset folder is sometimes necessary if explicit
    // imports or require.context fail.
    // We construct the path string directly to represent the image's final URL.
    const partnerPath = `/src/assets/Global Partner/${name}`; // Adjust this path as per your public folder structure

    images.push({
      // We are deliberately using a string path here, assuming your build tool
      // correctly handles assets in the 'src/assets' folder or that you move
      // the 'GlobalPartner' folder to the 'public' folder.
      src: partnerPath, 
      alt: `Partner ${index + 1}`
    });
  });

  return images;
};

const partnerImages = getPartnerImages();


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
          {partnerImages.map((image, index) => (
            <div key={index} className="flex items-center mx-8 md:mx-12 h-16 md:h-20">
              <img
                // Corrected to use the full URL path string
                src={image.src} 
                alt={image.alt}
                // Styling ensures logos are visible and centered.
                className="h-full w-auto object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500 max-w-none"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* --- */}

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

        {/* --- */}

        {/* === Bottom Bar === */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} PhDians. All rights reserved.</p>
          <p className="mt-1">Empowering researchers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}