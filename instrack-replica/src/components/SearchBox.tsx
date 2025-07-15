import React, { useState, useEffect, useRef } from 'react';
import { SearchResult } from '../types';
import { searchUsers } from '../services/mockData';
import { formatNumber } from '../utils/formatters';

interface SearchBoxProps {
  onUserSelect: (username: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onUserSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      searchUsers(query).then((searchResults) => {
        setResults(searchResults);
        setIsLoading(false);
        setIsOpen(true);
      });
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleUserSelect = (username: string) => {
    setQuery(username);
    setIsOpen(false);
    onUserSelect(username);
  };

  return (
    <div className="relative w-full max-w-md mx-auto" ref={dropdownRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Instagram accounts..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {isLoading ? (
            <div className="px-4 py-2 text-sm text-gray-500">
              Loading...
            </div>
          ) : results.length > 0 ? (
            results.map((user) => (
              <div
                key={user.id}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                onClick={() => handleUserSelect(user.username)}
              >
                <div className="flex items-center">
                  <img
                    src={user.profilePicture}
                    alt={user.username}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">
                        {user.username}
                      </span>
                      {user.isVerified && (
                        <svg className="ml-1 h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {user.displayName} • {formatNumber(user.followers)} followers
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;