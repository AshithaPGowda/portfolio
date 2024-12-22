'use client';
import { useState } from 'react';

export default function UserProfile() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Full screen height
        width: '100vw', // Full screen width
        margin: 0, // Remove margin
        padding: 0, // Remove padding
        overflow: 'hidden', // Prevent overflow
        backgroundColor: '#FFFFFF', // White background
      }}
    >
      {/* Custom Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          backgroundColor: '#FFFFFF', // White background for the header
          color: '#000000', // Black color for text
          position: 'fixed', // Keep header fixed at the top
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>APG</div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a
            href="#home"
            style={{
              color: '#000000', // Black text for links
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Home
          </a>
          <a
            href="#portfolio"
            style={{
              color: '#000000', // Black text for links
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Portfolio
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div
        style={{
          flexGrow: 1,
          padding: '50px 20px',
          marginTop: '80px', // Space for fixed header
          backgroundColor: '#FA4032',
          color: '#624E88',
        }}
      >
        <h2>User Profile</h2>
        {/* Profile content goes here */}
      </div>

      {/* Custom Footer */}
      <div
        style={{
          padding: '10px 20px',
          backgroundColor: '#E5E1DA',
          color: '#B0A99E',
          textAlign: 'center',
          marginTop: 'auto',
        }}
      >
        <p>&#169; Ashitha Gowda {currentYear} </p>
      </div>
    </div>
  );
}

