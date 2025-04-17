import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react"; // Fixed import - useEffect should come from 'react'
import CustomCursor from "./components/CustomCursor";
import Index from "./pages/Index";
import Features from "./pages/Features";
import About from "./pages/About";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";
import GettingStarted from "./pages/knowledge/GettingStarted";
import Whitelisting from "./pages/knowledge/Whitelisting";

const queryClient = new QueryClient();

// ScrollToTop component to handle navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  // Firefox detection in the App component
  useEffect(() => {
    const isFirefox =
      navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
    if (isFirefox) {
      document.documentElement.classList.add("firefox");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Knowledge Base Routes */}
            <Route
              path="/knowledge/getting-started"
              element={<GettingStarted />}
            />
            <Route path="/knowledge/whitelisting" element={<Whitelisting />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
