# Backend Setup Instructions

## Part 1: Initial Setup Commands

### Create the project structure
```bash
# Create root folder and navigate into it
mkdir ev-monitoring-dashboard
cd ev-monitoring-dashboard

# Create frontend (if using create-react-app separately)
npx create-react-app frontend

# Create and setup backend
mkdir backend
cd backend
npm init -y
npm install express cors
```

## Part 2: Backend Code

Create the file `/backend/server.js` with the following content:

```javascript
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS for React frontend (port 3000)
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET'],
  credentials: true
}));

app.use(express.json());

// Mock Data - EV Device Information
const devices = [
  {
    deviceId: "A02130825",
    name: "Battery Pack 01",
    status: "active",
    temperature: 32,
    voltage: 48.5
  },
  {
    deviceId: "A02130826",
    name: "Battery Pack 02",
    status: "warning",
    temperature: 44,
    voltage: 47.9
  },
  {
    deviceId: "A02130827",
    name: "Battery Pack 03",
    status: "offline",
    temperature: null,
    voltage: null
  }
];

// GET endpoint: /api/devices
// Supports optional query parameter: ?status=active|warning|offline
app.get('/api/devices', (req, res) => {
  const { status } = req.query;
  
  let data = devices;
  
  // Filter by status if query parameter is provided
  if (status) {
    data = data.filter(device => device.status === status);
  }
  
  res.json(data);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'EV Device API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚗 EV Device API server running on http://localhost:${PORT}`);
  console.log(`📡 Endpoints available:`);
  console.log(`   GET /api/devices - Get all devices`);
  console.log(`   GET /api/devices?status=active - Filter by status`);
});
```

## Running the Backend

```bash
cd backend
node server.js
```

The server will start on `http://localhost:3001`

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/devices` | Returns all devices |
| `GET /api/devices?status=active` | Returns only active devices |
| `GET /api/devices?status=warning` | Returns only warning devices |
| `GET /api/devices?status=offline` | Returns only offline devices |
| `GET /health` | Health check endpoint |

## Part 3: Frontend Tailwind Setup (for create-react-app)

If using create-react-app, run these commands in the `/frontend` folder:

```bash
cd frontend
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

