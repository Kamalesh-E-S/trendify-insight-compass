
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Essential market research for small businesses',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Business Category Trends',
        'Competitor Insights',
        'Landmark Mapping',
        '1 AI Strategy Session/month',
        'Download up to 3 reports/month',
        'Single user access',
      ],
      cta: 'Start Basic Plan',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'Advanced research for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'All Basic features',
        'Competitor Heatmap',
        'Advanced Strategy Recommendations',
        'Unlimited AI Strategy Sessions',
        'Download up to 10 reports/month',
        'Team access (up to 3 users)',
      ],
      cta: 'Start Pro Plan',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for established businesses',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'All Pro features',
        'Custom Data Integration',
        'Predictive Market Analysis',
        'Competitor Deep Dives',
        'Unlimited report downloads',
        'Unlimited team access',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your business needs
          </p>
          
          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="text-google-green text-xs">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`google-card relative overflow-hidden ${plan.popular ? 'ring-2 ring-google-blue' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-google-blue text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-google-green flex-shrink-0 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/register" className="w-full">
                  <Button
                    className={`w-full py-6 ${
                      plan.popular ? 'bg-google-blue hover:bg-blue-600' : 'google-button-secondary'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <div className="text-left">
              <h3 className="font-medium text-lg mb-2">Can I switch plans later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-lg mb-2">Do you offer a free trial?</h3>
              <p className="text-gray-600">
                Yes, all plans include a 14-day free trial so you can test our features before committing.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange direct bank transfers.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-lg mb-2">What if I need help with the platform?</h3>
              <p className="text-gray-600">
                All plans include access to our support team. Enterprise users get dedicated account managers and priority support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
