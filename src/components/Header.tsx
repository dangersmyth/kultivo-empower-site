
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="kultivo-container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl text-kultivo-600">Kultivo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/blog" className="text-foreground hover:text-kultivo-600 transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-foreground hover:text-kultivo-600 transition-colors">
            About Us
          </Link>
          <Button asChild variant="default" className="bg-kultivo-500 hover:bg-kultivo-600">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 z-50 animate-fade-in">
          <div className="kultivo-container py-4 flex flex-col space-y-4">
            <Link 
              to="/blog" 
              className="text-foreground hover:text-kultivo-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-kultivo-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Button 
              asChild 
              variant="default" 
              className="bg-kultivo-500 hover:bg-kultivo-600 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
