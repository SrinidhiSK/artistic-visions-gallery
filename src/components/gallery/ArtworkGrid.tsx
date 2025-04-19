
import ArtworkCard, { ArtworkProps } from "./ArtworkCard";

const ArtworkGrid = ({ artworks, columns = 3 }: { artworks: ArtworkProps[], columns?: number }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 md:gap-8`}>
      {artworks.map(artwork => (
        <div key={artwork.id} >
          <ArtworkCard artwork={artwork} />
        </div>
      ))}
    </div>
  );
};
export default ArtworkGrid;
