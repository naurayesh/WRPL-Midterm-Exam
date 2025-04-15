
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EventSearchPage from "./components/event/EventSearchPage";
import TicketOrderForm from "./components/ticket/TicketOrderForm";
import PaymentPage from "./components/payment/PaymentPage";
import DigitalTicket from "./components/ticket/DigitalTicket";
import MainLayout from "./components/layout/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <MainLayout>
                <EventSearchPage />
              </MainLayout>
            } 
          />
          <Route 
            path="/search" 
            element={
              <MainLayout>
                <EventSearchPage />
              </MainLayout>
            } 
          />
          <Route 
            path="/event/:id" 
            element={
              <MainLayout>
                <TicketOrderForm />
              </MainLayout>
            } 
          />
          <Route 
            path="/payment" 
            element={
              <MainLayout>
                <PaymentPage />
              </MainLayout>
            } 
          />
          <Route 
            path="/ticket" 
            element={
              <MainLayout>
                <DigitalTicket />
              </MainLayout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
