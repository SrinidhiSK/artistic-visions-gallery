// components/RotatingFeaturedArtwork.tsx
import { useEffect, useState } from "react";
import { artworks } from "../../data/artworks";

const RotatingFeaturedArtwork = () => {
    const featuredArtworks = artworks.filter((art) => art.featured);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % featuredArtworks.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [featuredArtworks.length]);

    const featuredArtwork = featuredArtworks[index];

    return (
        // <div className="aspect-[5/6] rounded-lg overflow-hidden shadow-xl transform md:rotate-2 relative z-10 transition-all duration-700 ease-in-out">
        //     <img
        //         src={featuredArtwork.image}
        //         alt={featuredArtwork.title}
        //         className="w-full h-full object-cover"
        //     />
        // </div>
        <div className="relative order-1 md:order-2 animate-fade-in">
            {/* Blurred Tilted Shadow BACKGROUND */}
            <div className="absolute inset-0 md:-rotate-3 rounded-lg scale-105 bg-white/10 backdrop-blur-md shadow-2xl z-0"></div>

            {/* Main Image Container */}
            <div className="aspect-[3/4] bg-white/10 rounded-lg overflow-hidden shadow-xl transform md:rotate-2 relative z-10">
                <img
                    src={featuredArtwork.image}
                    alt={featuredArtwork.title}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default RotatingFeaturedArtwork;
