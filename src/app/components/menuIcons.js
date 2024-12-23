import React from "react";
import { Box, ListItemText } from "@mui/material";
import { Work, School, Business, ContactMail, Home } from "@mui/icons-material"; // Corrected icons
import COLOURS from "../colours"; // Assuming this is where your colors are stored

const menuIcons = {
  Home: <Home />,
  Education: <School />,
  Projects: <Business />,
  "My Work": <Work />,
  "Contact Me": <ContactMail />,
};

const MenuItem = ({ text, index, isActive, onClick, theme, toggleTheme }) => {
  console.log("In menuItems, theme = ")
  const Icon = menuIcons[text] || null; // Get the icon based on text
  const iconColor = theme === "LIGHT" ? COLOURS.MENU_COLOURS_LIGHT[index] || "#000" : COLOURS.MENU_COLOURS_DARK[index] || "#FFF"; // Icon color based on theme

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.4)" : "transparent", // Highlight active menu item
        "&:hover": {
          backgroundColor: theme === "LIGHT" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)", // Hover effect based on theme
        },
        boxShadow: isActive ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none", // Optional shadow for active state
        transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Smooth transitions
      }}
      onClick={() => onClick(index)} // Pass the index to the click handler
    >
      {/* Icon Section */}
      {Icon && (
        <Box
          sx={{
            marginRight: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {React.cloneElement(Icon, { style: { color: iconColor } })} {/* Apply color to the icon */}
        </Box>
      )}

      {/* Text Section */}
      <ListItemText
        primary={text}
        primaryTypographyProps={{
          color: theme === "LIGHT" ? COLOURS.TEXT_COLOUR_LIGHT : COLOURS.TEXT_COLOUR_DARK, // Dynamically set text color based on theme
          fontWeight: "550", // Increased font weight for better visibility
          fontSize: "16px",
        }}
      />
      {console.log("theme",theme, COLOURS.TEXT_COLOUR_DARK)}
    </Box>
  );
};

export default MenuItem;
