
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Login: React.FC = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating authentication
    setTimeout(() => {
      // Demo credentials: manager1/password or manager2/password
      if ((employeeId === 'manager1' || employeeId === 'manager2') && password === 'password') {
        toast({
          title: "Login successful",
          description: "Welcome to Manager's Charge Report system.",
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid employee ID or password.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('https://images.unsplash.com/photo-1565374150366-20593696e460?auto=format&fit=crop&q=80&w=1080')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
      <Card className="w-full max-w-md mx-4 bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in">
        <CardHeader className="text-center border-b pb-6">
          <CardTitle className="text-2xl">Manager's Charge Report</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="employeeId">Employee ID</Label>
                <Input 
                  id="employeeId"
                  type="text" 
                  placeholder="Enter your employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  required
                  className="py-6"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="py-6"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 bg-mine-accent hover:bg-mine-accent/80"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : 'Login'}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-center text-sm text-gray-500 border-t pt-6">
          <p>Form 7 of the Indian Coal Mines Regulation, 2017</p>
          <p className="text-xs">In case of login issues, please contact your system administrator</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
