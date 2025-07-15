import React, { useState } from 'react';
import { HistoricalDataPoint } from '../types';
import { formatDate, formatNumberWithCommas, formatPercentage } from '../utils/formatters';

interface HistoricalDataProps {
  data: HistoricalDataPoint[];
}

const HistoricalData: React.FC<HistoricalDataProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sortField, setSortField] = useState<keyof HistoricalDataPoint>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const displayData = isExpanded ? data : data.slice(0, 10);

  const handleSort = (field: keyof HistoricalDataPoint) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedData = [...displayData].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === 'date') {
      aValue = new Date(aValue as string).getTime();
      bValue = new Date(bValue as string).getTime();
    }

    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const SortIcon = ({ field }: { field: keyof HistoricalDataPoint }) => {
    if (sortField !== field) {
      return (
        <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      );
    }
    return sortDirection === 'asc' ? (
      <svg className="h-3 w-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 14l5-5 5 5z"/>
      </svg>
    ) : (
      <svg className="h-3 w-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Historical Stats</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center space-x-1">
                  <span>Date</span>
                  <SortIcon field="date" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('followers')}
              >
                <div className="flex items-center space-x-1">
                  <span>Followers Count</span>
                  <SortIcon field="followers" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('following')}
              >
                <div className="flex items-center space-x-1">
                  <span>Following Count</span>
                  <SortIcon field="following" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('posts')}
              >
                <div className="flex items-center space-x-1">
                  <span>Media Count</span>
                  <SortIcon field="posts" />
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('engagementRate')}
              >
                <div className="flex items-center space-x-1">
                  <span>Engagement Rate</span>
                  <SortIcon field="engagementRate" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(row.date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatNumberWithCommas(row.followers)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatNumberWithCommas(row.following)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatNumberWithCommas(row.posts)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatPercentage(row.engagementRate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {data.length > 10 && (
        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            {isExpanded ? (
              <>
                <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
                Show less
              </>
            ) : (
              <>
                <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
                Show all ({data.length} records)
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default HistoricalData;