'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery } from "@mui/material"; // Import for media query
import COLOURS from '@/app/colours';
import PersonalMobile from './mobileView';
import PersonalDesktop from './desktopView';
import Education from './educationDetails';
import Footer from '../footerContent/customFooter';
import ProjectGrid from '../projects/projectGrid';
import ProjectDetails from '../projects/projectDetails';
import CONSTANT from '@/app/myProjects';

export default function UserProfile({theme, timelineColours}) {
      // Check if the screen is small (mobile view)
  const isMobile = useMediaQuery("(max-width:1200px)");
  const isMobileSmall = useMediaQuery("(max-width:600px)");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    // Ensure body and html take up full height of the screen
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';
    // Set background color to match theme
    document.body.style.backgroundColor = COLOURS[`BACKGROUND_${theme}`];
    document.documentElement.style.backgroundColor = COLOURS[`BACKGROUND_${theme}`];
  }, [theme]);



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
      {/* Projects Section - First after intro */}
      <div
        style={{
          flexGrow: 1,
          padding: '50px 20px',
          marginTop: '-5vh',
          backgroundColor: COLOURS[`BACKGROUND_${theme}`],
          color: COLOURS[`TEXT_COLOUR_${theme}`],
        }}
      >
        {selectedProject === null ? (
          <ProjectGrid
            projects={CONSTANT.PROJECTS}
            onCardClick={handleCardClick}
            theme={theme}
            isMobile={isMobileSmall}
          />
        ) : (
          <ProjectDetails
            project={selectedProject}
            onBackClick={handleBackClick}
            theme={theme}
          />
        )}
      </div>
      {/* Education Section */}
      <div
        style={{
          flexGrow: 1,
          padding: '50px 20px',
          marginTop: '-5vh',
          backgroundColor: COLOURS[`BACKGROUND_${theme}`],
          color: COLOURS[`TEXT_COLOUR_${theme}`],
        }}
      >
       {<Education theme={theme}/>}
      </div>

            {/* Footer */}
            <Footer theme={theme} isMobile={isMobile}/>
    </div>
  );
}
