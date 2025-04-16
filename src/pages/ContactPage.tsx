
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Contact from "@/components/contact/Contact";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 mt-8">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
