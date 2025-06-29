import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Upload from "./pages/Upload";
import Amazon from "./pages/Amazon";
import Preise from "./pages/Preise";
import Ablauf from "./pages/Ablauf";
import FAQ from "./pages/FAQ";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/amazon" element={<Amazon />} />
            <Route path="/preise" element={<Preise />} />
            <Route path="/ablauf" element={<Ablauf />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
