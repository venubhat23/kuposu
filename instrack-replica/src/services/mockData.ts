import { AnalyticsData, SearchResult, ChartDataPoint, HistoricalDataPoint } from '../types';

// Generate mock historical data for the last 30 days
const generateHistoricalData = (baseFollowers: number, baseFollowing: number, basePosts: number): HistoricalDataPoint[] => {
  const data: HistoricalDataPoint[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    const variation = Math.random() * 0.05 - 0.025; // ±2.5% variation
    const followers = Math.floor(baseFollowers * (1 + variation));
    const following = Math.floor(baseFollowing * (1 + variation * 0.5));
    const posts = Math.floor(basePosts + Math.random() * 3 - 1);
    const engagementRate = 4.0 + Math.random() * 2 - 1; // 3-5% range
    
    data.push({
      date: date.toLocaleDateString(),
      followers,
      following,
      posts,
      engagementRate: Math.round(engagementRate * 100) / 100
    });
  }
  
  return data;
};

// Generate chart data from historical data
const generateChartData = (historicalData: HistoricalDataPoint[]): {
  followersHistory: ChartDataPoint[];
  followingHistory: ChartDataPoint[];
  engagementHistory: ChartDataPoint[];
  avgLikesHistory: ChartDataPoint[];
} => {
  return {
    followersHistory: historicalData.map(d => ({
      date: d.date,
      value: d.followers
    })),
    followingHistory: historicalData.map(d => ({
      date: d.date,
      value: d.following
    })),
    engagementHistory: historicalData.map(d => ({
      date: d.date,
      value: d.engagementRate
    })),
    avgLikesHistory: historicalData.map(d => ({
      date: d.date,
      value: Math.floor(d.followers * d.engagementRate / 100)
    }))
  };
};

// Mock user data
export const mockUsers: { [key: string]: AnalyticsData } = {
  'virat.kohli': {
    user: {
      id: '1',
      username: 'virat.kohli',
      displayName: 'Virat Kohli',
      profilePicture: 'https://via.placeholder.com/150',
      followers: 273949045,
      following: 260,
      posts: 1036,
      engagementRate: 4.14,
      isVerified: true,
      bio: 'Verified',
      website: 'http://ITOL.com',
      location: 'India'
    },
    metrics: {
      followerGrowth: 1.04,
      weeklyFollowers: -53653,
      avgLikes: 11022461,
      avgComments: 323928,
      totalLikes: 978389500,
      totalComments: 2940000,
      commentsRate: 2.94
    },
    charts: generateChartData(generateHistoricalData(273949045, 260, 1036)),
    historicalData: generateHistoricalData(273949045, 260, 1036)
  },
  'cristiano': {
    user: {
      id: '2',
      username: 'cristiano',
      displayName: 'Cristiano Ronaldo',
      profilePicture: 'https://via.placeholder.com/150',
      followers: 638000000,
      following: 580,
      posts: 3200,
      engagementRate: 3.8,
      isVerified: true,
      bio: 'Football Player',
      website: 'http://cristianoronaldo.com',
      location: 'Portugal'
    },
    metrics: {
      followerGrowth: 0.8,
      weeklyFollowers: -25000,
      avgLikes: 24244000,
      avgComments: 121600,
      totalLikes: 77581000,
      totalComments: 389120,
      commentsRate: 1.85
    },
    charts: generateChartData(generateHistoricalData(638000000, 580, 3200)),
    historicalData: generateHistoricalData(638000000, 580, 3200)
  },
  'therock': {
    user: {
      id: '3',
      username: 'therock',
      displayName: 'Dwayne Johnson',
      profilePicture: 'https://via.placeholder.com/150',
      followers: 396000000,
      following: 30,
      posts: 7800,
      engagementRate: 4.2,
      isVerified: true,
      bio: 'CEO of @projectrock',
      website: 'http://projectrock.com',
      location: 'USA'
    },
    metrics: {
      followerGrowth: 1.2,
      weeklyFollowers: 45000,
      avgLikes: 16632000,
      avgComments: 327600,
      totalLikes: 129729600,
      totalComments: 2555280,
      commentsRate: 4.2
    },
    charts: generateChartData(generateHistoricalData(396000000, 30, 7800)),
    historicalData: generateHistoricalData(396000000, 30, 7800)
  },
  'selenagomez': {
    user: {
      id: '4',
      username: 'selenagomez',
      displayName: 'Selena Gomez',
      profilePicture: 'https://via.placeholder.com/150',
      followers: 429000000,
      following: 245,
      posts: 1950,
      engagementRate: 5.1,
      isVerified: true,
      bio: 'Artist. Rare Beauty',
      website: 'http://rarebeauty.com',
      location: 'USA'
    },
    metrics: {
      followerGrowth: 1.5,
      weeklyFollowers: 65000,
      avgLikes: 21879000,
      avgComments: 436950,
      totalLikes: 42664050,
      totalComments: 852052,
      commentsRate: 5.1
    },
    charts: generateChartData(generateHistoricalData(429000000, 245, 1950)),
    historicalData: generateHistoricalData(429000000, 245, 1950)
  }
};

// Mock search results
export const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    username: 'virat.kohli',
    displayName: 'Virat Kohli',
    profilePicture: 'https://via.placeholder.com/150',
    followers: 273949045,
    isVerified: true
  },
  {
    id: '2',
    username: 'cristiano',
    displayName: 'Cristiano Ronaldo',
    profilePicture: 'https://via.placeholder.com/150',
    followers: 638000000,
    isVerified: true
  },
  {
    id: '3',
    username: 'therock',
    displayName: 'Dwayne Johnson',
    profilePicture: 'https://via.placeholder.com/150',
    followers: 396000000,
    isVerified: true
  },
  {
    id: '4',
    username: 'selenagomez',
    displayName: 'Selena Gomez',
    profilePicture: 'https://via.placeholder.com/150',
    followers: 429000000,
    isVerified: true
  },
  {
    id: '5',
    username: 'kyliejenner',
    displayName: 'Kylie Jenner',
    profilePicture: 'https://via.placeholder.com/150',
    followers: 400000000,
    isVerified: true
  }
];

// Mock API service
export const searchUsers = (query: string): Promise<SearchResult[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = mockSearchResults.filter(user => 
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.displayName.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 500);
  });
};

export const getUserAnalytics = (username: string): Promise<AnalyticsData | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = mockUsers[username];
      resolve(userData || null);
    }, 800);
  });
};