import ArtworkGrid from "@/components/gallery/ArtworkGrid.tsx";
import {artworks, getCharcoalArtwork, getPastelArtwork} from "@/data/artworks.ts";
import React from "react";

const Charcoal = () => {
  return (
      <div className="min-h-screen bg-white py-12 px-4">
        <h2 className="text-3xl font-bold font-serif text-center text-gray-800 mb-8">
          Charcoal Artworks
        </h2>
        <div className="mb-12">
          <ArtworkGrid charcoal={getCharcoalArtwork} columns={3} />
        </div>
      </div>
  );
};

export default Charcoal;

// <div className="mb-12">
//   <ArtworkGrid charcoal={getCharcoalArtwork} columns={3} />
// </div>

