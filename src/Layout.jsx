import React from "react";

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <style>{`
        :root {
          --primary-gold: #C4915C;
          --primary-brown: #B87333;
          --dark-brown: #8B4513;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }
        
        .leaflet-container {
          z-index: 1;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #C4915C;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #A87841;
        }
      `}</style>
      {children}
    </>
  );
}