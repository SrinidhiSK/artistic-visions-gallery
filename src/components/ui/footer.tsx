
import { Heart, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-50 py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-serif font-semibold">
              Artistic Visions
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              Showcasing original artwork and creations
            </p>
          </div>
          
          <div className="flex space-x-6 items-center">
            <SocialLink href="#" icon={Mail} label="Email" />
            <SocialLink href="#" icon={Instagram} label="Instagram" />
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Artistic Visions. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-black">Privacy</Link>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-400 flex items-center justify-center">
          <span>Made with</span>
          <Heart size={14} className="mx-1" />
          <span>and creativity</span>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href}
    aria-label={label}
    className="text-gray-600 hover:text-black transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

export default Footer;
