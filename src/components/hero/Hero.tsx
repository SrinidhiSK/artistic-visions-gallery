
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import RotatingFeaturedArtwork from "./RotatingFeaturedArtwork";

interface HeroProps {
  featuredArtwork: {
    title: string;
    image: string;
    // year: string;
    // medium: string;
  };
}

const Hero = ({ featuredArtwork }: HeroProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center py-16">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1 animate-fade-in ">

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
            Artistic Visions Gallery
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            Art is where i find the rhythm of quiet moments,
            Welcome to my world of colour and emotions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/*<Link */}
            {/*  to="/gallery"*/}
            {/*  className="px-6 py-3 bg-black text-white rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"*/}
            {/*>*/}
            {/*  <span>View Gallery</span>*/}
            {/*  <ArrowRight size={18} />*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*  to="/about"*/}
            {/*  className="px-6 py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"*/}
            {/*>*/}
            {/*  /!*<span>About the Artist</span>*!/*/}
            {/*</Link>*/}
          </div>
        </div>

        {/*<div className="order-1 md:order-2 relative animate-scale-in">*/}
        {/*  <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl transform md:rotate-2 relative z-10">*/}
        {/*    <img*/}
        {/*      src={featuredArtwork.image}*/}
        {/*      alt={featuredArtwork.title}*/}
        {/*      className="w-full h-full object-cover"*/}
        {/*    />*/}
        {/*  </div>*/}

        <RotatingFeaturedArtwork />

          {/*<div className="absolute z-0 bottom-6 right-6 rounded-lg bg-black/10 backdrop-blur-sm w-full h-full -rotate-3"></div>*/}

          <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-sm p-4 rounded shadow-md">
            {/*<p className="font-serif text-xl">{featuredArtwork.title}</p>*/}
        {/*    /!*<p className="text-sm text-gray-600 mt-1">{featuredArtwork.year} • {featuredArtwork.medium}</p>*!/*/}
          </div>
        </div>
      {/*</div>*/}
    </section>
  );
};

export default Hero;
