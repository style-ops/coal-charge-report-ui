
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';

// Mock data for past reports
const mockReports = [
  {
    id: '123',
    date: '2023-04-27',
    shift: 'Morning',
    manager1: 'John Smith',
    manager2: 'Alice Johnson',
    status: 'Completed',
    issues: 2
  },
  {
    id: '122',
    date: '2023-04-26',
    shift: 'Night',
    manager1: 'John Smith',
    manager2: 'Bob Wilson',
    status: 'Completed',
    issues: 0
  },
  {
    id: '121',
    date: '2023-04-26',
    shift: 'Afternoon',
    manager1: 'Mike Brown',
    manager2: 'John Smith',
    status: 'Completed',
    issues: 1
  },
  {
    id: '120',
    date: '2023-04-25',
    shift: 'Morning',
    manager1: 'John Smith',
    manager2: 'Alice Johnson',
    status: 'Completed',
    issues: 0
  },
  {
    id: '119',
    date: '2023-04-24',
    shift: 'Night',
    manager1: 'Alice Johnson',
    manager2: 'Bob Wilson',
    status: 'Completed',
    issues: 3
  },
  {
    id: '118',
    date: '2023-04-24',
    shift: 'Afternoon',
    manager1: 'Bob Wilson',
    manager2: 'Mike Brown',
    status: 'Completed',
    issues: 0
  },
  {
    id: '117',
    date: '2023-04-23',
    shift: 'Morning',
    manager1: 'Mike Brown',
    manager2: 'John Smith',
    status: 'Completed',
    issues: 1
  },
];

const PastReports: React.FC = () => {
  const userName = "John Smith"; // This would come from auth context in a real app
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [shiftFilter, setShiftFilter] = useState("");
  
  // Filter reports based on search and filters
  const filteredReports = mockReports.filter(report => {
    const matchesSearch = !searchTerm || 
      report.manager1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.manager2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.includes(searchTerm);
      
    const matchesDate = !dateFilter || report.date === dateFilter;
    const matchesShift = !shiftFilter || report.shift.toLowerCase() === shiftFilter.toLowerCase();
    
    return matchesSearch && matchesDate && matchesShift;
  });

  return (
    <Layout showNav={true} userName={userName}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Past Reports</h1>
        
        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search by Manager or Report ID
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="dateFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Date
              </label>
              <Input
                id="dateFilter"
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="shiftFilter" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Shift
              </label>
              <select
                id="shiftFilter"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                value={shiftFilter}
                onChange={(e) => setShiftFilter(e.target.value)}
              >
                <option value="">All Shifts</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="night">Night</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setDateFilter("");
                setShiftFilter("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </Card>
        
        {/* Reports Table */}
        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">Report ID</TableHead>
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="font-semibold">Shift</TableHead>
                <TableHead className="font-semibold">Manager 1</TableHead>
                <TableHead className="font-semibold">Manager 2</TableHead>
                <TableHead className="font-semibold">Issues</TableHead>
                <TableHead className="font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.id}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.shift}</TableCell>
                    <TableCell>{report.manager1}</TableCell>
                    <TableCell>{report.manager2}</TableCell>
                    <TableCell>
                      {report.issues > 0 ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          {report.issues} {report.issues === 1 ? 'Issue' : 'Issues'}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          No Issues
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Link 
                        to={`/report-detail/${report.id}`}
                        className="text-mine-accent hover:text-mine-accent/80 font-medium"
                      >
                        View Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                    No reports found matching your filters
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
      </div>
    </Layout>
  );
};

export default PastReports;
