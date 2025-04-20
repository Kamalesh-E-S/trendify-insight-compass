
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: 'Q2 2023',
      title: 'Foundation',
      description: 'Launch of core platform features',
      completed: true,
      features: [
        'Business Category Trends Analysis',
        'Competitor Insights Dashboard',
        'Basic Landmark Mapping',
        'English Reports',
      ],
    },
    {
      quarter: 'Q3 2023',
      title: 'Expansion',
      description: 'Enhanced analysis capabilities',
      completed: true,
      features: [
        'Google Maps Heatmap Integration',
        'AI Strategy Generator',
        'Multi-language Support (Hindi, Tamil)',
        'Report Download Functionality',
      ],
    },
    {
      quarter: 'Q1 2024',
      title: 'Advanced Insights',
      description: 'Deep analytics and predictive features',
      completed: true,
      features: [
        'Predictive Trend Analysis',
        'Custom Data Import',
        'Advanced Filtering Options',
        'Team Collaboration Features',
      ],
    },
    {
      quarter: 'Q2 2024',
      title: 'Current Release',
      description: 'Enhanced user experience and integrations',
      completed: false,
      inProgress: true,
      features: [
        'Redesigned User Interface',
        'Mobile Application Launch',
        'Enhanced Report Generation',
        'API Access for Developers',
      ],
    },
    {
      quarter: 'Q3 2024',
      title: 'Coming Soon',
      description: 'Next-generation market analysis',
      completed: false,
      features: [
        'Real-time Market Monitoring',
        'Sentiment Analysis Integration',
        'Competitor Social Media Analysis',
        'Enhanced AI Recommendations',
      ],
    },
    {
      quarter: 'Q4 2024',
      title: 'Future Plans',
      description: 'Data expansion and ecosystem growth',
      completed: false,
      features: [
        'Global Market Data Expansion',
        'Industry-specific Analysis Templates',
        'Investment Opportunity Finder',
        'Business Plan Generator',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Product Roadmap</h1>
          <p className="text-xl text-gray-600">
            See where we've been and where we're headed
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line that connects the cards */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

          {roadmapItems.map((item, index) => (
            <div 
              key={index}
              className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:self-end md:ml-auto' : 'md:pl-8 md:text-left md:self-start md:mr-auto'}`}
            >
              {/* Timeline marker */}
              <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white z-10 shadow-sm
                  ${item.completed 
                    ? 'bg-google-green' 
                    : item.inProgress 
                      ? 'bg-google-blue' 
                      : 'bg-gray-300'}"
                >
              </div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:float-left' : 'md:float-right'}`}>
                <Card className={`google-card ${
                  item.completed 
                    ? 'border-l-4 border-l-google-green' 
                    : item.inProgress 
                      ? 'border-l-4 border-l-google-blue animate-pulse-slow' 
                      : ''
                }`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        item.completed ? 'text-google-green' : 
                        item.inProgress ? 'text-google-blue' : 'text-gray-500'
                      }`}>
                        {item.quarter}
                      </span>
                      {item.completed && (
                        <span className="text-xs bg-green-100 text-google-green px-2 py-1 rounded-full">
                          Completed
                        </span>
                      )}
                      {item.inProgress && (
                        <span className="text-xs bg-blue-100 text-google-blue px-2 py-1 rounded-full">
                          In Progress
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="clear-both"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Have Feature Suggestions?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking to improve. If you have ideas for features that would help your business, let us know!
          </p>
          <button className="google-button py-6 px-8">
            Submit Feature Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
