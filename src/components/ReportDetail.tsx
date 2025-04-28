
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// Mock report detail data
const mockReportData = {
  id: '123',
  date: '2023-04-27',
  shift: 'Morning (6am - 2pm)',
  manager1: {
    name: 'John Smith',
    timestamp: '2023-04-27T06:45:00Z'
  },
  manager2: {
    name: 'Alice Johnson',
    timestamp: '2023-04-27T14:15:00Z'
  },
  sections: [
    {
      title: "General Mine Conditions",
      questions: [
        {
          question: "Are all roadways and traveling paths clear of obstructions?",
          answer: "satisfactory",
          remarks: ""
        },
        {
          question: "Is adequate ventilation maintained in all working areas?",
          answer: "attention",
          remarks: "Ventilation in Section 3B needs to be checked; airflow seems reduced."
        },
        {
          question: "Are all electrical installations properly maintained?",
          answer: "satisfactory",
          remarks: ""
        },
        {
          question: "Is the water drainage system functioning properly?",
          answer: "satisfactory",
          remarks: ""
        },
        {
          question: "Are all fire fighting equipment accessible and in working condition?",
          answer: "satisfactory",
          remarks: ""
        }
      ]
    },
    {
      title: "Safety Equipment & Procedures",
      questions: [
        {
          question: "Are all safety helmets and boots in good condition?",
          answer: "satisfactory",
          remarks: ""
        },
        {
          question: "Are self-rescuers available for all underground workers?",
          answer: "attention",
          remarks: "Three self-rescuers need replacement in Zone 2."
        },
        {
          question: "Are emergency evacuation routes clearly marked?",
          answer: "satisfactory",
          remarks: ""
        },
        {
          question: "Is the gas detection equipment working properly?",
          answer: "satisfactory",
          remarks: ""
        },
        {
          question: "Are all workers properly trained on emergency procedures?",
          answer: "satisfactory",
          remarks: ""
        }
      ]
    }
  ],
  generalRemarks: "Overall conditions are satisfactory. Follow-up required on ventilation in Section 3B and replacement of self-rescuers in Zone 2."
};

const ReportDetail: React.FC = () => {
  const userName = "John Smith"; // This would come from auth context in a real app
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch the report data based on the ID
  const reportData = mockReportData;

  const formatDateTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'satisfactory':
        return <Badge className="bg-green-500">Satisfactory</Badge>;
      case 'attention':
        return <Badge className="bg-amber-500">Needs Attention</Badge>;
      case 'urgent':
        return <Badge className="bg-red-500">Urgent</Badge>;
      case 'na':
        return <Badge className="bg-gray-400">Not Applicable</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Layout showNav={true} userName={userName}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Report #{reportData.id}</h1>
          <Link to="/past-reports">
            <Button variant="outline">Back to Reports</Button>
          </Link>
        </div>
        
        {/* Report Header Information */}
        <Card className="mb-8">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl">Report Information</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Report Date</h3>
                <p className="mt-1 text-lg">{reportData.date}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Shift</h3>
                <p className="mt-1 text-lg">{reportData.shift}</p>
              </div>
              <div className="border-t pt-4 md:pt-0 md:border-0">
                <h3 className="text-sm font-medium text-gray-500">Manager 1</h3>
                <p className="mt-1 text-lg">{reportData.manager1.name}</p>
                <p className="text-xs text-gray-500 mt-1">Submitted: {formatDateTime(reportData.manager1.timestamp)}</p>
              </div>
              <div className="border-t pt-4 md:pt-0 md:border-0">
                <h3 className="text-sm font-medium text-gray-500">Manager 2</h3>
                <p className="mt-1 text-lg">{reportData.manager2.name}</p>
                <p className="text-xs text-gray-500 mt-1">Submitted: {formatDateTime(reportData.manager2.timestamp)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Report Sections */}
        {reportData.sections.map((section, sectionIndex) => (
          <Card className="mb-8" key={sectionIndex}>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {section.questions.map((item, index) => (
                <div key={index} className={`${index < section.questions.length - 1 ? 'mb-6 pb-6 border-b' : ''}`}>
                  <div className="flex justify-between items-start gap-4">
                    <p className="font-medium">{item.question}</p>
                    <div>
                      {getStatusBadge(item.answer)}
                    </div>
                  </div>
                  
                  {item.remarks && (
                    <div className="mt-2 bg-gray-50 p-3 rounded-md">
                      <h4 className="text-sm font-medium text-gray-500">Remarks:</h4>
                      <p className="mt-1">{item.remarks}</p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
        
        {/* General Remarks */}
        <Card className="mb-8">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="text-xl">General Remarks & Observations</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="whitespace-pre-line">{reportData.generalRemarks}</p>
          </CardContent>
        </Card>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Link to="/past-reports">
            <Button variant="outline">Back to Reports</Button>
          </Link>
          <div className="flex space-x-4">
            <Button className="bg-mine-accent hover:bg-mine-accent/80">
              Print Report
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReportDetail;
