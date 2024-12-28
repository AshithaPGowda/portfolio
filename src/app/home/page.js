'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery } from "@mui/material"; // Import for media query
import Header from '../components/header';
import COLOURS from '../colours';
import PersonalMobile from '../components/sectionPersonal/mobileView';
import PersonalDesktop from '../components/sectionPersonal/desktopView';
import WhatDoIDo from '../components/sectionPersonal/what DoIDo';

export default function UserProfile({theme}) {
      // Check if the screen is small (mobile view)
  const isMobile = useMediaQuery("(max-width:600px)");

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
        overflow_x: 'hidden', // Prevent overflow
        backgroundColor: COLOURS[`BACKGROUND_${theme}`], // Dynamic background color
      }}
    >

      {/* Main Content */}
      <div
        style={{
          flexGrow: 1,
          padding: '50px 20px',
          marginTop: '10vh', // Space for fixed header
          backgroundColor: COLOURS[`BACKGROUND_${theme}`], // Dynamic background color
          color: COLOURS[`TEXT_COLOUR_${theme}`], // Dynamic text color
        }}
      >
        {(isMobile) ? <PersonalMobile theme={theme} /> : <PersonalDesktop theme={theme} />}
      </div>
      <div
        style={{
          flexGrow: 1,
          padding: '50px 20px',
          marginTop: '-5vh', // Space for fixed header
          backgroundColor: COLOURS[`BACKGROUND_${theme}`], // Dynamic background color
          color: COLOURS[`TEXT_COLOUR_${theme}`], // Dynamic text color
        }}
      >
        {<WhatDoIDo theme={theme}/>}
        
      </div>
      
      {/* Custom Footer */}
      <div
        style={{
          padding: '10px 10px',
          backgroundColor: COLOURS[`FOOTER_${theme}`], // Dynamic footer color
          color: COLOURS[`TEXT_COLOUR_${theme}`], // Dynamic footer text color
          textAlign: 'center',
          marginTop: 'auto',
        }}
      >
        <p>&#169; Ashitha Gowda {currentYear}</p>
      </div>
    </div>
  );
}
