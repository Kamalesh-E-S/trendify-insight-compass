
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  currentLanguage, 
  onLanguageChange 
}) => {
  return (
    <div className="flex items-center justify-end mb-6">
      <span className="mr-2 text-sm text-gray-600">Language:</span>
      <ToggleGroup type="single" value={currentLanguage} onValueChange={(value) => {
        if (value) onLanguageChange(value);
      }}>
        <ToggleGroupItem value="en" aria-label="Toggle English">
          EN
        </ToggleGroupItem>
        <ToggleGroupItem value="hi" aria-label="Toggle Hindi">
          HI
        </ToggleGroupItem>
        <ToggleGroupItem value="ta" aria-label="Toggle Tamil">
          TA
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default LanguageToggle;
