
import React, { useState } from 'react';
import { 
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  Layout,
  MapPin, 
  Search as SearchIcon
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Summer Music Festival',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80',
    date: 'Jun 15-17, 2025',
    location: 'Central Park, New York',
    price: '$89.99',
    format: 'hybrid',
    category: 'Music'
  },
  {
    id: 2,
    title: 'Tech Conference 2025',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    date: 'Jul 10, 2025',
    location: 'Convention Center, San Francisco',
    price: '$149.99',
    format: 'online',
    category: 'Tech'
  },
  {
    id: 3,
    title: 'Broadway Show: Hamilton',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
    date: 'Aug 5, 2025',
    location: 'Broadway Theater, New York',
    price: '$199.99',
    format: 'inperson',
    category: 'Theater'
  },
  {
    id: 4,
    title: 'International Food Festival',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    date: 'Sep 20-22, 2025',
    location: 'Downtown, Chicago',
    price: '$45.99',
    format: 'inperson',
    category: 'Food'
  },
  {
    id: 5,
    title: 'Virtual Reality Expo',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=800&q=80',
    date: 'Oct 15, 2025',
    location: 'Online',
    price: '$29.99',
    format: 'online',
    category: 'Tech'
  },
  {
    id: 6,
    title: 'Basketball Championship Finals',
    image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?auto=format&fit=crop&w=800&q=80',
    date: 'Nov 30, 2025',
    location: 'Sports Arena, Los Angeles',
    price: '$129.99',
    format: 'hybrid',
    category: 'Sports'
  }
];

const EventSearchPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  const filteredEvents = events.filter(event => {
    // Filter by search query
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by tab
    if (activeTab !== 'all' && event.format !== activeTab) {
      return false;
    }
    
    // Filter by category
    if (selectedFilters.length > 0 && !selectedFilters.includes(event.category)) {
      return false;
    }
    
    return true;
  });
  
  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find your next experience</h1>
        <p className="text-gray-500 dark:text-gray-400">Discover amazing events happening online and in-person</p>
      </div>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search events, artists, venues..."
          className="pl-10 py-6 text-lg rounded-full border-gray-300 focus:border-eventverse-purple focus:ring-eventverse-purple"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <Tabs 
          defaultValue="all" 
          className="mr-4"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList>
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="inperson">In-Person</TabsTrigger>
            <TabsTrigger value="online">Online</TabsTrigger>
            <TabsTrigger value="hybrid">Hybrid</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => toggleFilter('Music')}>
                <div className={`w-4 h-4 rounded mr-2 border ${selectedFilters.includes('Music') ? 'bg-eventverse-purple border-eventverse-purple' : 'border-gray-300'}`} />
                Music
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleFilter('Tech')}>
                <div className={`w-4 h-4 rounded mr-2 border ${selectedFilters.includes('Tech') ? 'bg-eventverse-purple border-eventverse-purple' : 'border-gray-300'}`} />
                Tech
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleFilter('Theater')}>
                <div className={`w-4 h-4 rounded mr-2 border ${selectedFilters.includes('Theater') ? 'bg-eventverse-purple border-eventverse-purple' : 'border-gray-300'}`} />
                Theater
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleFilter('Food')}>
                <div className={`w-4 h-4 rounded mr-2 border ${selectedFilters.includes('Food') ? 'bg-eventverse-purple border-eventverse-purple' : 'border-gray-300'}`} />
                Food
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleFilter('Sports')}>
                <div className={`w-4 h-4 rounded mr-2 border ${selectedFilters.includes('Sports') ? 'bg-eventverse-purple border-eventverse-purple' : 'border-gray-300'}`} />
                Sports
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Select defaultValue="upcoming">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
            <SelectItem value="thisweek">This Week</SelectItem>
            <SelectItem value="thismonth">This Month</SelectItem>
          </SelectContent>
        </Select>
        
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="newyork">New York</SelectItem>
            <SelectItem value="losangeles">Los Angeles</SelectItem>
            <SelectItem value="chicago">Chicago</SelectItem>
            <SelectItem value="online">Online Only</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedFilters.map(filter => (
            <Badge 
              key={filter} 
              variant="secondary"
              className="px-3 py-1 flex items-center gap-2"
            >
              {filter}
              <button 
                onClick={() => toggleFilter(filter)}
                className="text-xs ml-1 hover:text-eventverse-pink-light"
              >
                ✕
              </button>
            </Badge>
          ))}
          <Button 
            variant="link" 
            className="text-sm text-eventverse-purple h-6 px-2"
            onClick={() => setSelectedFilters([])}
          >
            Clear all
          </Button>
        </div>
      )}
      
      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredEvents.map(event => (
          <Link 
            to={`/event/${event.id}`} 
            key={event.id}
            className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div 
              className="event-card h-48 w-full" 
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="relative z-10 h-full p-4 flex flex-col justify-end">
                <div className="relative z-10">
                  {event.format === 'online' && (
                    <Badge className="bg-blue-500 mb-2">
                      <Layout className="h-3 w-3 mr-1" />
                      Online
                    </Badge>
                  )}
                  {event.format === 'inperson' && (
                    <Badge className="bg-green-500 mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      In-Person
                    </Badge>
                  )}
                  {event.format === 'hybrid' && (
                    <Badge className="bg-purple-500 mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      Hybrid
                    </Badge>
                  )}
                  <h3 className="text-white text-xl font-bold">{event.title}</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start mb-2 text-gray-500">
                <Calendar className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-start mb-3 text-gray-500">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{event.location}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-eventverse-purple font-semibold">
                  From {event.price}
                </div>
                <Button size="sm" className="rounded-full">
                  Get Tickets
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredEvents.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold mb-2">No events found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your filters or search criteria</p>
          <Button onClick={() => {
            setSearchQuery('');
            setSelectedFilters([]);
            setActiveTab('all');
          }}>
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventSearchPage;
