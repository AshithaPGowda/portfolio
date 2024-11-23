import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Drawer, IconButton, List, ListItem, Tooltip, Typography } from '@mui/material';
import { Menu as MenuIcon, Home, Work } from '@mui/icons-material';

const MinimalistSidebar = ({ activeSection, setActiveSection, sidebarOpen, toggleSidebar }) => {
  const router = useRouter(); 
  const handleSectionClick = (section) => {
    
    if (activeSection !== section) {
      setActiveSection(section);
    }
    // add a way to route
        // Navigate to the corresponding route
        if (section === 'Home') {
          router.push('/'); // Navigate to /home
        } else if (section === 'Work') {
          router.push('/myworks'); // Navigate to /work
        }
  };

  return (
    <Box>
      {/* Toggle Button */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: 'fixed',
          top: '1vh',
          left: sidebarOpen ? '10vw' : '2vw',
          zIndex: 1201,
          backgroundColor: '#EEF1FF',
          color: '#432E54',
          '&:hover': { backgroundColor: '#B1B2FF' },
          transition: 'left 0.5s ease',
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        open={sidebarOpen}
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            width: sidebarOpen ? '12vw' : '4vw',
            backgroundColor: '#EEF1FF',
            color: '#432E54',
            overflowX: 'hidden',
            transition: 'width 0.5s ease',
            boxShadow: 'none',
            border: 'none',
          },
        }}
      >
        <List sx={{ marginTop: '10vh' }}>
          <ListItem disablePadding>
            <Tooltip title={sidebarOpen ? "Home" : ""} placement="right">
              <IconButton
                onClick={() => handleSectionClick('Home')}
                sx={{
                  backgroundColor: activeSection === 'Home' ? '#CB9DF0' : 'transparent',
                  color: activeSection === 'Home' ? '#FFF' : '#432E54',
                  '&:hover': { backgroundColor: '#B1B2FF' },
                  margin: '5px',
                  borderRadius: '8px',
                  width: '100%',
                  justifyContent: sidebarOpen ? 'flex-start' : 'center',
                }}
              >
                <Home sx={{ marginRight: sidebarOpen ? '10px' : 0 }} />
                {sidebarOpen && <Typography variant="body2">Home</Typography>}
              </IconButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title={sidebarOpen ? "Work" : ""} placement="right">
              <IconButton
                onClick={() => handleSectionClick('Work')}
                sx={{
                  backgroundColor: activeSection === 'Work' ? '#CB9DF0' : 'transparent',
                  color: activeSection === 'Work' ? '#FFF' : '#432E54',
                  '&:hover': { backgroundColor: '#B1B2FF' },
                  margin: '5px',
                  borderRadius: '8px',
                  width: '100%',
                  justifyContent: sidebarOpen ? 'flex-start' : 'center',
                }}
              >
                <Work sx={{ marginRight: sidebarOpen ? '10px' : 0 }} />
                {sidebarOpen && <Typography variant="body2">Work</Typography>}
              </IconButton>
            </Tooltip>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default MinimalistSidebar;
