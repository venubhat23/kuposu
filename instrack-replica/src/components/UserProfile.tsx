import React from 'react';
import { InstagramUser } from '../types';
import { formatNumber } from '../utils/formatters';

interface UserProfileProps {
  user: InstagramUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-start space-x-4">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={user.profilePicture}
            alt={user.username}
            className="w-20 h-20 rounded-full"
          />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h2 className="text-xl font-semibold text-gray-900">
              {user.username}
            </h2>
            {user.isVerified && (
              <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            )}
          </div>
          
          <p className="text-gray-600 mb-2">{user.displayName}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{user.location}</span>
            {user.website && (
              <a 
                href={user.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {user.website.replace('http://', '').replace('https://', '')}
              </a>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
            <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            Add to Favorites
          </button>
          <button className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm">
            Last 30 Days
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {formatNumber(user.followers)}
          </div>
          <div className="text-sm text-gray-500">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {formatNumber(user.following)}
          </div>
          <div className="text-sm text-gray-500">Following</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {formatNumber(user.posts)}
          </div>
          <div className="text-sm text-gray-500">Posts</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;