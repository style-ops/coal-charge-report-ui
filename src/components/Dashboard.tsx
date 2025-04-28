
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from './Layout';

const Dashboard: React.FC = () => {
  // This would come from auth context in a real app
  const userName = "John Smith";
  
  return (
    <Layout showNav={true} userName={userName}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Manager's Charge Report Dashboard</h1>
          <p className="text-mine-gray text-lg">Daily reporting system for coal mine operations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fill Today's Report */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-mine-accent text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Fill Today's Report
              </CardTitle>
              <CardDescription className="text-mine-light/80">Daily operational safety checklist</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600">
                Complete the daily inspection report based on Form 7 of the Indian Coal Mines Regulation.
                Track critical safety parameters and issues.
              </p>
            </CardContent>
            <CardFooter>
              <Link 
                to="/daily-report" 
                className="w-full bg-mine-accent text-white py-3 rounded text-center hover:bg-mine-accent/80 transition-colors"
              >
                Start Report
              </Link>
            </CardFooter>
          </Card>

          {/* View Past Reports */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-mine-gray text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                View Past Reports
              </CardTitle>
              <CardDescription className="text-mine-light/80">Historical records and documentation</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600">
                Access and review previously submitted reports. 
                Track safety trends and ensure compliance with all regulations.
              </p>
            </CardContent>
            <CardFooter>
              <Link 
                to="/past-reports" 
                className="w-full bg-mine-gray text-white py-3 rounded text-center hover:bg-mine-gray/80 transition-colors"
              >
                View Reports
              </Link>
            </CardFooter>
          </Card>

          {/* Manager Handover */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-mine-dark text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 010 7.75"></path>
                </svg>
                Manager Handover
              </CardTitle>
              <CardDescription className="text-mine-light/80">Shift transition management</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600">
                Ensure smooth transition between shifts with proper handover procedures.
                Review pending actions from previous shift.
              </p>
            </CardContent>
            <CardFooter>
              <Link 
                to="/handover" 
                className="w-full bg-mine-dark text-white py-3 rounded text-center hover:bg-mine-dark/80 transition-colors"
              >
                Manage Handover
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Quick Stats Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-mine-dark border-b pb-2">Quick Statistics</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-600 font-medium">Reports Submitted</p>
              <p className="text-2xl font-bold">136</p>
              <p className="text-xs text-blue-500">Last 30 days</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-sm text-green-600 font-medium">Safety Compliance</p>
              <p className="text-2xl font-bold">98%</p>
              <p className="text-xs text-green-500">Current month</p>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <p className="text-sm text-amber-600 font-medium">Pending Actions</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-amber-500">Requires attention</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <p className="text-sm text-purple-600 font-medium">Next Inspection</p>
              <p className="text-2xl font-bold">5 Days</p>
              <p className="text-xs text-purple-500">Regulatory review</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
