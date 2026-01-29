import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';

/**
 * Application Entry Point
 *
 * Initializes the React 18 concurrent root and mounts the application.
 * StrictMode is enabled to highlight potential problems in the application lifecycle.
 */

// Locate the root DOM node
const container = document.getElementById('root');

// Integrity check: Ensure the mount point exists before attempting to render
if (!container) {
  throw new Error("Fatal Error: Failed to find the root element. Ensure 'index.html' contains <div id='root'></div>.");
}

// Initialize the React 18 concurrent root
const root = ReactDOM.createRoot(container);

// Render the application
root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="asymmetrical-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);