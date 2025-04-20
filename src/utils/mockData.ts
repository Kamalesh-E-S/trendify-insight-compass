
// Business Category Trends
export const categoryTrendsData = {
  topCategories: [
    { category: "Coffee Shops", count: 85, growth: 12 },
    { category: "Fitness Studios", count: 72, growth: 8 },
    { category: "Food Trucks", count: 68, growth: 15 },
    { category: "Tech Repair", count: 62, growth: 5 },
    { category: "Pet Services", count: 54, growth: 10 }
  ],
  leastCategories: [
    { category: "Bookstores", count: 12, growth: -5 },
    { category: "DVD Rentals", count: 8, growth: -18 },
    { category: "Print Shops", count: 15, growth: -8 },
    { category: "Travel Agencies", count: 18, growth: -12 },
    { category: "Phone Booths", count: 3, growth: -25 }
  ]
};

// Competitor Data
export const competitorData = {
  nearby: {
    total: 24,
    new: 3,
    averageRating: 4.2,
    reviewVolume: 856,
    priceRange: "$$ - $$$",
  },
  breakdown: [
    { type: "Cafes", count: 8 },
    { type: "Restaurants", count: 10 },
    { type: "Fast Food", count: 4 },
    { type: "Bakeries", count: 2 }
  ],
  reviewTrends: [
    { month: "Jan", reviews: 42 },
    { month: "Feb", reviews: 38 },
    { month: "Mar", reviews: 45 },
    { month: "Apr", reviews: 56 },
    { month: "May", reviews: 62 },
    { month: "Jun", reviews: 58 }
  ]
};

// Landmarks Data
export const landmarksData = {
  schools: [
    { name: "Westside High School", distance: 0.7, students: 1200 },
    { name: "Springfield Elementary", distance: 1.2, students: 650 },
    { name: "Tech Institute", distance: 1.8, students: 2200 }
  ],
  apartments: [
    { name: "Sunset Residences", distance: 0.4, units: 120 },
    { name: "Urban Heights", distance: 0.9, units: 85 },
    { name: "Parkview Apartments", distance: 1.3, units: 150 },
    { name: "Lakeview Condos", distance: 1.7, units: 95 }
  ],
  hostels: [
    { name: "Backpackers Lodge", distance: 1.1, beds: 56 },
    { name: "City Central Hostel", distance: 1.5, beds: 72 }
  ],
  offices: [
    { name: "Tech Plaza", distance: 0.5, companies: 12 },
    { name: "Business Center", distance: 1.2, companies: 25 },
    { name: "Innovation Hub", distance: 1.6, companies: 18 }
  ]
};

// Strategy Recommendations
export const strategyRecommendations = [
  {
    id: 1,
    title: "Differentiate with Unique Menu Items",
    description: "Based on competitor analysis, local cafes lack specialty drinks. Consider adding 4-5 signature beverages that can't be found elsewhere.",
    difficulty: "Medium",
    timeframe: "1-3 months",
    potentialImpact: "High"
  },
  {
    id: 2,
    title: "Target School Rush Hours",
    description: "With 3 schools within 2km, create special discounts for students during after-school hours (3-5pm) to capture this underserved market.",
    difficulty: "Low",
    timeframe: "Immediate",
    potentialImpact: "Medium"
  },
  {
    id: 3,
    title: "Weekend Brunch Experience",
    description: "Competitor analysis shows limited weekend brunch options. Design a special weekend menu with 1-2 Instagram-worthy dishes.",
    difficulty: "Medium",
    timeframe: "1 month",
    potentialImpact: "High"
  },
  {
    id: 4,
    title: "Loyalty Program Integration",
    description: "Only 3 of 24 competitors have digital loyalty programs. Implement a simple digital punch card system to encourage repeat visits.",
    difficulty: "Medium",
    timeframe: "2-3 months",
    potentialImpact: "High"
  },
];

// Heatmap mock data (simplified coordinates for demonstration)
export const heatmapData = [
  { lat: 37.775, lng: -122.434, weight: 10 }, // High competitor density
  { lat: 37.775, lng: -122.437, weight: 8 },
  { lat: 37.773, lng: -122.435, weight: 7 },
  { lat: 37.772, lng: -122.433, weight: 9 },
  { lat: 37.774, lng: -122.431, weight: 6 },
  { lat: 37.772, lng: -122.439, weight: 5 },
  { lat: 37.776, lng: -122.436, weight: 8 },
  { lat: 37.778, lng: -122.432, weight: 4 },
  { lat: 37.771, lng: -122.438, weight: 3 },
  { lat: 37.773, lng: -122.440, weight: 5 },
  { lat: 37.777, lng: -122.438, weight: 7 },
  { lat: 37.776, lng: -122.433, weight: 6 },
  { lat: 37.774, lng: -122.437, weight: 8 },
  { lat: 37.779, lng: -122.435, weight: 3 },
  { lat: 37.777, lng: -122.431, weight: 4 },
];
