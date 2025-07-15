import React from 'react';
import { AnalyticsData } from '../types';
import { formatNumber } from '../utils/formatters';

interface MetricsCardsProps {
  data: AnalyticsData;
}

const MetricsCards: React.FC<MetricsCardsProps> = ({ data }) => {
  const { user, metrics } = data;

  const UsersIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  );

  const HeartIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );

  const CommentsIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
    </svg>
  );

  const cards = [
    {
      title: 'Followers Growth Rate (90 Days)',
      value: `${metrics.followerGrowth.toFixed(2)}%`,
      icon: UsersIcon,
      color: 'green',
      isPositive: metrics.followerGrowth >= 0
    },
    {
      title: 'Weekly Followers',
      value: `${metrics.weeklyFollowers.toLocaleString()}`,
      icon: UsersIcon,
      color: metrics.weeklyFollowers >= 0 ? 'green' : 'red',
      isPositive: metrics.weeklyFollowers >= 0
    },
    {
      title: 'Engagement Rate',
      value: `${user.engagementRate.toFixed(2)}%`,
      icon: HeartIcon,
      color: 'blue',
      isPositive: user.engagementRate > 3
    },
    {
      title: 'Average Likes',
      value: formatNumber(metrics.avgLikes),
      icon: HeartIcon,
      color: 'red',
      isPositive: true
    },
    {
      title: 'Average Comments',
      value: formatNumber(metrics.avgComments),
      icon: CommentsIcon,
      color: 'purple',
      isPositive: true
    },
    {
      title: 'Comments Rate',
      value: `${metrics.commentsRate.toFixed(2)}%`,
      icon: CommentsIcon,
      color: 'indigo',
      isPositive: metrics.commentsRate > 2
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-50 text-green-600';
      case 'red':
        return 'bg-red-50 text-red-600';
      case 'blue':
        return 'bg-blue-50 text-blue-600';
      case 'purple':
        return 'bg-purple-50 text-purple-600';
      case 'indigo':
        return 'bg-indigo-50 text-indigo-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${getColorClasses(card.color)}`}>
              <card.icon />
            </div>
            <div className="flex items-center text-sm">
              {card.isPositive ? (
                <svg className="h-3 w-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l3-3 3 3 7-7v4h-2V9.41l-5 5-3-3-3 3H4v-2z"/>
                </svg>
              ) : (
                <svg className="h-3 w-3 text-red-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l3 3 3-3 7 7v-4h2v4.59l-5-5-3 3-3-3H4v2z"/>
                </svg>
              )}
              <span className={card.isPositive ? 'text-green-500' : 'text-red-500'}>
                {card.isPositive ? '+' : '-'}
              </span>
            </div>
          </div>
          
          <div className="mb-2">
            <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
          </div>
          
          <div className="text-2xl font-bold text-gray-900">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;