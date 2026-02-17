import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Tooltip, Box, IconButton } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import COLOURS from "@/app/colours";

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
        G = Math.max(0, G - Math.round(R * (percentage / 100)));
        B = Math.max(0, B - Math.round(B * (percentage / 100)));
    }

    return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
};

const ProjectGrid = ({ projects, onCardClick, theme, isMobile }) => {
    const maxHeight = isMobile ? 250 : 200;
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Sort featured projects first
    const sortedProjects = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

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
                {sortedProjects.map((project, index) => {
                    const adjustedColor = adjustColor(project.cardBackgroundColor, 30, theme === "LIGHT");

                    return (
                        <Grid item xs={12} sm={6} md={3} key={index}>
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
                                                ? "0 6px 12px rgba(81, 51, 51, 0.1)"
                                                : "0 6px 12px rgba(0, 0, 0, 0.5)",
                                        transition: "all 0.3s ease",
                                        height: `${maxHeight}px`,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        position: "relative",
                                        overflow: "hidden",
                                        "&:hover": {
                                            transform: "scale(1.12)",
                                            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                    <CardContent sx={{ padding: "16px", paddingBottom: "40px" }}>
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
                                                marginTop: "8px",
                                                textAlign: "center",
                                            }}
                                        >
                                            {project.highlightDescription}
                                        </Typography>
                                    </CardContent>
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: "8px",
                                                left: "8px",
                                            }}
                                        >
                                            <Tooltip title="Featured Project" placement="top">
                                                <img
                                                    src="/featured-badge.png"
                                                    alt="Featured"
                                                    style={{
                                                        width: "28px",
                                                        height: "28px",
                                                    }}
                                                />
                                            </Tooltip>
                                        </Box>
                                    )}
                                    {/* Project Link */}
                                    {project.link && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: "8px",
                                                right: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "4px",
                                            }}
                                        >
                                            <Tooltip title={project.link.label} placement="top">
                                                <IconButton
                                                    size="small"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.link.url, "_blank", "noopener,noreferrer");
                                                    }}
                                                    sx={{
                                                        color: COLOURS[`TEXT_COLOUR_${theme}`],
                                                        backgroundColor: "rgba(255,255,255,0.2)",
                                                        "&:hover": {
                                                            backgroundColor: "rgba(255,255,255,0.4)",
                                                        },
                                                    }}
                                                >
                                                    <LaunchIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    )}
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
