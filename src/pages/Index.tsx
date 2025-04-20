
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ArrowRight, Check } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: 'Market Analysis',
      description: 'AI-powered insights into market trends and opportunities',
      image: 'https://picsum.photos/id/1005/300/300',
    },
    {
      title: 'Competitor Tracking',
      description: 'Monitor and analyze your competition in real-time',
      image: 'https://picsum.photos/id/1011/300/300',
    },
    {
      title: 'Location Intelligence',
      description: 'Make data-driven decisions with geographic insights',
      image: 'https://picsum.photos/id/1012/300/300',
    },
  ];

  const benefits = [
    'AI-Powered Market Research',
    'Real-time Competitor Analysis',
    'Location-based Insights',
    'Multilingual Reports',
    'Strategic Recommendations',
    'Simple Data Visualization',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pastel-blue via-pastel-purple to-pastel-pink py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              AI-Powered Market Research
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Make data-driven business decisions with our advanced market research platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="google-button text-lg py-6 hover-scale">
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/why-us">
                <Button variant="outline" className="google-button-secondary text-lg py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pastel-gray/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <Card className="google-card hover-scale h-full cursor-pointer">
                    <div className="h-48 overflow-hidden rounded-xl mb-4">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader className="space-y-1">
                      <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn more about how {feature.title.toLowerCase()} can help your business grow.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-pastel-green/30 to-pastel-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Why Choose TrendInsight?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 glass-card p-4 hover-scale"
                >
                  <Check className="text-pastel-green flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pastel-blue via-pastel-purple to-pastel-pink">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Join thousands of businesses making data-driven decisions
          </p>
          <Link to="/pricing">
            <Button variant="outline" className="glass-card text-gray-800 hover:bg-white/80 text-lg py-6 hover-scale">
              View Pricing
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
