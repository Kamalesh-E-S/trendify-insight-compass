
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: 'Amit Patel',
      role: 'CEO & Founder',
      bio: 'Former Google data scientist with 10+ years experience in AI and market research.',
      image: 'https://picsum.photos/id/1005/300/300',
      links: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      bio: 'AI specialist with a PhD in Machine Learning from IIT Delhi. Led development at two successful startups.',
      image: 'https://picsum.photos/id/1011/300/300',
      links: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      name: 'Suresh Kumar',
      role: 'Head of Data Science',
      bio: 'Data scientist with expertise in geographic data systems and competitor analysis.',
      image: 'https://picsum.photos/id/1012/300/300',
      links: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      name: 'Deepa Menon',
      role: 'VP of Product',
      bio: 'Product leader with experience at top tech companies. Passionate about user-first design.',
      image: 'https://picsum.photos/id/1027/300/300',
      links: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      name: 'Rahul Gupta',
      role: 'Lead Engineer',
      bio: 'Full-stack developer specializing in scalable cloud architecture and real-time data processing.',
      image: 'https://picsum.photos/id/1025/300/300',
      links: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      name: 'Aisha Kapoor',
      role: 'UI/UX Designer',
      bio: 'Designer with a passion for creating intuitive interfaces that help users understand complex data.',
      image: 'https://picsum.photos/id/1014/300/300',
      links: {
        linkedin: '#',
        twitter: '#',
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-600">
            Meet the people behind TrendInsight
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="google-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-google-blue font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </CardContent>
              <CardFooter className="flex justify-start space-x-4">
                <a href={member.links.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a href={member.links.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-lg shadow-card max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Join Our Team</h2>
            <p className="text-gray-600">
              We're always looking for talented individuals to join our mission of making market research accessible and actionable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg mb-2">Senior Data Scientist</h3>
              <p className="text-gray-600 mb-4">
                Help us build the next generation of market prediction algorithms.
              </p>
              <span className="text-xs bg-blue-100 text-google-blue px-2 py-1 rounded-full">
                Full-time
              </span>
              <a href="#" className="block mt-4 text-google-blue hover:underline">
                View Job Details
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg mb-2">Frontend Developer</h3>
              <p className="text-gray-600 mb-4">
                Create beautiful, intuitive interfaces for our data visualization tools.
              </p>
              <span className="text-xs bg-blue-100 text-google-blue px-2 py-1 rounded-full">
                Full-time
              </span>
              <a href="#" className="block mt-4 text-google-blue hover:underline">
                View Job Details
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg mb-2">Sales Representative</h3>
              <p className="text-gray-600 mb-4">
                Help businesses discover the power of AI-driven market research.
              </p>
              <span className="text-xs bg-blue-100 text-google-blue px-2 py-1 rounded-full">
                Full-time
              </span>
              <a href="#" className="block mt-4 text-google-blue hover:underline">
                View Job Details
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-lg mb-2">Content Writer</h3>
              <p className="text-gray-600 mb-4">
                Create insightful market research content and documentation.
              </p>
              <span className="text-xs bg-blue-100 text-google-blue px-2 py-1 rounded-full">
                Part-time
              </span>
              <a href="#" className="block mt-4 text-google-blue hover:underline">
                View Job Details
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#" className="google-button inline-block py-2">
              View All Open Positions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
