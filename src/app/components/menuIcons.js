import React from "react";
import { Box, Tooltip } from "@mui/material";
import { Work, School, Business, ContactMail, Home } from "@mui/icons-material"; // Icons
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import COLOURS from "../colours";

const menuIcons = {
  Home: <HomeTwoToneIcon />,
  "Education/Work Experience": <SchoolTwoToneIcon />,
  Projects: <Business />,
  "My Work": <TerminalTwoToneIcon />,
  "Contact Me": <ContactMail />,
};

const MenuItem = ({ text, index, isActive, theme, onClick }) => {
  const Icon = menuIcons[text] || null;
  const iconColor = COLOURS[`MENU_COLOURS_${theme}`][index];

  return (
    <Tooltip title={text} placement="bottom">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "5.5vw",
          height: "5.5vh",
          borderRadius: "2vw",
          cursor: "pointer",
          backgroundColor: isActive ? `${iconColor}70` : "transparent", // Highlight when active
          "&:hover": {
            backgroundColor: `${iconColor}50`, // 50% opacity of the icon color on hover
          },
          transition: "background-color 0.3s ease",
        }}
        onClick={onClick}
      >
        {React.cloneElement(Icon, { style: { color: iconColor, fontSize: "2.5vw" } })}
      </Box>
    </Tooltip>
  );
};

export default MenuItem;
