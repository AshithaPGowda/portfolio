import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const FrostedGlassSidebar = React.forwardRef(({ isOpen, activeSection, onClose }, ref) => {
  const menuItems = ['Education', 'Projects', 'Work Experience', 'Contact Me'];

  const handleItemClick = (index) => {
    if (onClose) onClose(index);
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '50vw',
        height: '100vh',
        bgcolor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        padding: '0px',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '20px',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <List>
        {menuItems.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                },
                backgroundColor: activeSection === index ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
              }}
              onClick={() => handleItemClick(index)}
            >
              <ListItemText primary={text} primaryTypographyProps={{ color: '#000', fontWeight: '500' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
});

export default FrostedGlassSidebar;
