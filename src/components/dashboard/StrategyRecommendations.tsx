
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StrategyData {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  timeframe: string;
  potentialImpact: string;
}

interface StrategyRecommendationsProps {
  data: StrategyData[];
}

const StrategyRecommendations: React.FC<StrategyRecommendationsProps> = ({ data }) => {
  // Function to determine badge color based on difficulty
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'low':
        return 'bg-google-green text-white';
      case 'medium':
        return 'bg-google-yellow text-black';
      case 'high':
        return 'bg-google-red text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  // Function to determine badge color based on impact
  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high':
        return 'bg-google-blue text-white';
      case 'medium':
        return 'bg-blue-400 text-white';
      case 'low':
        return 'bg-blue-300 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <Card className="google-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">AI Strategy Recommendations</CardTitle>
        <CardDescription>Data-driven business strategies for your location</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((strategy) => (
            <div key={strategy.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-base mb-2">{strategy.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{strategy.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className={getDifficultyColor(strategy.difficulty)}>
                  {strategy.difficulty} Difficulty
                </Badge>
                <Badge variant="outline" className="bg-gray-100 text-gray-700">
                  {strategy.timeframe}
                </Badge>
                <Badge variant="outline" className={getImpactColor(strategy.potentialImpact)}>
                  {strategy.potentialImpact} Impact
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="google-button flex mx-auto items-center justify-center">
            <span>Generate More Strategies</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrategyRecommendations;
