#!/bin/bash

# Kill any existing Astro processes
pkill -f "astro dev" 2>/dev/null || true

# Wait a moment for processes to stop
sleep 2

# Start development server on port 4321
echo "Starting development server on http://localhost:4321"
npm run dev
