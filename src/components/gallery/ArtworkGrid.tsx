
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
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArtworkCard, { ArtworkProps } from "./ArtworkCard";

const ArtworkGrid = ({ artworks, columns = 3 }: { artworks: ArtworkProps[], columns?: number }) => {
    const [selectedArtwork, setSelectedArtwork] = useState<ArtworkProps | null>(null);
    const [zoom, setZoom] = useState(1); // Zoom level state

    const isLandscape = (artwork: ArtworkProps) => {
        if (artwork.aspectRatio) {
            const [w, h] = artwork.aspectRatio.split('/').map(Number);
            return w > h;
        }
        return false;
    };

    const openModal = (artwork: ArtworkProps) => {
        if (isLandscape(artwork)) {
            setSelectedArtwork(artwork);
        }
    };

    const closeModal = () => {
        setSelectedArtwork(null);
        setZoom(1); // Reset zoom level when closing modal
    };

    // Handle mouse wheel scroll for zooming in and out (only when modal is open)
    const handleWheel = (e: WheelEvent) => {
        // Prevent page scroll when modal is open
        e.preventDefault(); // Prevent default scrolling

        if (e.deltaY < 0) {
            setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Zoom in
        } else {
            setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1)); // Zoom out
        }
    };

    // Add event listener for wheel when modal is open
    useEffect(() => {
        if (selectedArtwork) {
            // Lock page scroll when modal is open
            document.body.style.overflow = "hidden";
            window.addEventListener("wheel", handleWheel, { passive: false });

            // Clean up the event listener and reset body scroll when modal is closed
            return () => {
                document.body.style.overflow = "auto";
                window.removeEventListener("wheel", handleWheel);
            };
        }
    }, [selectedArtwork]);

    return (
        <>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 md:gap-8`}>
                {artworks.map((artwork) => (
                    <div key={artwork.id} onClick={() => openModal(artwork)} className="cursor-pointer">
                        <ArtworkCard artwork={artwork} />
                    </div>
                ))}
            </div>

            {/* Modal with Framer Motion */}
            <AnimatePresence>
                {selectedArtwork && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative"
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
                        >
                            <button
                                onClick={closeModal}
                                className="absolute -top-10 right-0 text-white text-3xl font-bold"
                                style={{
                                    transform: `scale(${zoom})`, // Sync button scale with image
                                    position: 'absolute',
                                    top: '1rem', // Maintain top positioning
                                    right: '1rem', // Maintain right positioning
                                    zIndex: 10,
                                    pointerEvents: 'auto', // Ensure button is clickable
                                    transition: 'transform 0.1s ease-in-out', // Sync transition with image zoom
                                }}
                            >
                                ×
                            </button>
                            <img
                                src={selectedArtwork.image}
                                alt={selectedArtwork.title}
                                className="max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl object-contain"
                                style={{
                                    transform: `scale(${zoom})`,
                                    transition: 'transform 0.1s ease-in-out',
                                }} // Apply the zoom effect
                            />

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ArtworkGrid;

