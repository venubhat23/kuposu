import React, { useState } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { AnalyticsData } from './types';
import { getUserAnalytics } from './services/mockData';

const App: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUserSelect = async (username: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await getUserAnalytics(username);
      if (data) {
        setAnalyticsData(data);
      } else {
        setError('User not found. Please try another username.');
      }
    } catch (err) {
      setError('An error occurred while fetching user data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Instagram Analytics Dashboard
          </h1>
          <p className="text-gray-600 mb-8">
            Search for any Instagram account to view detailed analytics and insights
          </p>
          
          <SearchBox onUserSelect={handleUserSelect} />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
            <p className="mt-4 text-gray-600">Loading analytics data...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-md p-4 max-w-md mx-auto">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        )}

        {/* Analytics Dashboard */}
        {analyticsData && !isLoading && (
          <AnalyticsDashboard data={analyticsData} />
        )}

        {/* Initial State */}
        {!analyticsData && !isLoading && !error && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm border p-8 max-w-md mx-auto">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Get Started
              </h2>
              <p className="text-gray-600 mb-4">
                Search for an Instagram account above to view detailed analytics including:
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li>• Follower growth trends</li>
                <li>• Engagement rate analysis</li>
                <li>• Historical performance data</li>
                <li>• Comprehensive metrics overview</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
