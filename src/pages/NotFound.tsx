
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 max-w-md">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/0b3e3633-708c-47ea-b348-d4b40f656477.png" 
            alt="Eventia Logo" 
            className="h-16 w-auto mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-eventverse-blue">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! This page has left the venue.
        </p>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-eventverse-blue hover:bg-eventverse-blue-dark">
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
