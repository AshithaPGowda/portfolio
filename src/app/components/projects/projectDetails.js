// components/ProjectDetails.js
import React from "react";
import { Typography, Button } from "@mui/material";
import COLOURS from "@/app/colours";

const ProjectDetails = ({ project, onBackClick, theme }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                flexWrap: "wrap",
                padding: "30px",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            <Typography variant="h4">{project.title}</Typography>
            <Typography variant="body1">{project.description}</Typography>
            <Button onClick={onBackClick} variant="outlined" style={{ marginTop: "20px" }}>
                Back to Projects
            </Button>
        </div>
    );
};

export default ProjectDetails;
