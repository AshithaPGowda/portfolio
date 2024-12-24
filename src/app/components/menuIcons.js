import React from "react";
import { Box, Tooltip } from "@mui/material";
import { Work, School, Business, ContactMail, Home } from "@mui/icons-material"; // Icons
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import COLOURS from "../colours";

const menuIcons = {
  Home: <HomeTwoToneIcon />,
  Education: <SchoolTwoToneIcon />,
  Projects: <Business />,
  "My Work": <TerminalTwoToneIcon />,
  "Contact Me": <ContactMail />,
};

const MenuItem = ({ text, index, theme }) => {
  const Icon = menuIcons[text] || null; // Get the icon based on the text
  const iconColor =
    theme === "LIGHT"
      ? COLOURS.MENU_COLOURS_LIGHT[index] || "#000"
      : COLOURS.MENU_COLOURS_DARK[index] || "#FFF"; // Icon color based on theme

  return (
    <Tooltip title={text} placement="right"> {/* Tooltip displays the text */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "4vw",
          height: "4vh",
          borderRadius: "50%",
          cursor: "pointer",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme === "LIGHT" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)",
          },
          transition: "background-color 0.3s ease",
        }}
      >
        {React.cloneElement(Icon, { style: { color: iconColor, fontSize: "2.5vw" } })} {/* Apply styles to the icon */}
      </Box>
    </Tooltip>
  );
};

export default MenuItem;
