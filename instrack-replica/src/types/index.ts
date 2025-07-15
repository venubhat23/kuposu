export interface InstagramUser {
  id: string;
  username: string;
  displayName: string;
  profilePicture: string;
  followers: number;
  following: number;
  posts: number;
  engagementRate: number;
  isVerified: boolean;
  bio: string;
  website: string;
  location: string;
}

export interface AnalyticsData {
  user: InstagramUser;
  metrics: {
    followerGrowth: number;
    weeklyFollowers: number;
    avgLikes: number;
    avgComments: number;
    totalLikes: number;
    totalComments: number;
    commentsRate: number;
  };
  charts: {
    followersHistory: ChartDataPoint[];
    followingHistory: ChartDataPoint[];
    engagementHistory: ChartDataPoint[];
    avgLikesHistory: ChartDataPoint[];
  };
  historicalData: HistoricalDataPoint[];
}

export interface ChartDataPoint {
  date: string;
  value: number;
}

export interface HistoricalDataPoint {
  date: string;
  followers: number;
  following: number;
  posts: number;
  engagementRate: number;
}

export interface SearchResult {
  id: string;
  username: string;
  displayName: string;
  profilePicture: string;
  followers: number;
  isVerified: boolean;
}