import React from "react";
import { Typography, Button, Tooltip, Box, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import COLOURS from "@/app/colours";
import MediaSection from "./projectLayout/mediaSection";
import FeaturesSection from "./projectLayout/featuresSection";
import DetailsSection from "./projectLayout/detailsSection";
import GameBoard from "./gameboard/gameboard";

const ProjectDetails = ({ project, onBackClick, theme }) => {
    // Check if the screen is small using useMediaQuery
        const themeMUI = useTheme();
        const isMobile = useMediaQuery(themeMUI.breakpoints.down("sm"));

    return (
        <div
            style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row", // Switch to column for mobile
                gap: "20px",
                padding: "30px",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {/* Left Section */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
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
                                color: COLOURS[`BACKBUTTON_COLOUR_${theme}`],
                            }}
                        ></Button>
                    </Tooltip>

                    {/* Project Title */}
                    <Typography
                        variant="h4"
                        style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: COLOURS[`SPECIAL_TEXT_COLOUR_${theme}`],
                            flex: 1, // Makes title take available space
                        }}
                    >
                        {project.title}
                    </Typography>
                </div>

                {/* Description */}
                <Typography variant="body1">{project.description}</Typography>

                {/* Details Section */}
                <DetailsSection details={project.details} theme={theme} />

                {/* Features Section */}
                <FeaturesSection features={project.features} />
            </div>

            {/* Right Section (Media or Game) */}
            {project.media && project.media.length > 0 && (
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "1vw",
                        borderLeft: isMobile ? "none" : `1px solid ${COLOURS[`BORDER_COLOUR_${theme}`]}`,
                        paddingLeft: isMobile ? "2vw" : "0",
                        marginTop: isMobile ? "20px" : "0", // Add margin-top for mobile view
                        maxWidth: isMobile ? "100%" : "none", // Ensure it doesn’t overflow
                        // overflow: "hidden", // Prevent overflow
                    }}
                >
                    {project.playable ? (
                        <div
                            style={{
                                maxWidth: "100%", // Make sure GameBoard doesn't overflow
                                width: "100%",
                                overflow_y: "hidden", // Prevent content spilling over
                            }}
                        >
                            <GameBoard theme={theme} />
                        </div>
                    ) : (
                        project.media &&
                        project.media.length > 0 && <MediaSection media={project.media} />
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
