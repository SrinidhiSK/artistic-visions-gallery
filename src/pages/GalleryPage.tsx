
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Link } from "react-router-dom";
import {artworks, getCharcoalArtwork, getFeaturedArtwork} from "@/data/artworks";
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
          
          {/*<div className="mb-12">*/}
          {/*  <ArtworkGrid artworks={artworks} columns={3} />*/}
          {/*</div>*/}


          {/*<div className="relative group">*/}
          {/*  <div className="absolute group-hover:block bg-white text-black rounded-md shadow-md mt-2 w-40 z-50">*/}
          {/*    <a*/}
          {/*        href="/pastels"*/}

          {/*        className="block px-4 py-4 hover:bg-gray-100 hover:text-black"*/}
          {/*    >*/}
          {/*      Pastels*/}
          {/*    </a>*/}
          {/*  </div>*/}

          {/*  <br />*/}
          {/*  <br />*/}
          {/*  <br />*/}
          {/*  <br />*/}

          {/*  <div className="absolute group-hover:block bg-white text-black rounded-md shadow-md mt-2 w-40 z-50">*/}
          {/*  <a*/}
          {/*      href="/charcoal"*/}
          {/*      className="block px-4 py-4 hover:bg-gray-100 hover:text-black"*/}
          {/*  >*/}
          {/*    Charcoal*/}
          {/*  </a>*/}
          {/*  </div>*/}

          {/*</div>*/}
          <div className="flex justify-center gap-6 mt-10">
            <Link
                to="/charcoal"
                className="px-6 py-3 rounded-lg bg-gray-800 text-white text-lg font-medium hover:bg-gray-700 transition"
            >
              Charcoal
            </Link>
            <Link
                to="/pastels"
                className="px-6 py-3 rounded-lg bg-gray-300 text-gray-900 text-lg font-medium hover:bg-gray-400 transition"
            >
              Pastels
            </Link>
          </div>

        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
