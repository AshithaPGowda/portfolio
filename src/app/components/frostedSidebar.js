import React from 'react';
import Box from '@mui/material/Box';
import COLOURS from '../colours';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { School, Business, Work, ContactMail, Home } from '@mui/icons-material'; // Importing icons for the menu

const FrostedGlassSidebar = React.forwardRef(({ isOpen, activeSection, onClose }, ref) => {
  const menuItems = ['Home', 'Education', 'My Work'];

  const handleItemClick = (index) => {
    if (onClose) onClose(index); // Trigger the onClose function with the selected index
  };

  const menuIcons = {
    Home: <Home />,
    Education: <School />,
    Projects: <Business />,
    'My Work': <Work />,
    'Contact Me': <ContactMail />,
  };

  const menuColors = COLOURS.MENU_COLOURS_LIGHT; // Use the colors from your color scheme

  return (
    <Box
      ref={ref}
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '50vw', // Make sidebar width flexible for mobile
        height: '100vh',
        bgcolor: 'rgba(255, 255, 255, 0.01)',
        backdropFilter: 'blur(3px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '20px',
        transition: 'all 0.3s ease-in-out',
        zIndex: 10, // Ensure the sidebar is above other content
      }}
    >
      <List sx={{ width: '100%', padding: 0, top: '10vh' }}>
        {menuItems.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                padding: '12px 20px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                },
                backgroundColor: activeSection === index ? 'rgba(255, 255, 255, 0.4)' : 'transparent', // Highlight active item
              }}
              onClick={() => handleItemClick(index)}
            >
              {/* Icon */}
              <Box sx={{ marginRight: '15px', display: 'flex', justifyContent: 'center' }}>
                {React.cloneElement(menuIcons[text], {
                  sx: { color: menuColors[index], fontSize: '24px' }, // Set the icon color and size
                })}
              </Box>
              {/* Text */}
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  color: COLOURS.TEXT_COLOUR_LIGHT, // White text for contrast on dark background
                  fontWeight: '500', // Set the font weight
                  fontSize: '16px',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
});

export default FrostedGlassSidebar;
