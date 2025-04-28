
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock inspection questions based on Form 7
const inspectionSections = [
  {
    id: "general",
    title: "General Mine Conditions",
    questions: [
      { id: "q1", text: "Are all roadways and traveling paths clear of obstructions?" },
      { id: "q2", text: "Is adequate ventilation maintained in all working areas?" },
      { id: "q3", text: "Are all electrical installations properly maintained?" },
      { id: "q4", text: "Is the water drainage system functioning properly?" },
      { id: "q5", text: "Are all fire fighting equipment accessible and in working condition?" }
    ]
  },
  {
    id: "safety",
    title: "Safety Equipment & Procedures",
    questions: [
      { id: "q6", text: "Are all safety helmets and boots in good condition?" },
      { id: "q7", text: "Are self-rescuers available for all underground workers?" },
      { id: "q8", text: "Are emergency evacuation routes clearly marked?" },
      { id: "q9", text: "Is the gas detection equipment working properly?" },
      { id: "q10", text: "Are all workers properly trained on emergency procedures?" }
    ]
  },
  {
    id: "machinery",
    title: "Machinery & Equipment",
    questions: [
      { id: "q11", text: "Are all machines properly maintained according to schedule?" },
      { id: "q12", text: "Are guards in place on all moving parts of machinery?" },
      { id: "q13", text: "Is there any unusual noise in any machinery?" },
      { id: "q14", text: "Are transportation equipment in good working condition?" },
      { id: "q15", text: "Is loading and unloading equipment functioning properly?" }
    ]
  },
  {
    id: "supports",
    title: "Supports & Ground Control",
    questions: [
      { id: "q16", text: "Are roof supports in good condition?" },
      { id: "q17", text: "Are there any signs of ground movement or instability?" },
      { id: "q18", text: "Is systematic support plan being followed?" },
      { id: "q19", text: "Are temporary supports used where necessary?" },
      { id: "q20", text: "Are all support materials readily available?" }
    ]
  },
  {
    id: "environment",
    title: "Environmental Conditions",
    questions: [
      { id: "q21", text: "Is air quality within acceptable parameters?" },
      { id: "q22", text: "Are dust suppression systems working effectively?" },
      { id: "q23", text: "Is the noise level within acceptable limits?" },
      { id: "q24", text: "Is the temperature and humidity suitable for work?" },
      { id: "q25", text: "Are there any gas accumulations detected?" }
    ]
  }
];

const DailyReportForm: React.FC = () => {
  const userName = "John Smith"; // This would come from auth context in a real app
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("general");
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState<{
    date: string;
    shiftType: string;
    answers: Record<string, string>;
    remarks: Record<string, string>;
    generalRemarks: string;
  }>({
    date: new Date().toISOString().split('T')[0],
    shiftType: "morning",
    answers: {},
    remarks: {},
    generalRemarks: ""
  });

  // Calculate progress
  React.useEffect(() => {
    const totalQuestions = inspectionSections.reduce(
      (sum, section) => sum + section.questions.length, 
      0
    );
    const answeredQuestions = Object.keys(formData.answers).length;
    setProgress(Math.round((answeredQuestions / totalQuestions) * 100));
  }, [formData.answers]);

  const handleAnswerChange = (questionId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value
      }
    }));
  };

  const handleRemarkChange = (questionId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      remarks: {
        ...prev.remarks,
        [questionId]: value
      }
    }));
  };

  const handleSaveDraft = () => {
    // In a real app, this would save to backend
    toast({
      title: "Draft Saved",
      description: "Your report has been saved as a draft.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would validate and submit to backend
    toast({
      title: "Report Submitted",
      description: "Your daily report has been successfully submitted.",
    });
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <Layout showNav={true} userName={userName}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Daily Manager's Charge Report</h1>
          
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              onClick={handleSaveDraft}
              className="border-mine-accent text-mine-accent hover:text-mine-accent hover:bg-mine-accent/10"
            >
              Save Draft
            </Button>
            <Button 
              onClick={handleSubmit}
              className="bg-mine-accent hover:bg-mine-accent/80"
            >
              Submit Report
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2 text-sm">
            <span>Progress</span>
            <span>{progress}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <form>
          {/* Report Header */}
          <Card className="mb-8 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="date">Report Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="bg-gray-50"
                />
              </div>
              <div>
                <Label htmlFor="shift">Shift Type</Label>
                <select
                  id="shift"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  value={formData.shiftType}
                  onChange={(e) => setFormData({...formData, shiftType: e.target.value})}
                >
                  <option value="morning">Morning (6am - 2pm)</option>
                  <option value="afternoon">Afternoon (2pm - 10pm)</option>
                  <option value="night">Night (10pm - 6am)</option>
                </select>
              </div>
              <div>
                <Label htmlFor="manager">Manager Name</Label>
                <Input id="manager" value={userName} readOnly className="bg-gray-50" />
              </div>
            </div>
          </Card>

          {/* Tabbed Inspection Sections */}
          <Tabs 
            defaultValue={activeTab} 
            onValueChange={setActiveTab}
            className="mb-6"
          >
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-5 gap-2">
              {inspectionSections.map(section => (
                <TabsTrigger 
                  key={section.id}
                  value={section.id}
                  className="py-3"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {inspectionSections.map(section => (
              <TabsContent key={section.id} value={section.id}>
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-6 pb-2 border-b">{section.title}</h2>
                  
                  {section.questions.map(question => (
                    <div key={question.id} className="mb-6 pb-6 border-b border-gray-100 last:border-0">
                      <div className="mb-3">
                        <p className="font-medium mb-3">{question.text}</p>
                        
                        <RadioGroup 
                          value={formData.answers[question.id] || ""} 
                          onValueChange={(value) => handleAnswerChange(question.id, value)}
                          className="flex flex-wrap gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="satisfactory" id={`${question.id}-ok`} />
                            <Label htmlFor={`${question.id}-ok`} className="font-normal text-green-600">Satisfactory</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="attention" id={`${question.id}-attention`} />
                            <Label htmlFor={`${question.id}-attention`} className="font-normal text-amber-600">Needs Attention</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="urgent" id={`${question.id}-urgent`} />
                            <Label htmlFor={`${question.id}-urgent`} className="font-normal text-red-600">Urgent Action Required</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="na" id={`${question.id}-na`} />
                            <Label htmlFor={`${question.id}-na`} className="font-normal text-gray-600">Not Applicable</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      {formData.answers[question.id] && formData.answers[question.id] !== 'satisfactory' && formData.answers[question.id] !== 'na' && (
                        <div>
                          <Label htmlFor={`remark-${question.id}`} className="text-sm text-gray-600">
                            {formData.answers[question.id] === 'urgent' ? 'Provide urgency details and actions taken:' : 'Additional remarks:'}
                          </Label>
                          <Textarea
                            id={`remark-${question.id}`}
                            placeholder="Enter your remarks here..."
                            value={formData.remarks[question.id] || ""}
                            onChange={(e) => handleRemarkChange(question.id, e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* General Remarks */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">General Remarks & Observations</h2>
            <Textarea
              placeholder="Enter any general observations or issues not covered in the inspection points..."
              value={formData.generalRemarks}
              onChange={(e) => setFormData({...formData, generalRemarks: e.target.value})}
              className="min-h-32"
            />
          </Card>
          
          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <Button 
              variant="outline" 
              onClick={handleSaveDraft}
              className="border-mine-accent text-mine-accent hover:text-mine-accent hover:bg-mine-accent/10"
            >
              Save Draft
            </Button>
            <Button 
              type="submit"
              onClick={handleSubmit}
              className="bg-mine-accent hover:bg-mine-accent/80"
            >
              Submit Report
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DailyReportForm;
