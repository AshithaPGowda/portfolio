import React from "react";
import { Typography, Button, Tooltip, Box, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import COLOURS from "@/app/colours";
import MediaSection from "./projectLayout/mediaSection";
import FeaturesSection from "./projectLayout/featuresSection";
import DetailsSection from "./projectLayout/detailsSection";
import GameBoard from "./gameboard/gameboard";

const ProjectDetails = ({ project, onBackClick, theme }) => {
    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("lg"));
    return (
        <div
            style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row", // Column layout for mobile, row for desktop
                gap: "20px",
                padding: "30px",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                height: "100%", // Ensure the parent container takes full height
                boxSizing: "border-box", // Ensure padding doesn't overflow
            }}
        >
            {/* Left Section */}
            <div
                style={{
                    flex: isMobile ? "none" : 2, // No need for flex-grow on mobile, take content size
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    height: "100%", // Ensure left section takes full height
                }}
            >
                {/* Header Section */}
                <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
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
                                position: isMobile ? "fixed" : "relative", // Fix position on mobile
                                top: isMobile ? "20vh" : "unset", // Top position for mobile
                                left: isMobile ? "0.7vw" : "unset", // Left position for mobile
                                zIndex: 3, // Ensure it stays above other content
                                backgroundColor: isMobile ? COLOURS[`SECTION_COLOUR_${theme}`] : "transparent", // Optional: Semi-transparent background for better visibility
                                borderRadius: "20px", // Optional: Rounded corners for better mobile UX
                            }}
                        />
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

                    {/* Project Link */}
                    {project.link && (
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<LaunchIcon />}
                            onClick={() => window.open(project.link.url, "_blank", "noopener,noreferrer")}
                            sx={{
                                textTransform: "none",
                                color: COLOURS[`BACKBUTTON_COLOUR_${theme}`],
                                borderColor: COLOURS[`BACKBUTTON_COLOUR_${theme}`],
                                "&:hover": {
                                    borderColor: COLOURS[`SPECIAL_TEXT_COLOUR_${theme}`],
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                },
                            }}
                        >
                            {project.link.label}
                        </Button>
                    )}
                </div>

                {/* Description */}
                <Typography variant="body1">{project.description}</Typography>

                {/* Details Section */}
                <DetailsSection details={project.details} theme={theme} />

                {/* Features Section */}
                <FeaturesSection textContent={project.textContent} theme = {theme}  challenge={project.challenge}/>

                {/* Game/Media Section */}
                {isMobile && project.media && project.media.length > 0 && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            flex: 1, // Allow this section to take available space
                            height: "auto", // Let content determine height on mobile
                            paddingLeft: "20px",
                            paddingBottom: "20px",
                            boxSizing: "border-box", // Handle padding correctly
                        }}
                    >
                        {project.playable ? (
                            <GameBoard theme={theme} isMobile={isMobile} style={{ flex: 1, height: "100%" }} /> // Ensure GameBoard stretches
                        ) : (
                            <MediaSection media={project.media} />
                        )}
                    </div>
                )}
            </div>

            {/* Right Section for desktopView */}
            {!isMobile && project.media && project.media.length > 0 && (
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
                        height: "100%", // Ensure right section takes full height
                    }}
                >
                    {project.playable ? (
                        <GameBoard theme={theme} isMobile={isMobile} style={{ flex: 1, height: "100%" }} /> // Ensure GameBoard stretches
                    ) : (
                        <MediaSection media={project.media} />
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
