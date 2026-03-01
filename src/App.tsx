import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Index from "./pages/Index";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import EventsCalendar from "./pages/EventsCalendar";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminForgotPassword from "./pages/admin/AdminForgotPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import { toast } from "@/hooks/use-toast";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { isAuthenticated, user, login, signup, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast({ title: "Logged Out", description: "You have been logged out successfully." });
  };

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events-calendar" element={<EventsCalendar />} />
      <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
      <Route path="/admin/login" element={isAuthenticated ? <Navigate to="/admin/dashboard" replace /> : <AdminLoginPage onLogin={login} />} />
      <Route path="/admin/signup" element={<AdminSignup onSignup={signup} />} />
      <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
      <Route path="/admin/dashboard" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AdminDashboard onLogout={handleLogout} user={user} />
        </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
