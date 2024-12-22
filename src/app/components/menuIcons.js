import React from "react";
import { Box, ListItemText } from "@mui/material";
import { Work, School, Business, ContactMail, Home } from "@mui/icons-material";  // Corrected icons
import COLOURS from "../colours"; // Assuming this is where your colors are stored

const menuIcons = {
  Home: <Home />,
  Education: <School />,
  Projects: <Business />,
  "Work Experience": <Work />,
  "Contact Me": <ContactMail />,
};

const menuColors = [
  '#2E5077',  // Education
  '#4DA1A9',  // Projects
  '#79D7BE',  // Work Experience
  '#7E99A3',  // Contact Me
];

const MenuItem = ({ text, index, isActive, onClick }) => {
  const Icon = menuIcons[text] || null;  // Get the icon based on text
  const iconColor = menuColors[index] || "#000";  // Get the color from the color array
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        },
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.4)" : "transparent",  // Highlight if active
        cursor: "pointer",
        boxShadow: isActive ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",  // Optional box shadow for active state
      }}
      onClick={() => onClick(index)}  // Pass index to the onClick handler
    >
      {Icon && (
        <Box sx={{ marginRight: "10px", display: "flex", justifyContent: "center" }}>
          {React.cloneElement(Icon, { sx: { color: iconColor } })}  {/* Apply color to the icon */}
        </Box>
      )}
      <ListItemText
        primary={text}
        primaryTypographyProps={{
          color: COLOURS.TEXT_COLOUR_LIGHT,
          fontWeight: "550",  // Increased font weight
          fontSize: "16px",
        }}
      />
    </Box>
  );
};

export default MenuItem;
