import ArtworkGrid from "@/components/gallery/ArtworkGrid.tsx";
import {artworks, getCharcoalArtwork, getPastelArtwork} from "@/data/artworks.ts";
import React, {useEffect} from "react";
import Navbar from "@/components/ui/navbar.tsx";
import {Link} from "react-router-dom";
import Footer from "@/components/ui/footer.tsx";

const Charcoal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className="min-h-screen bg-gray-400 flex flex-col">
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

            <div className="flex justify-center gap-6 mt-10">
              <Link
                  to="/charcoal"
                  className="px-6 py-3 rounded-lg bg-gray-800 text-white text-lg font-medium hover:bg-neutral-500 transition"
              >
                Charcoal
              </Link>
              <Link
                  to="/pastels"
                  className="px-6 py-3 rounded-lg bg-stone-300 text-gray-900 text-lg font-medium hover:bg-neutral-500 transition"
              >
                Pastels
              </Link>
            </div>


            {/*<div className="mb-12 ">*/}
            {/*  <br/>*/}
            {/*  <br/>*/}
            {/*  <ArtworkGrid artworks={getCharcoalArtwork()} columns={3} />*/}
            {/*</div>*/}
              <br/>
              <br/>
            <div className="w-full bg-gray-200 py-12 rounded-xl p-6">
              <div className="max-w-6xl mx-auto px-4">
                <ArtworkGrid artworks={getCharcoalArtwork()} columns={3} />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
  );
};

export default Charcoal;

// <div className="mb-12">
//   <ArtworkGrid charcoal={getCharcoalArtwork} columns={3} />
// </div>

