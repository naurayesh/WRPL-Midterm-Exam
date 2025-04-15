
import React, { useState } from 'react';
import { 
  Calendar, 
  Clock,
  HelpCircle, 
  Info, 
  MapPin, 
  Minus, 
  Plus, 
  Ticket as TicketIcon 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface TicketType {
  id: number;
  name: string;
  price: number;
  description: string;
  max: number;
}

const TicketOrderForm: React.FC = () => {
  const [ticketCounts, setTicketCounts] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0
  });
  
  const ticketTypes: TicketType[] = [
    {
      id: 1,
      name: 'General Admission',
      price: 59.99,
      description: 'Standard entry to the event. Access to all main areas.',
      max: 10
    },
    {
      id: 2,
      name: 'VIP Package',
      price: 149.99,
      description: 'Premium access including exclusive areas, merchandise pack and priority entry.',
      max: 5
    },
    {
      id: 3,
      name: 'Virtual Pass',
      price: 29.99,
      description: 'Online access to all event streams, interactive features and 7-day replay.',
      max: 20
    }
  ];
  
  const incrementTicket = (id: number) => {
    if (ticketCounts[id] < ticketTypes.find(t => t.id === id)!.max) {
      setTicketCounts({
        ...ticketCounts,
        [id]: ticketCounts[id] + 1
      });
    }
  };
  
  const decrementTicket = (id: number) => {
    if (ticketCounts[id] > 0) {
      setTicketCounts({
        ...ticketCounts,
        [id]: ticketCounts[id] - 1
      });
    }
  };
  
  const totalItems = Object.values(ticketCounts).reduce((sum, count) => sum + count, 0);
  
  const subtotal = ticketTypes.reduce((sum, ticket) => {
    return sum + (ticket.price * ticketCounts[ticket.id]);
  }, 0);
  
  const fees = subtotal * 0.1; // 10% fees
  const total = subtotal + fees;
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Summer Music Festival</h1>
            <div className="flex flex-wrap gap-4 mb-4">
              <Badge variant="outline" className="flex items-center gap-1 text-gray-600">
                <Calendar className="h-4 w-4" />
                Jun 15-17, 2025
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 text-gray-600">
                <Clock className="h-4 w-4" />
                3:00 PM - 11:00 PM
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 text-gray-600">
                <MapPin className="h-4 w-4" />
                Central Park, New York
              </Badge>
            </div>
            <div className="flex items-center mb-4">
              <Badge className="bg-purple-500">
                <Calendar className="h-3 w-3 mr-1" />
                Hybrid Event
              </Badge>
              <span className="text-xs text-gray-500 ml-2 flex items-center">
                <Info className="h-3 w-3 mr-1" />
                Available both in-person and online
              </span>
            </div>
          </div>
          
          <div
            className="w-full h-64 rounded-lg mb-8 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80)' }}
          ></div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Select Tickets</h2>
            
            {ticketTypes.map(ticket => (
              <Card key={ticket.id} className="mb-4">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold">{ticket.name}</h3>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-64">{ticket.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <p className="text-gray-500 text-sm">{ticket.description}</p>
                      <p className="font-bold mt-1">${ticket.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => decrementTicket(ticket.id)}
                        disabled={ticketCounts[ticket.id] <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-10 text-center">{ticketCounts[ticket.id]}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => incrementTicket(ticket.id)}
                        disabled={ticketCounts[ticket.id] >= ticket.max}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-lg font-semibold">Event Details</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Join us for the biggest summer festival of 2025! Three days of amazing music across
                    five stages featuring the hottest artists in pop, rock, hip-hop, and electronic music.
                  </p>
                  <p>
                    Whether you attend in person or join virtually, you'll experience unforgettable
                    performances, connect with fellow music lovers, and create memories that will last a lifetime.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-lg font-semibold">Event Policies</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>All sales are final. No refunds or exchanges.</li>
                    <li>Event is rain or shine unless otherwise notified.</li>
                    <li>Tickets are transferable through our official app only.</li>
                    <li>Virtual passes allow access from a single device at a time.</li>
                    <li>Recording and redistribution of virtual content is prohibited.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        <div className="lg:w-96">
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                
                {totalItems > 0 ? (
                  <>
                    <div className="space-y-3 mb-4">
                      {ticketTypes.map(ticket => (
                        ticketCounts[ticket.id] > 0 && (
                          <div key={ticket.id} className="flex justify-between">
                            <div>
                              <span className="font-medium">{ticket.name}</span>
                              <span className="text-gray-500 ml-1">x{ticketCounts[ticket.id]}</span>
                            </div>
                            <span>${(ticket.price * ticketCounts[ticket.id]).toFixed(2)}</span>
                          </div>
                        )
                      ))}
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service & Facility Fees</span>
                        <span>${fees.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex justify-between font-bold text-lg mb-6">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/payment">
                        Proceed to Payment
                      </Link>
                    </Button>
                    
                    <div className="mt-4 text-xs text-gray-500 flex items-center">
                      <TicketIcon className="h-3 w-3 mr-1" />
                      Tickets will be delivered to your email and mobile app
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <TicketIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="mb-1 text-gray-500">No tickets selected</p>
                    <p className="text-sm text-gray-400">Please select at least one ticket to continue</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketOrderForm;
