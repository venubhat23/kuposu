// Format large numbers (e.g., 1,234,567 -> 1.23M)
export const formatNumber = (num: number): string => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// Format numbers with commas (e.g., 1234567 -> 1,234,567)
export const formatNumberWithCommas = (num: number): string => {
  return num.toLocaleString();
};

// Format percentage (e.g., 0.1234 -> 12.34%)
export const formatPercentage = (num: number): string => {
  return `${num.toFixed(2)}%`;
};

// Format date to MM/DD/YYYY
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US');
};

// Format date for display in charts
export const formatChartDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
};

// Format growth numbers with + or - prefix
export const formatGrowth = (num: number): string => {
  const prefix = num >= 0 ? '+' : '';
  return `${prefix}${formatNumber(num)}`;
};

// Format growth percentage with + or - prefix and color class
export const formatGrowthPercentage = (num: number): { text: string; colorClass: string } => {
  const prefix = num >= 0 ? '+' : '';
  const text = `${prefix}${num.toFixed(2)}%`;
  const colorClass = num >= 0 ? 'text-green-500' : 'text-red-500';
  
  return { text, colorClass };
};