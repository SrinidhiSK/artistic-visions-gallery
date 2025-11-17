import { useEffect, useState } from "react";
import { artworks } from "../../data/artworks";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="relative order-1 md:order-2">

            {/* 🔘 Dot Indicators */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {featuredArtworks.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 w-3 rounded-full transition-all duration-300 ${
                            i === index
                                ? "bg-gray-800 scale-125 shadow-md"
                                : "bg-black/40"
                            
                        }`}
                    />
                ))}
            </div>

            {/* Blurred Shadow Background */}
            <div className="absolute inset-0 md:-rotate-3 rounded-lg scale-105 bg-white/10 backdrop-blur-md shadow-2xl z-0"></div>

            {/* Animated Image */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={featuredArtwork.image}
                    initial={{ opacity: 0, rotate: -5, scale: 0.95 }}
                    animate={{ opacity: 1, rotate: 2, scale: 1 }}
                    exit={{ opacity: 0, rotate: 3, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="aspect-[3/4] bg-black/40 rounded-lg overflow-hidden shadow-xl transform relative z-10"
                >
                    <img
                        src={featuredArtwork.image}
                        alt={featuredArtwork.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default RotatingFeaturedArtwork;
