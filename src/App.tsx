
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";
import DailyReportForm from "./components/DailyReportForm";
import PastReports from "./components/PastReports";
import ReportDetail from "./components/ReportDetail";
import ErrorPage from "./components/ErrorPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/daily-report" element={<DailyReportForm />} />
        <Route path="/past-reports" element={<PastReports />} />
        <Route path="/report-detail/:id" element={<ReportDetail />} />
        <Route path="/404" element={<ErrorPage code="404" message="Page Not Found" />} />
        <Route path="/403" element={<ErrorPage code="403" message="Access Denied" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
