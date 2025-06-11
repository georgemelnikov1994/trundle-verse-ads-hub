
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              AdConnect
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/publishers" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/publishers' ? 'text-primary' : 'text-gray-600'
              }`}
            >
              Publishers
            </Link>
            <Link 
              to="/advertisers" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/advertisers' ? 'text-primary' : 'text-gray-600'
              }`}
            >
              Advertisers
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
