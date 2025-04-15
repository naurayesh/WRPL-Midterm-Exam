
import React, { useState } from 'react';
import { 
  Calendar, 
  Compass, 
  Home, 
  Menu, 
  Search, 
  ShoppingCart, 
  Ticket, 
  User, 
  X 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar */}
      <aside 
        className={`fixed z-30 inset-y-0 left-0 bg-eventverse-blue-dark flex flex-col transition-all duration-300 ease-in-out
                   ${sidebarOpen || !isMobile ? 'w-64' : 'w-0'} ${isMobile ? 'shadow-lg' : ''}`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-eventverse-blue">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/0b3e3633-708c-47ea-b348-d4b40f656477.png" 
              alt="Eventia Logo" 
              className="h-10 w-auto"
            />
          </div>
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="text-white hover:bg-eventverse-blue-light"
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        <nav className="flex-1 pt-5 pb-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            <li>
              <Link 
                to="/" 
                className="flex items-center text-sidebar-foreground px-4 py-3 text-base rounded-lg hover:bg-eventverse-blue-light transition-colors"
              >
                <Home className="mr-4 h-5 w-5" />
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/events" 
                className="flex items-center text-sidebar-foreground px-4 py-3 text-base rounded-lg hover:bg-eventverse-blue-light transition-colors"
              >
                <Compass className="mr-4 h-5 w-5" />
                Discover
              </Link>
            </li>
            <li>
              <Link 
                to="/search" 
                className="flex items-center text-sidebar-foreground px-4 py-3 text-base rounded-lg hover:bg-eventverse-blue-light bg-eventverse-blue-light transition-colors"
              >
                <Search className="mr-4 h-5 w-5" />
                Search
              </Link>
            </li>
            <li>
              <Link 
                to="/calendar" 
                className="flex items-center text-sidebar-foreground px-4 py-3 text-base rounded-lg hover:bg-eventverse-blue-light transition-colors"
              >
                <Calendar className="mr-4 h-5 w-5" />
                Calendar
              </Link>
            </li>
            <li>
              <Link 
                to="/tickets" 
                className="flex items-center text-sidebar-foreground px-4 py-3 text-base rounded-lg hover:bg-eventverse-blue-light transition-colors"
              >
                <Ticket className="mr-4 h-5 w-5" />
                My Tickets
              </Link>
            </li>
            <li>
              <Link 
                to="/cart" 
                className="flex items-center text-sidebar-foreground px-4 py-3 text-base rounded-lg hover:bg-eventverse-blue-light transition-colors"
              >
                <ShoppingCart className="mr-4 h-5 w-5" />
                Cart
              </Link>
            </li>
          </ul>
          
          <div className="px-3 mt-6">
            <div className="h-px bg-eventverse-blue-light"></div>
          </div>
          
          <ul className="mt-6 px-2">
            <li>
              <Link 
                to="/profile" 
                className="flex items-center text-sidebar-foreground px-4 py-3 text-base rounded-lg hover:bg-eventverse-blue-light transition-colors"
              >
                <User className="mr-4 h-5 w-5" />
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isMobile ? 'pl-0' : sidebarOpen ? 'pl-64' : 'pl-0'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-20 flex items-center h-16 px-4 bg-background border-b">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="mr-4"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1 flex items-center">
            <img 
              src="/lovable-uploads/0b3e3633-708c-47ea-b348-d4b40f656477.png" 
              alt="Eventia Logo" 
              className="h-8 w-auto mr-2"
            />
            <span className="text-lg font-semibold text-eventverse-blue-dark">Eventia</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      
      {/* Mobile sidebar overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50" 
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default MainLayout;
