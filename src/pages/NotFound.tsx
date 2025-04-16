
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-serif text-8xl font-semibold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">The page you're looking for cannot be found.</p>
          <Link to="/" className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Return to Gallery
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
