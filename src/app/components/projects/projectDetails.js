import React from "react";
import { Typography, Button, Tooltip, Box } from "@mui/material";
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
                flexDirection: "row",
                gap: "20px",
                padding: "30px",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {/* Left Section */}
            <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Header Section */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {/* Back Button */}
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
                                position: "sticky",
                                top: "10px", // Fixes button at the top
                                zIndex: 10,
                                backgroundColor: COLOURS[`BUTTON_BG_${theme}`],
                            }}
                        ></Button>
                    </Tooltip>

                    <Typography variant="h4" style={{ fontWeight: "bold", textAlign:"center" }}>
                        {project.title}
                    </Typography>
                </div>

                {/* Description */}
                <Typography variant="body1">{project.description}</Typography>

                {/* Details Section */}
                <DetailsSection details={project.details} />

                {/* Features Section */}
                <FeaturesSection features={project.features} />
            </div>

            {/* Right Section */}
            {project.media && project.media.length > 0 && (
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "10px",
                        borderLeft: `2px solid ${COLOURS[`BORDER_COLOUR_${theme}`]}`,
                        paddingLeft: "20px",
                    }}
                >
                    <MediaSection media={project.media} />
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
