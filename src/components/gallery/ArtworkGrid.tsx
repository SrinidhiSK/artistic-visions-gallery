
// import ArtworkCard, { ArtworkProps } from "./ArtworkCard";
//
// const ArtworkGrid = ({ artworks, columns = 3 }: { artworks: ArtworkProps[], columns?: number }) => {
//   return (
//     <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 md:gap-8`}>
//       {artworks.map(artwork => (
//         <div key={artwork.id} >
//           <ArtworkCard artwork={artwork} />
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ArtworkGrid;
import React, { useState } from "react";
import ArtworkCard, { ArtworkProps } from "./ArtworkCard";

const ArtworkGrid = ({ artworks, columns = 3 }: { artworks: ArtworkProps[], columns?: number }) => {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkProps | null>(null);

  // Function to check if artwork is landscape
  const isLandscape = (artwork: ArtworkProps) => {
    if (artwork.aspectRatio) {
      const [w, h] = artwork.aspectRatio.split('/').map(Number);
      return w > h;
    }
    return false;
  };

  // Open Modal if artwork is landscape
  const openModal = (artwork: ArtworkProps) => {
    if (isLandscape(artwork)) {
      setSelectedArtwork(artwork);
    }
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  return (
      <>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 md:gap-8`}>
          {artworks.map((artwork) => (
              <div key={artwork.id} onClick={() => openModal(artwork)} className="cursor-pointer">
                <ArtworkCard artwork={artwork} />
              </div>
          ))}
        </div>

        {/* Modal for Landscape Artwork */}
        {selectedArtwork && (
            // <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn" onClick={closeModal}>

            <div className="relative">
                {/*<img*/}
                {/*    src={selectedArtwork.image}*/}
                {/*    alt={selectedArtwork.title}*/}
                {/*    className="max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl object-contain"*/}
                {/*/>*/}
                <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl object-contain transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105"
                />
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white text-3xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>
        )}
      </>
  );
};

export default ArtworkGrid;
