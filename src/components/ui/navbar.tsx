
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="w-full bg-gray-950 bg-opacity-95 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-serif font-semibold text-white">
          Artistic Visions
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/charcoal">Gallery</NavLink>
          {/*<NavLink to="/about">About</NavLink>*/}
          {/*<NavLink to="/contact">Contact</NavLink>*/}
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <nav className="flex flex-col py-4">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/charcoal" onClick={toggleMenu}>Gallery</MobileNavLink>
              {/*<MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>*/}
              {/*<MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>*/}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-neutral-200 hover:text-black transition-colors duration-300 font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="px-6 py-3 text-gray-700 hover:bg-gray-100 block"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
