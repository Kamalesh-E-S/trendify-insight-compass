
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface HeatmapPoint {
  lat: number;
  lng: number;
  weight: number;
}

interface GoogleMapsHeatmapProps {
  data: HeatmapPoint[];
}

const GoogleMapsHeatmap: React.FC<GoogleMapsHeatmapProps> = ({ data }) => {
  return (
    <Card className="google-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Competitor Density Heatmap</CardTitle>
        <CardDescription>Business concentration in 1-3km radius</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden">
          {/* In a real implementation, this would use the Google Maps JavaScript API */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-gray-500 mb-2">Google Maps Integration</div>
            <div className="text-sm text-gray-400">Heatmap would display {data.length} competitor locations</div>
            <div className="mt-4 grid grid-cols-5 gap-1">
              {data.map((point, index) => (
                <div 
                  key={index}
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: `rgba(234, 67, 53, ${point.weight / 10})`,
                    transform: `scale(${point.weight / 10})`
                  }}
                ></div>
              ))}
            </div>
            <div className="mt-8 text-xs text-gray-400">
              In the actual implementation, this would display a Google Maps interface with a heatmap overlay
              showing the density of competitors in the selected area.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleMapsHeatmap;
