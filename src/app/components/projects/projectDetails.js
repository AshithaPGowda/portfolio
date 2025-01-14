import React from "react";
import { Typography, Button, Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import COLOURS from "@/app/colours";
import MediaSection from "./projectLayout/mediaSection";
import FeaturesSection from "./projectLayout/featuresSection";
import DetailsSection from "./projectLayout/detailsSection";

const ProjectDetails = ({ project, onBackClick, theme }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                padding: "30px",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {/* Back Button with Tooltip */}
            <Tooltip title="Back" placement="right">
                <Button
                    onClick={onBackClick}
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    style={{
                        textTransform: "none",
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 16px",
                    }}
                ></Button>
            </Tooltip>

            {/* Header Section */}
            <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "10px" }}>
                {project.title}
            </Typography>
            <Typography variant="body1">{project.description}</Typography>

            {/* Media Section */}
            <MediaSection media={project.media} />

            {/* Details Section */}
            <DetailsSection details={project.details} />

            {/* Features Section */}
            <FeaturesSection features={project.features} />
        </div>
    );
};

export default ProjectDetails;
