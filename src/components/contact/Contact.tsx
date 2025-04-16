
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Feel free to contact me regarding commissions, exhibitions, or to discuss my artwork.
          </p>
          <div className="mt-4 h-1 w-16 bg-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-serif text-2xl mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Mail size={20} className="text-gray-800" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:contact@artisticvisions.com" className="text-gray-600 hover:text-black">
                    contact@artisticvisions.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-gray-800" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Studio Location</h4>
                  <p className="text-gray-600">
                    123 Art District<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Phone size={20} className="text-gray-800" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:+12125551234" className="text-gray-600 hover:text-black">
                    +1 (212) 555-1234
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-serif text-xl mb-4">Studio Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 10:00 AM - 6:00 PM<br />
                Saturday: By appointment only<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-lg">
                <p className="font-medium">Thank you for your message!</p>
                <p className="mt-1">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-black text-white rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
