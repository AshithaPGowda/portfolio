import React from 'react';
import { ListItemButton, ListItemText, Box } from '@mui/material';
import { Home, Work, School, ContactMail } from '@mui/icons-material'; // Import icons (you can customize these)

const menuIcons = {
  Education: <School />,
  Projects: <Work />,
  "Work Experience": <Home />,
  "Contact Me": <ContactMail />,
};

const MenuItem = ({ text, isActive, onClick }) => {
  const Icon = menuIcons[text] || null; // Get the icon based on text

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        borderRadius: '8px',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
        },
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {Icon && (
        <Box sx={{ marginRight: '10px', display: 'flex', justifyContent: 'center' }}>
          {Icon}
        </Box>
      )}
      <ListItemText
        primary={text}
        primaryTypographyProps={{ color: '#000', fontWeight: '500' }}
      />
    </Box>
  );
};

export default MenuItem;
