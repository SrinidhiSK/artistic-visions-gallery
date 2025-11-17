import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GalleryPage from "./pages/GalleryPage";
import Charcoal from "./pages/Charcoal.tsx";
import { Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import {Package} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Pastel from "@/pages/Pastel.tsx";
import Prioritized from "@/pages/Prioritized.tsx";
import SignIn from "./pages/signin.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/*<Route path="/gallery" element={<GalleryPage />} />*/}
          <Route path="/charcoal" element={<Charcoal />} />
          <Route path="/pastels" element={<Pastel/>} />
          <Route path="/prioritized" element={<Prioritized/>} />
          <Route path="/signin" element={<SignIn/>} />


          {/*<Route path="/about" element={<AboutPage />} />*/}
          {/*<Route path="/contact" element={<ContactPage />} />*/}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
