
import { useState } from "react";
import { Eye, Heart } from "lucide-react";

export type ArtworkProps = {
  id: string;
  title: string;
  image: string;
  // medium: string;
  dimensions?: string;
  // description?: string;
  featured?: boolean;
  type: string;
};

const ArtworkCard = ({ artwork }: { artwork: ArtworkProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
        <img 
          src={artwork.image} 
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className={`absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 flex flex-col justify-end p-4 ${isHovered ? 'bg-opacity-30' : ''}`}>
        <div className={`transform transition-transform duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-white font-serif font-medium text-xl">
            {artwork.title}
          </h3>
          {/*<p className="text-white/90 text-sm mt-1">*/}
          {/*  {artwork.year} • {artwork.medium}*/}
          {/*</p>*/}
          
          <div className="flex items-center space-x-4 mt-4">
            <button 
              className="text-white flex items-center space-x-1 text-sm"
              aria-label="View artwork details"
            >
              <Eye size={16} />
              <span>View</span>
            </button>
            
            <button 
              className="text-white flex items-center space-x-1 text-sm"
              aria-label="Like this artwork"
            >
              <Heart size={16} />
              <span>Like</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
