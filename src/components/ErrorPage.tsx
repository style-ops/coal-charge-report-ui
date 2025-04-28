
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ErrorPageProps {
  code?: string;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  code = "404",
  message = "Page not found"
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <div className="mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-mine-gray mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-6xl font-bold text-mine-dark mb-4">{code}</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">{message}</h2>
        
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <p className="mb-4">
            This area might be restricted or the page you're looking for may have been moved or deleted.
          </p>
          <p>
            If you believe this is an error, please contact your system administrator or mine safety officer.
          </p>
        </div>
        
        <Link to="/dashboard">
          <Button className="bg-mine-accent hover:bg-mine-accent/80">
            Return to Dashboard
          </Button>
        </Link>
      </div>
      
      <div className="mt-16 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-mine-dark" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
