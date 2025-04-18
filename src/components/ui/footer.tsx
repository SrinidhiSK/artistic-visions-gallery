
import { Heart, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
const Footer = () => {
  const currentYear = new Date().getFullYear();}

  return (
    <footer className="w-full bg-neutral-900 py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/*<div className="mb-6 md:mb-0">*/}
          {/*  /!*<Link to="/" className="text-xl font-serif font-semibold">*!/*/}
          {/*  /!*<p className="text-sm text-gray-300 mt-1">*!/*/}
          {/*  /!*  SRINIDHI S.K*!/*/}
          {/*  /!*</p>*!/*/}
          {/*  /!*</Link>*!/*/}
          {/*  <p className="text-sm text-gray-300 mt-1">*/}
          {/*    "Grateful for the moments you spent with my art — thank you for wandering through my world of hues and lines"*/}
          {/*  </p>*/}
          {/*  <br/>*/}
          {/*    <p className="absolute top-2 right-4 text-xl md:text-2xl font-serif font-semibold text-gray-100">*/}
          {/*      -SRINIDHI S.K*/}
          {/*    </p>*/}
          {/*  */}

          {/*  /!*<p className="text-xl md:text-2xl font-serif font-semibold text-gray-100 mr-50">*!/*/}
          {/*  /!*      -SRINIDHI S.K*!/*/}
          {/*  /!*</p>*!/*/}
          {/*</div>*/}
          <div className="relative mb-6 md:mb-0">
            <p className="text-sm text-gray-300 mt-1">
              "Grateful for the moments you spent with my art — thank you for wandering through my world of hues and lines"
            </p>
            <br />
            <p className="absolute top-8 right-2 text-xl md:text-2xl font-serif font-semibold text-gray-100">
              -SRINIDHI S.K
            </p>
          </div>

          <div className="flex space-x-6 items-center">
            <SocialLink
                href="https://www.instagram.com/_._shrinidhi_s_k"
                icon={Instagram}
                label="Instagram"
            />
            <SocialLink href="mailto:aashayadesignmysore@gmail.com" icon={Mail} label="Email" />
            {/*/!*<SocialLink href="#" icon={Mail} label="Email" />*!/*/}
            {/*/!*<SocialLink href="#" icon={Instagram} label="Instagram" />*!/*/}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            {/*© {currentYear} Artistic Visions. All rights reserved.*/}
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            {/*<Link to="/about" className="text-gray-600 hover:text-black">About</Link>*/}
            {/*<Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>*/}
            {/*<Link to="/privacy" className="text-gray-600 hover:text-black">Privacy</Link>*/}
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
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

export default Footer;
