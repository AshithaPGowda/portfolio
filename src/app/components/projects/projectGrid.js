import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Tooltip } from "@mui/material";
import COLOURS from "@/app/colours";

// adjustColor function
const adjustColor = (color, percentage, lighten = true) => {
    const num = parseInt(color.slice(1), 16);
    let R = (num >> 16) & 0xff;
    let G = (num >> 8) & 0xff;
    let B = num & 0xff;

    if (lighten) {
        R = Math.min(255, R + Math.round((255 - R) * (percentage / 100)));
        G = Math.min(255, G + Math.round((255 - G) * (percentage / 100)));
        B = Math.min(255, B + Math.round((255 - B) * (percentage / 100)));
    } else {
        R = Math.max(0, R - Math.round(R * (percentage / 100)));
        G = Math.max(0, G - Math.round(G * (percentage / 100)));
        B = Math.max(0, B - Math.round(B * (percentage / 100)));
    }

    return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
};

const ProjectGrid = ({ projects, onCardClick, theme }) => {
    const maxHeight = 200; // Fixed height for all cards
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
            <Typography
                variant="h6"
                style={{
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                MY PROJECTS
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                {projects.map((project, index) => {
                    const adjustedColor = adjustColor(project.cardBackgroundColor, 30, theme === "LIGHT");

                    return (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            {/* Tooltip for the project */}
                            <Tooltip title={project.toolTipText} placement="top">
                                <Card
                                    onClick={() => onCardClick(project)}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    sx={{
                                        cursor: "pointer",
                                        backgroundColor: adjustedColor,
                                        borderRadius: project.cardBorderRadius || "10px",
                                        boxShadow:
                                            theme === "LIGHT"
                                                ? "0 6px 12px rgba(0, 0, 0, 0.1)"
                                                : "0 6px 12px rgba(0, 0, 0, 0.5)",
                                        transition: "all 0.3s ease", // Smooth transition for all properties
                                        height: `${maxHeight}px`, // Fixed height for all cards
                                        display: "flex", // Flexbox for vertical alignment
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        transform: "scale(1)", // Initial scale
                                        "&:hover": {
                                            transform: "scale(1.12)", // Enlarge the card on hover
                                            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)", // Add a stronger shadow on hover
                                        },
                                        textAlign: "center",
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            style={{
                                                color: COLOURS[`TEXT_COLOUR_${theme}`],
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            style={{
                                                color: COLOURS[`TEXT_COLOUR_${theme}`],
                                                transition: "transform 0.1s ease",
                                                transform: hoveredIndex === index ? "translateY(-18vh)" : "translateY(0)",
                                                padding: "3vh",
                                            }}
                                        >
                                            {project.description}
                                        </Typography>
                                        {project.features && project.features.length > 0 && (
                                            <Typography
                                                component="div" // Use a div to allow block-level styling
                                                style={{
                                                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                                                    opacity: hoveredIndex === index ? 1 : 0, // Show features only on hover
                                                    transform: hoveredIndex === index ? "translateY(-11vh)" : "translateY(0)", // Subtle animation
                                                    transition: "opacity 0.3s ease, transform 0.3s ease",
                                                    textAlign: "left", // Align points to the left for better readability
                                                    marginTop: "10px",
                                                }}
                                            >
                                                <ul style={{ margin: 0, paddingLeft: "20px", listStyleType: "disc" }}>
                                                    {" "}
                                                    {/* Styled unordered list */}
                                                    {project.highlightFeatures.map((feature, i) => (
                                                        <li key={i} style={{ marginBottom: "5px", fontSize: "0.9rem" }}>
                                                            {" "}
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Typography>
                                        )}
                                    </CardContent>
                                </Card>
                            </Tooltip>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default ProjectGrid;
