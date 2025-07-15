import React from 'react';
import { AnalyticsData } from '../types';
import UserProfile from './UserProfile';
import MetricsCards from './MetricsCards';
import Chart from './Chart';
import HistoricalData from './HistoricalData';

interface AnalyticsDashboardProps {
  data: AnalyticsData;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ data }) => {
  const chartConfigs = [
    {
      title: 'Followers',
      data: data.charts.followersHistory,
      color: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      yAxisLabel: 'Followers'
    },
    {
      title: 'Following',
      data: data.charts.followingHistory,
      color: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      yAxisLabel: 'Following'
    },
    {
      title: 'Engagement Rate',
      data: data.charts.engagementHistory,
      color: '#f59e0b',
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      yAxisLabel: 'Engagement Rate (%)'
    },
    {
      title: 'Average Likes',
      data: data.charts.avgLikesHistory,
      color: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      yAxisLabel: 'Average Likes'
    }
  ];

  return (
    <div className="space-y-8">
      {/* User Profile */}
      <UserProfile user={data.user} />
      
      {/* Metrics Cards */}
      <MetricsCards data={data} />
      
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {chartConfigs.map((config, index) => (
          <Chart
            key={index}
            title={config.title}
            data={config.data}
            color={config.color}
            backgroundColor={config.backgroundColor}
            yAxisLabel={config.yAxisLabel}
          />
        ))}
      </div>
      
      {/* Historical Data Table */}
      <HistoricalData data={data.historicalData} />
    </div>
  );
};

export default AnalyticsDashboard;