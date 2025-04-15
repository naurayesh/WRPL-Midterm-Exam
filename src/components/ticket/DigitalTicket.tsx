
import React, { useEffect, useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Download, 
  MapPin, 
  Share2, 
  TicketIcon as Ticket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const DigitalTicket: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // QR code animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Tickets</h1>
          <p className="text-gray-500">Save, share or print your tickets for the event</p>
        </div>
        
        <div className="mb-8">
          <Card className="mb-4 overflow-hidden border-2 border-eventverse-purple">
            <div className="bg-eventverse-purple text-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Summer Music Festival</h2>
                <Badge className="bg-white text-eventverse-purple">
                  VIP Pass
                </Badge>
              </div>
              <div className="flex items-center mt-1 text-eventverse-purple-light text-sm">
                <Ticket className="h-4 w-4 mr-1" />
                Ticket #EV-2025-1234567
              </div>
            </div>
            
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex flex-wrap gap-y-2 mb-4">
                  <div className="w-full sm:w-1/2">
                    <div className="flex items-start text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p>June 15-17, 2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="flex items-start text-gray-600">
                      <Clock className="h-4 w-4 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p>3:00 PM - 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-start text-gray-600 mt-2">
                      <MapPin className="h-4 w-4 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p>Central Park, New York, NY 10022</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="font-medium mb-1">Ticket Holder</p>
                  <p>John Doe</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="p-6 flex justify-center">
                <div className={`qr-code-container ${isAnimating ? 'animate-pulse-soft' : ''}`}>
                  <div className="bg-white p-2 rounded-lg inline-block mb-2">
                    <svg
                      className="w-56 h-56"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Simple QR code visualization */}
                      <rect width="100" height="100" fill="white" />
                      <rect x="10" y="10" width="80" height="80" fill="white" stroke="black" strokeWidth="0.5" />
                      
                      {/* QR Code Pattern - simplified representation */}
                      <rect x="20" y="20" width="15" height="15" fill="black" />
                      <rect x="65" y="20" width="15" height="15" fill="black" />
                      <rect x="20" y="65" width="15" height="15" fill="black" />
                      
                      <rect x="40" y="20" width="5" height="5" fill="black" />
                      <rect x="40" y="30" width="5" height="5" fill="black" />
                      <rect x="30" y="40" width="5" height="5" fill="black" />
                      <rect x="50" y="40" width="5" height="5" fill="black" />
                      
                      <rect x="65" y="40" width="5" height="5" fill="black" />
                      <rect x="75" y="40" width="5" height="5" fill="black" />
                      <rect x="65" y="50" width="5" height="5" fill="black" />
                      
                      <rect x="40" y="55" width="5" height="5" fill="black" />
                      <rect x="50" y="55" width="5" height="5" fill="black" />
                      <rect x="55" y="60" width="5" height="5" fill="black" />
                      
                      <rect x="40" y="65" width="5" height="5" fill="black" />
                      <rect x="50" y="75" width="5" height="5" fill="black" />
                      <rect x="70" y="65" width="5" height="5" fill="black" />
                      <rect x="65" y="70" width="5" height="5" fill="black" />
                      <rect x="75" y="75" width="5" height="5" fill="black" />
                      
                      {/* QR Code Position Markers */}
                      <rect x="20" y="20" width="15" height="15" fill="black" />
                      <rect x="23" y="23" width="9" height="9" fill="white" />
                      <rect x="26" y="26" width="3" height="3" fill="black" />
                      
                      <rect x="65" y="20" width="15" height="15" fill="black" />
                      <rect x="68" y="23" width="9" height="9" fill="white" />
                      <rect x="71" y="26" width="3" height="3" fill="black" />
                      
                      <rect x="20" y="65" width="15" height="15" fill="black" />
                      <rect x="23" y="68" width="9" height="9" fill="white" />
                      <rect x="26" y="71" width="3" height="3" fill="black" />
                    </svg>
                  </div>
                  <p className="text-center text-sm text-gray-500">
                    Present this QR code at the entrance
                  </p>
                </div>
              </div>
              
              <div className="p-6 pt-0 flex flex-wrap gap-2 justify-center">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-4 overflow-hidden border-2 border-eventverse-blue">
            <div className="bg-eventverse-blue text-white p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Summer Music Festival</h2>
                <Badge className="bg-white text-eventverse-blue">
                  Virtual Pass
                </Badge>
              </div>
              <div className="flex items-center mt-1 text-eventverse-blue-light text-sm">
                <Ticket className="h-4 w-4 mr-1" />
                Ticket #EV-2025-7654321
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="flex items-center gap-1 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    Jun 15-17, 2025
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-gray-600">
                    <Clock className="h-4 w-4" />
                    Access 24/7
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Your virtual access link will be emailed to you 24 hours before the event.
                  You can also access it directly from your account dashboard.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold mb-2">Virtual Access Details</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-500 text-white p-1 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    Live HD streaming of all main stages
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-500 text-white p-1 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    Interactive chat with other virtual attendees
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-500 text-white p-1 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    7-day replay access after the event
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-500 text-white p-1 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    Exclusive behind-the-scenes content
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <Button asChild>
                  <Link to="/virtual-access">
                    Access Virtual Event
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
            <h3 className="font-semibold mb-2">Important Information</h3>
            <ul className="space-y-2">
              <li>• Each ticket is unique and can only be used once for entry.</li>
              <li>• Please arrive at least 30 minutes before the event start time.</li>
              <li>• Virtual access links are personal and cannot be shared.</li>
              <li>• For any issues with your tickets, contact support@eventverse.com.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTicket;
