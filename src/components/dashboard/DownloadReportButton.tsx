
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DownloadReportButtonProps {
  language: string;
}

const DownloadReportButton: React.FC<DownloadReportButtonProps> = ({ language }) => {
  const { toast } = useToast();

  const handleDownload = () => {
    // In a real implementation, this would make an API call to download the report
    toast({
      title: "Report Generation Started",
      description: `Your report in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : 'Tamil'} will be ready shortly.`,
      variant: "default",
    });
    
    // Simulate download completion after 2 seconds
    setTimeout(() => {
      toast({
        title: "Report Ready",
        description: "Your market research report has been generated.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <Button 
      className="google-button" 
      onClick={handleDownload}
    >
      Download Research Report
    </Button>
  );
};

export default DownloadReportButton;
