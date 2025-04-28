
import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  userName?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, showNav = false, userName }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {showNav && (
        <header className="bg-mine-dark text-white sticky top-0 z-10 shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-xl font-bold">Coal Charge Report</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/dashboard" className="hover:text-mine-warning transition-colors">Dashboard</Link>
              <Link to="/daily-report" className="hover:text-mine-warning transition-colors">Fill Today's Report</Link>
              <Link to="/past-reports" className="hover:text-mine-warning transition-colors">Past Reports</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              {userName && <span className="hidden md:inline">Welcome, {userName}</span>}
              <Link to="/" className="bg-mine-accent hover:bg-mine-accent/80 px-4 py-1 rounded text-white transition-colors">
                {userName ? 'Logout' : 'Login'}
              </Link>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden border-t border-gray-700">
            <div className="container mx-auto px-4 py-2 flex justify-between">
              <Link to="/dashboard" className="text-sm hover:text-mine-warning transition-colors">Dashboard</Link>
              <Link to="/daily-report" className="text-sm hover:text-mine-warning transition-colors">Today's Report</Link>
              <Link to="/past-reports" className="text-sm hover:text-mine-warning transition-colors">Past Reports</Link>
            </div>
          </div>
        </header>
      )}
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-mine-dark text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Manager's Charge Report - Form 7 of Indian Coal Mines Regulation, 2017</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
