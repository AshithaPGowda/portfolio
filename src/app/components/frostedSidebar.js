import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function FrostedGlassSidebar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '250px',
        height: '100vh',
        bgcolor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: '#000', fontWeight: 'bold', textAlign: 'center' }}
      >
        Menu
      </Typography>
      <List>
        {['Education', 'Projects', 'Work Experience', 'Contact Me'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                },
              }}
            >
              <ListItemText primary={text} primaryTypographyProps={{ color: '#000', fontWeight: '500' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
