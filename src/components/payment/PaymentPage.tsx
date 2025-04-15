
import React, { useState } from 'react';
import { 
  Calendar,
  Check, 
  CreditCard, 
  Lock, 
  MapPin, 
  ShieldCheck, 
  Ticket as TicketIcon 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to success page
      window.location.href = '/ticket';
    }, 2000);
  };
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
            <p className="text-gray-500">Secure checkout for your event tickets</p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Summer Music Festival</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <Badge variant="outline" className="flex items-center gap-1 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  Jun 15-17, 2025
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  Central Park, New York
                </Badge>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">General Admission</span>
                    <span className="text-gray-500 ml-1">x2</span>
                  </div>
                  <span>$119.98</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">Virtual Pass</span>
                    <span className="text-gray-500 ml-1">x1</span>
                  </div>
                  <span>$29.99</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <form onSubmit={handleSubmit}>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                
                <RadioGroup 
                  defaultValue="credit-card" 
                  className="mb-6"
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <FormLabel htmlFor="credit-card" className="flex items-center cursor-pointer">
                      <CreditCard className="h-5 w-5 mr-2 text-eventverse-purple" />
                      Credit or Debit Card
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <FormLabel htmlFor="paypal" className="cursor-pointer">
                      <svg className="h-6 w-6 mr-2 inline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0801 7.4162C19.1101 7.1762 19.1101 6.9362 19.0801 6.6962C18.8701 5.0062 17.3201 3.7262 15.6301 3.7262H9.68005C9.25005 3.7262 8.88005 4.0362 8.80005 4.4662L6.06005 17.0862C6.00005 17.4062 6.24005 17.7262 6.57005 17.7262H9.69005C10.1201 17.7262 10.4901 17.4162 10.5701 16.9862L11.0701 14.1962C11.1501 13.7662 11.5201 13.4562 11.9501 13.4562H13.6001C16.7901 13.4562 19.1301 11.3962 19.6201 8.2562C19.7201 7.9662 19.1201 7.6862 19.0801 7.4162Z" fill="#002F87" />
                        <path d="M6.26999 17.7262L9.01999 5.1062C9.09999 4.6762 9.46999 4.3662 9.89999 4.3662H15.85C17.54 4.3662 19.09 5.6462 19.3 7.3362C19.33 7.5762 19.33 7.8162 19.3 8.0562C18.81 11.1962 16.47 13.2562 13.28 13.2562H11.63C11.2 13.2562 10.83 13.5662 10.75 13.9962L10.25 16.7862C10.17 17.2162 9.79999 17.5262 9.37999 17.5262H6.84999C6.51999 17.5262 6.20999 17.2062 6.26999 17.7262Z" fill="#009BE0" />
                        <path d="M10.25 16.7864L10.75 13.9964C10.83 13.5664 11.2 13.2564 11.63 13.2564H13.28C16.47 13.2564 18.81 11.1964 19.3 8.0564C19.65 8.0564 20.04 7.6464 20.2 7.2664C20.73 9.0664 20.24 10.5664 19.42 11.7064C18.34 13.2064 16.45 14.0664 14.11 14.0664H11.64C11.21 14.0664 10.84 14.3764 10.76 14.8064L10.26 17.5964C10.18 18.0264 9.81 18.3364 9.38 18.3364H6.85C6.52 18.3364 6.28 18.0164 6.34 17.6964L6.7 15.5764C6.76 15.2564 7.14 14.9364 7.47 14.9364H8.98C9.41 14.9364 9.78 14.6264 9.86 14.1964L10.25 16.7864Z" fill="#001F6B" />
                      </svg>
                      PayPal
                    </FormLabel>
                  </div>
                </RadioGroup>
                
                {paymentMethod === 'credit-card' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1234 5678 9012 3456" />
                        </FormControl>
                      </FormItem>
                      <FormItem>
                        <FormLabel>Cardholder Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" />
                        </FormControl>
                      </FormItem>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <FormItem>
                        <FormLabel>Expiration Date</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" />
                        </FormControl>
                      </FormItem>
                      <FormItem>
                        <FormLabel>CVC</FormLabel>
                        <FormControl>
                          <Input placeholder="123" />
                        </FormControl>
                      </FormItem>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                      <Lock className="h-4 w-4" />
                      Your payment info is securely encrypted
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Billing Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" />
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" />
                      </FormControl>
                    </FormItem>
                  </div>
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" />
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" />
                    </FormControl>
                  </FormItem>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="New York" />
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormLabel>State/Province</FormLabel>
                      <FormControl>
                        <Input placeholder="NY" />
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormLabel>Zip/Postal Code</FormLabel>
                      <FormControl>
                        <Input placeholder="10001" />
                      </FormControl>
                    </FormItem>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end mb-8">
              <Button type="submit" size="lg" disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <div className="spinner mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>Complete Payment</>
                )}
              </Button>
            </div>
          </form>
        </div>
        
        <div className="lg:w-96">
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>General Admission x2</span>
                    <span>$119.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Virtual Pass x1</span>
                    <span>$29.99</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$149.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service & Facility Fees</span>
                    <span>$15.00</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span>$164.97</span>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg flex items-start gap-3 mb-4">
                  <ShieldCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium mb-1">Your order is protected</p>
                    <p className="text-xs text-gray-500">We use industry standard encryption to protect your payment information.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
