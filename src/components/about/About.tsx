
import { Palette, Award, Calendar, Camera } from "lucide-react";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">About the Artist</h2>
          <div className="mt-4 h-1 w-16 bg-black mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden aspect-square relative">
              <img
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Artist Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="font-serif text-2xl font-semibold mb-4">Hello, I'm Jane Doe</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a contemporary artist based in New York City, with a passion for exploring themes of nature, 
              humanity, and the intersection between tradition and innovation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey as an artist began over a decade ago after completing my studies in Fine Arts 
              at the National Academy of Design. Since then, I've dedicated my career to creating works 
              that challenge perspectives and evoke emotional responses.
            </p>
          </div>
        </div>
        
        <div className="space-y-12 mt-16">
          <h3 className="font-serif text-2xl md:text-3xl text-center">My Artistic Journey</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 text-gray-900">
                <Palette size={28} />
              </div>
              <h4 className="font-serif text-xl font-medium mb-2">Technique & Medium</h4>
              <p className="text-gray-700">
                I work primarily in oils and acrylics, with occasional mixed media pieces that 
                incorporate textile elements. My style balances between abstract expressionism 
                and structured realism.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 text-gray-900">
                <Award size={28} />
              </div>
              <h4 className="font-serif text-xl font-medium mb-2">Recognition</h4>
              <p className="text-gray-700">
                My work has been exhibited in galleries across North America and Europe, 
                and I've been fortunate to receive recognition through various awards and 
                artist residencies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4 text-gray-900">
                <Calendar size={28} />
              </div>
              <h4 className="font-serif text-xl font-medium mb-2">Exhibitions</h4>
              <p className="text-gray-700">
                I participate in several exhibitions each year, ranging from solo shows 
                to collaborative installations. I believe in the power of art as a communal experience.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="mb-4 text-gray-900">
                <Camera size={28} />
              </div>
              <h4 className="font-serif text-xl font-medium mb-2">Process</h4>
              <p className="text-gray-700">
                My creative process begins with observation and contemplation, followed by 
                sketching and color studies. I often work on multiple pieces simultaneously, 
                allowing themes to develop organically.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-200 pt-16">
          <blockquote className="italic text-center text-xl font-serif text-gray-700 max-w-2xl mx-auto">
            "Art is not what you see, but what you make others see. I strive to create works 
            that invite viewers to discover their own interpretations and connections."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
