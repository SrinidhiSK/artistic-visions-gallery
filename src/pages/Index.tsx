
import { useEffect } from "react";
import Hero from "@/components/hero/Hero";
import ArtworkGrid from "@/components/gallery/ArtworkGrid";
import { getFeaturedArtwork, getRecentArtworks } from "@/data/artworks";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredArtwork = getFeaturedArtwork();
  const recentArtworks = getRecentArtworks(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero featuredArtwork={featuredArtwork} />
        
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-gray-900">Recent Works</h2>
              <p className="mt-2 text-gray-600">Explore my latest artistic creations</p>
            </div>
            
            <Link to="/gallery" className="mt-4 md:mt-0 flex items-center text-gray-900 hover:text-gray-700 transition-colors">
              <span>View All Works</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <ArtworkGrid artworks={recentArtworks} columns={3} />
        </section>
        
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-semibold text-gray-900">About My Art</h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                My work explores the boundary between abstraction and representation, often drawing 
                inspiration from natural forms, emotional states, and architectural elements. Through 
                a diverse range of media and techniques, I seek to create visual narratives that invite 
                viewers to pause and reflect.
              </p>
              <Link 
                to="/about"
                className="mt-8 inline-block px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                Learn More About the Artist
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-20 container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-semibold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-gray-600">
              Interested in commissioning a piece or have questions about my work?
            </p>
            <Link 
              to="/contact"
              className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
