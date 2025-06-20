import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { initAnimations } from "@/lib/animations";
import { useEffect } from "react";
import Homepage from "@/pages/homepage";
import AdminPage from "@/pages/admin";
import NotFound from "@/pages/not-found";
import Chatbot from "@/components/chatbot";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Homepage} />
      <Route path="/admin" component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Chatbot />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
