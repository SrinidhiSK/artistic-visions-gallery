
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { artworks } from "@/data/artworks";
import ArtworkGrid from "@/components/gallery/ArtworkGrid";

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 mt-8">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900">Gallery</h1>
            <p className="mt-4 text-lg text-gray-600">
              Explore my complete collection of original artworks
            </p>
            <div className="mt-4 h-1 w-16 bg-black mx-auto"></div>
          </div>
          
          <div className="mb-12">
            <ArtworkGrid artworks={artworks} columns={3} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
