
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CategoryData {
  category: string;
  count: number;
  growth: number;
}

interface CategoryTrendsChartProps {
  data: CategoryData[];
  title: string;
  description: string;
}

const CategoryTrendsChart: React.FC<CategoryTrendsChartProps> = ({ 
  data, 
  title, 
  description 
}) => {
  // Format data for the chart
  const formattedData = data.map(item => ({
    name: item.category,
    Count: item.count,
    Growth: item.growth
  }));

  return (
    <Card className="google-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={formattedData}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
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
              <Legend wrapperStyle={{ paddingTop: 10 }} />
              <Bar 
                dataKey="Count" 
                fill="#4285F4" 
                radius={[4, 4, 0, 0]}
                barSize={25}
              />
              <Bar 
                dataKey="Growth" 
                fill="#34A853" 
                radius={[4, 4, 0, 0]}
                barSize={25}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryTrendsChart;
