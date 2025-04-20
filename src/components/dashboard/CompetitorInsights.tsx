
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface CompetitorInsightsProps {
  data: {
    nearby: {
      total: number;
      new: number;
      averageRating: number;
      reviewVolume: number;
      priceRange: string;
    };
    breakdown: {
      type: string;
      count: number;
    }[];
    reviewTrends: {
      month: string;
      reviews: number;
    }[];
  };
}

const CompetitorInsights: React.FC<CompetitorInsightsProps> = ({ data }) => {
  return (
    <Card className="google-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Competitor Insights</CardTitle>
        <CardDescription>Analysis of nearby business competitors</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-3xl font-semibold text-google-blue">{data.nearby.total}</div>
            <div className="text-sm text-gray-600">Nearby Competitors</div>
            <div className="text-xs text-google-green mt-1">+{data.nearby.new} new in last 3 months</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-3xl font-semibold text-google-yellow">{data.nearby.averageRating}</div>
            <div className="text-sm text-gray-600">Average Rating</div>
            <div className="text-xs text-gray-500 mt-1">From {data.nearby.reviewVolume} reviews</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-3xl font-semibold text-google-green">{data.nearby.priceRange}</div>
            <div className="text-sm text-gray-600">Price Range</div>
            <div className="text-xs text-gray-500 mt-1">Average competitor pricing</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Competitor Breakdown</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {data.breakdown.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-2 border rounded-md">
                <div className="text-xl font-semibold">{item.count}</div>
                <div className="text-xs text-gray-600">{item.type}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Review Volume Trends</h4>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data.reviewTrends}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={{ stroke: '#e0e0e0' }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                  tickLine={false}
                  axisLine={{ stroke: '#e0e0e0' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="reviews" 
                  stroke="#4285F4" 
                  activeDot={{ r: 8 }} 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetitorInsights;
