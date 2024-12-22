'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header';


export default function UserProfile() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Ensure body and html take up full height of the screen
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';
  }, []);

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
        <Header></Header>
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
          padding: '0px 10px',
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