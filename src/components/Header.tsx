
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <span className="h-8 w-8 rounded-full bg-google-blue"></span>
              <span className="h-8 w-8 rounded-full bg-google-red"></span>
              <span className="h-8 w-8 rounded-full bg-google-yellow"></span>
              <span className="h-8 w-8 rounded-full bg-google-green"></span>
            </div>
            <h1 className="text-xl font-semibold">TrendInsight</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-gray-700 hover:text-google-blue transition-colors">
              Dashboard
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-google-blue transition-colors">
              Pricing
            </Link>
            <Link to="/roadmap" className="text-gray-700 hover:text-google-blue transition-colors">
              Roadmap
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-google-blue transition-colors">
              Team
            </Link>
            <Link to="/why-us" className="text-gray-700 hover:text-google-blue transition-colors">
              Why Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="google-button-secondary">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button className="google-button">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-google-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-google-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/roadmap" 
              className="text-gray-700 hover:text-google-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link 
              to="/team" 
              className="text-gray-700 hover:text-google-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/why-us" 
              className="text-gray-700 hover:text-google-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full google-button-secondary">
                  Log in
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full google-button">
                  Sign up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
