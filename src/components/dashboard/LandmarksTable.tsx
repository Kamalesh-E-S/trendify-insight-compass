
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Landmark {
  name: string;
  distance: number;
  [key: string]: any; // For additional properties like students, units, etc.
}

interface LandmarksTableProps {
  data: {
    schools: Landmark[];
    apartments: Landmark[];
    hostels: Landmark[];
    offices: Landmark[];
  };
}

const LandmarksTable: React.FC<LandmarksTableProps> = ({ data }) => {
  return (
    <Card className="google-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Nearby Landmarks</CardTitle>
        <CardDescription>Schools, apartments, and more in the vicinity</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="schools">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="schools">Schools</TabsTrigger>
            <TabsTrigger value="apartments">Apartments</TabsTrigger>
            <TabsTrigger value="hostels">Hostels</TabsTrigger>
            <TabsTrigger value="offices">Offices</TabsTrigger>
          </TabsList>
          
          <TabsContent value="schools">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Name</th>
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Distance (km)</th>
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Students</th>
                  </tr>
                </thead>
                <tbody>
                  {data.schools.map((school, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm">{school.name}</td>
                      <td className="py-3 px-4 text-sm">{school.distance}</td>
                      <td className="py-3 px-4 text-sm">{school.students}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="apartments">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Name</th>
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Distance (km)</th>
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Units</th>
                  </tr>
                </thead>
                <tbody>
                  {data.apartments.map((apartment, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm">{apartment.name}</td>
                      <td className="py-3 px-4 text-sm">{apartment.distance}</td>
                      <td className="py-3 px-4 text-sm">{apartment.units}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="hostels">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Name</th>
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Distance (km)</th>
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Beds</th>
                  </tr>
                </thead>
                <tbody>
                  {data.hostels.map((hostel, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm">{hostel.name}</td>
                      <td className="py-3 px-4 text-sm">{hostel.distance}</td>
                      <td className="py-3 px-4 text-sm">{hostel.beds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="offices">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Name</th>
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Distance (km)</th>
                    <th className="text-left py-2 px-4 text-sm font-medium text-gray-500">Companies</th>
                  </tr>
                </thead>
                <tbody>
                  {data.offices.map((office, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm">{office.name}</td>
                      <td className="py-3 px-4 text-sm">{office.distance}</td>
                      <td className="py-3 px-4 text-sm">{office.companies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LandmarksTable;
