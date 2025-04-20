
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import CategoryTrendsChart from '@/components/dashboard/CategoryTrendsChart';
import CompetitorInsights from '@/components/dashboard/CompetitorInsights';
import GoogleMapsHeatmap from '@/components/dashboard/GoogleMapsHeatmap';
import LandmarksTable from '@/components/dashboard/LandmarksTable';
import StrategyRecommendations from '@/components/dashboard/StrategyRecommendations';
import LanguageToggle from '@/components/dashboard/LanguageToggle';
import DownloadReportButton from '@/components/dashboard/DownloadReportButton';
import { 
  categoryTrendsData, 
  competitorData, 
  landmarksData, 
  strategyRecommendations, 
  heatmapData 
} from '@/utils/mockData';

const Dashboard = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Market Research Dashboard</h1>
            <p className="text-gray-600">Your AI-powered business insights platform</p>
          </div>
          <div className="mt-4 md:mt-0">
            <LanguageToggle 
              currentLanguage={selectedLanguage} 
              onLanguageChange={setSelectedLanguage} 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <CategoryTrendsChart 
            data={categoryTrendsData.topCategories} 
            title="Top Business Categories" 
            description="Fastest growing shop types in your target area"
          />
          <CategoryTrendsChart 
            data={categoryTrendsData.leastCategories} 
            title="Declining Business Categories" 
            description="Shop types with negative growth in your target area"
          />
        </div>

        <div className="mb-6">
          <GoogleMapsHeatmap data={heatmapData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <LandmarksTable data={landmarksData} />
          <CompetitorInsights data={competitorData} />
        </div>

        <div className="mb-6">
          <StrategyRecommendations data={strategyRecommendations} />
        </div>

        <div className="flex justify-center my-8">
          <DownloadReportButton language={selectedLanguage} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
