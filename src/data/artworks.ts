
export const artworks = [
  {
    id: "art-001",
    title: "Ethereal Dreams",
    image: "https://i.postimg.cc/HxWpVHc7/IMG20250405162356.jpg",
    year: "2023",
    medium: "Oil on Canvas",
    dimensions: "36\" × 48\"",
    description: "An exploration of dreamscapes and the subconscious mind through layered colors and organic forms.",
    featured: true,
    type: "pastel",
  },
  {
    id: "art-002",
    title: "Urban Reflection",
    image: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: "2022",
    medium: "Acrylic on Panel",
    dimensions: "24\" × 30\"",
    description: "A study of city architecture and its reflection in water, playing with light and perspective.",
    type: "charcoal",
  },
  {
    id: "art-003",
    title: "Serenity in Blue",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: "2022",
    medium: "Mixed Media",
    dimensions: "18\" × 24\"",
    description: "An abstract composition exploring emotional states through variations of blue tones and textures."
  },
  {
    id: "art-004",
    title: "Autumn Whispers",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: "2021",
    medium: "Watercolor",
    dimensions: "16\" × 20\"",
    description: "A landscape inspired by autumn foliage and the changing seasons of New England."
  },
  {
    id: "art-005",
    title: "Geometric Harmony",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: "2021",
    medium: "Digital",
    dimensions: "24\" × 24\"",
    description: "An exploration of balance through geometric shapes and complementary colors."
  },
  {
    id: "art-006",
    title: "Ocean Memories",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: "2020",
    medium: "Oil on Canvas",
    dimensions: "30\" × 40\"",
    description: "An impressionistic seascape capturing the movement and emotion of ocean waves."
  },
  {
    id: "art-007",
    title: "Fragmented Reality",
    image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: "2020",
    medium: "Mixed Media Collage",
    dimensions: "20\" × 26\"",
    description: "A collage work exploring how memories and experiences shape our perception of reality."
  },
  {
    id: "art-008",
    title: "Inner Light",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: "2019",
    medium: "Acrylic and Gold Leaf",
    dimensions: "24\" × 36\"",
    description: "An abstract piece exploring spirituality and inner illumination through contrast and gilding."
  },
  {
    id: "art-009",
    title: "Structural Rhythm",
    image: "https://images.unsplash.com/photo-1558865869-c93693c0ccb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: "2019",
    medium: "Charcoal and Pastel",
    dimensions: "18\" × 24\"",
    description: "A study of architectural forms and their inherent rhythms and patterns."
  }
];

export const getFeaturedArtwork = () => {
  return artworks.find(art => art.featured) || artworks[0];
};

export const getPastelArtwork = () => {
  return artworks.every(art => art.type == "pastel");
};

export const getCharcoalArtwork = () => {
  return artworks.every(art => art.type == "charcoal");
};

export const getRecentArtworks = (count = 3) => {
  return artworks.slice(0, count);
};
