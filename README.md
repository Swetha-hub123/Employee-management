# Employee-management
Employee Management System is a full-stack web application to manage and monitor electric vehicle devices. It provides a centralized interface for tracking device status, managing device information, and monitoring performance. The frontend uses React + TypeScript + Tailwind CSS, providing a modern, responsive UI. The backend is built with Node.js + Express, serving RESTful APIs for CRUD operations and device data management.

Project Structure :

ev-monitor/
├─ backend/
│   ├─ src/server.ts
│   ├─ package.json
│   └─ tsconfig.json
├─ frontend/
│   ├─ src/
│   │   ├─ main.tsx
│   │   ├─ App.tsx
│   │   └─ hooks/useDevices.ts
│   ├─ package.json
│   └─ tsconfig.json
├─ .gitignore
├─ README.md
├─ tailwind.config.ts
├─ vite.config.ts
└─ components.json

* Explanation:

1)backend/ → Node.js + Express backend with TypeScript
2)frontend/ → React + TypeScript + Tailwind frontend
3)components.json → Tracks enabled UI components (navbar, sidebar, cards)
4)3tailwind.config.ts → Tailwind configuration
5)vite.config.ts → Vite configuration for frontend

* Features

1. Device Management

Add, view, update, and delete EV devices

Supports both mock data and real backend API


2. Dashboard UI

Displays device cards with status

Responsive layout using Tailwind CSS


3. API Integration

Frontend communicates with backend via /api/devices endpoint

Backend returns JSON arrays of device data


4. Scalable Structure

Clear separation of frontend and backend

Easy to extend with authentication, analytics, or additional features

Frontend Details

Tech Stack: React + TypeScript + Tailwind CSS

Data Fetching: src/hooks/useDevices.ts handles API calls

Mock Data: By default, mock data is used for preview

Real Backend: Toggle by setting:


const USE_REAL_API = true;

Components: Navbar, Sidebar, Device Cards

Responsive Design: Optimized for desktop and mobile


Backend Details

Tech Stack: Node.js + Express + TypeScript

API Endpoint: /api/devices

Sample JSON Response:


[
  { "id": 1, "name": "Device A", "status": "active" },
  { "id": 2, "name": "Device B", "status": "inactive" }
]

CORS Enabled: Allows frontend to fetch data

Server Port: Configurable via process.env.PORT (default 3001)


step-by-Step Setup Instructions

1. Backend Setup

1. Navigate to project root and create backend folder:

mkdir backend && cd backend

2. Initialize Node.js project:

npm init -y

3. Install required packages:

npm install express cors dotenv
npm install -D typescript ts-node nodemon @types/node @types/express

4. Initialize TypeScript configuration:

npx tsc --init

5. Create src/server.ts with API endpoints (see backend details above).

6. Update package.json scripts:

"scripts": {
  "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}

7. (Optional) Create BACKEND_SETUP.md with instructions for future reference.

2. Frontend Setup

1. Navigate to project root and create frontend folder:

mkdir frontend && cd frontend

2. Create React + TypeScript project using Vite:

npm create vite@latest . -- --template react-ts

3. Install dependencies:

npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

4. Configure tailwind.config.ts to include all .tsx files:

import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: []
});

5. Set up global styles in src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

6. Configure Vite in vite.config.ts:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 8080 }
});

7. Create main React files:

src/main.tsx → Renders <App />

src/App.tsx → Dashboard layout + device cards

src/hooks/useDevices.ts → Handles API calls

3. GitHub Integration

1. Initialize Git in project root:

git init

2. Add and commit all files:

git add .
git commit -m "Initial commit"

3. Add remote repository and push:

git remote add origin <your-repo-url>
git branch -M main
git push -u origin main

4. Include README.md with description, features, and setup instructions (this file itself works).

4. Notes / Tips

Keep frontend and backend separate for scalability

Use components.json to manage which UI components are active

Mock data helps quick testing without backend running

Ensure backend server is running before connecting frontend to API
