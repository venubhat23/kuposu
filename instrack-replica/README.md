# InsTrack Replica - Instagram Analytics Dashboard

A React-based replica of the InsTrack Instagram analytics platform that provides comprehensive insights into Instagram account performance.

## Features

- **User Search**: Search for Instagram accounts with real-time dropdown suggestions
- **Analytics Dashboard**: Comprehensive analytics including:
  - Follower growth rate and trends
  - Engagement rate analysis
  - Historical performance data
  - Average likes and comments metrics
  - Interactive charts and visualizations

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: React Icons
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd instrack-replica
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Search for Users**: Use the search box to find Instagram accounts. Try searching for:
   - `virat.kohli`
   - `cristiano`
   - `therock`
   - `selenagomez`

2. **View Analytics**: Select a user from the dropdown to view their complete analytics dashboard

3. **Explore Data**: Browse through various metrics, charts, and historical data

## Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── SearchBox.tsx           # Search functionality with dropdown
│   ├── UserProfile.tsx         # User profile display
│   ├── MetricsCards.tsx        # Analytics metrics cards
│   ├── Chart.tsx               # Chart component using Chart.js
│   ├── HistoricalData.tsx      # Historical data table
│   └── AnalyticsDashboard.tsx  # Main dashboard component
├── services/
│   └── mockData.ts             # Mock data service
├── types/
│   └── index.ts                # TypeScript type definitions
├── utils/
│   └── formatters.ts           # Utility functions for formatting
└── App.tsx                     # Main application component
```

## Mock Data

The application uses mock data to simulate Instagram analytics. The mock data includes:

- User profiles with follower counts, engagement rates, and verification status
- Historical data for the last 30 days
- Chart data for various metrics
- Realistic growth patterns and engagement statistics

## Key Components

### SearchBox
- Real-time search with debouncing
- Dropdown with user suggestions
- Profile pictures and verification badges

### MetricsCards
- Key performance indicators
- Color-coded growth indicators
- Responsive grid layout

### Chart Component
- Interactive line charts
- Hover tooltips with formatted data
- Responsive design

### HistoricalData
- Sortable data table
- Expandable view for all records
- Formatted numbers and dates

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Customization

### Adding New Users
To add new mock users, edit `src/services/mockData.ts` and add entries to the `mockUsers` object.

### Styling
The application uses Tailwind CSS. You can customize the styling by modifying the Tailwind classes in the components.

### Charts
Chart configurations can be modified in the `Chart.tsx` component and the `AnalyticsDashboard.tsx` component.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational purposes and is a replica of the InsTrack application interface.

## Disclaimer

This is a demonstration project with mock data. It does not connect to Instagram's actual API and does not collect real user data. The data displayed is simulated for demonstration purposes only.
