import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingParticles from "./FloatingParticles";
import useSmoothScroll from "@/hooks/useSmoothScroll";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Initialize smooth scroll
  useSmoothScroll();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero grain-overlay">
      {/* Floating particles background */}
      <FloatingParticles />
      
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
