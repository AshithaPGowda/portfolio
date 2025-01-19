"use client";

import { Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Engineering, Science, HistoryEdu, Language, School } from "@mui/icons-material";
import { useState, useEffect } from "react";
import COLOURS from "@/app/colours";
import "./education.module.css";
import SwipeableCards from "./swipeableCards";

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

const Education = ({ theme, timelineColours }) => {
    const education = [
        {
            color: timelineColours[0],
            icon: <Engineering />,
            title: "Bachelor of Engineering",
            description: "Vidyavardhaka College of Engineering",
            details: "August 2017 - May 2021 | Focused on Information Science and Engineering.",
        },
        {
            color: timelineColours[1],
            icon: <HistoryEdu />,
            title: "Software Developer",
            description: "Juego Studios",
            details: "August 2021 - April 2023 | Contributed to game development and innovative software solutions.",
        },
        {
            color: timelineColours[2],
            icon: <Language />,
            title: "Software Developer",
            description: "Jktech",
            details: "May 2023 - June 2024 | Worked on cutting-edge Blockchain, AI, and Full Stack Development project.",
        },
        {
            color: timelineColours[3],
            icon: <Science />,
            title: "Founder & Manager",
            description: "Cnotes",
            details:
                "2022 - Present | Managing over 30,000 customer data and monthly predictions for streamlined cable TV management for operators.",
        },
        {
            color: timelineColours[4],
            icon: <School />,
            title: "Master’s in Computer Science",
            description: "Johns Hopkins University",
            details: "August 2023 - May 2025 | Specialization in Advanced Software Engineering and Artificial Intelligence.",
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [sectionBgColor, setSectionBgColor] = useState(COLOURS[`SECTION_COLOUR_${theme}`]);
    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("sm"));
    useEffect(() => {
        // Reset the section background color whenever the theme changes
        setSectionBgColor(COLOURS[`SECTION_COLOUR_${theme}`]);
    }, [theme]); // Dependency array to trigger effect on theme change
    const handleCardHover = (index, color) => {
        setHoveredIndex(index);
        const adjustedColor = theme === "DARK" ? adjustColor(color, 50, false) : adjustColor(color, 50, true);
        setSectionBgColor(adjustedColor); // Make the section background 30% lighter
    };

    const handleCardLeave = () => {
        setHoveredIndex(null);
        setSectionBgColor(COLOURS[`SECTION_COLOUR_${theme}`]); // Reset to default section color
    };

    return (
        <div
            style={{
                padding: "3vh",
                backgroundColor: sectionBgColor,
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.8s ease, box-shadow 0.3s ease", // Increase transition time
                animation: "liquidFill 2s ease", // Apply the liquid fill animation
            }}
        >
            <style>
                {`@keyframes liquidFill {
            0% {
                background-color: transparent;
            }
            50% {
                background-color: rgba(255, 255, 255, 0.5);
            }
            100% {
                background-color: inherit; /* Background fills in */
            }
        }`}
            </style>
            {isMobile ? (
                <div>
                    <Typography
                        variant="h4"
                        style={{
                            color: COLOURS[`TEXT_COLOUR_${theme}`],
                            fontWeight: "bold",
                            marginBottom: "6vh",
                            textAlign: "center",
                        }}
                    >
                        MY TIMELINE
                    </Typography>

                    <SwipeableCards skills={education} theme={theme} />
                </div>
            ) : (
                <div>
                    <Typography
                        variant="h4"
                        style={{
                            color: COLOURS[`TEXT_COLOUR_${theme}`],
                            fontWeight: "bold",
                            marginBottom: "6vh",
                            textAlign: "center",
                        }}
                    >
                        MY TIMELINE
                    </Typography>
                    <Grid container spacing={3}>
                        {education.map((edu, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    onMouseEnter={() => handleCardHover(index, edu.color)}
                                    onMouseLeave={handleCardLeave}
                                    style={{
                                        textAlign: "center",
                                        padding: "4vh",
                                        borderRadius: "2vw",
                                        boxShadow:
                                            hoveredIndex === index
                                                ? "0 10px 20px rgba(0, 0, 0, 0.2)"
                                                : "0 6px 12px rgba(0, 0, 0, 0.1)",
                                        transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                                        backgroundColor: hoveredIndex === index ? edu.color : COLOURS[`CARD_COLOUR_${theme}`],
                                        color: hoveredIndex === index ? "#fff" : COLOURS[`SECTION_COLOUR_${theme}`],
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        gap: "10px",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "3rem",
                                            marginBottom: "10px",
                                            color: !hoveredIndex === index ? "#fff" : edu.color,
                                        }}
                                    >
                                        {edu.icon}
                                    </div>
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            style={{
                                                color: hoveredIndex === index ? "#fff" : COLOURS[`TEXT_COLOUR_${theme}`],
                                                transition: "transform 0.3s ease",
                                                transform: hoveredIndex === index ? "translateY(-11vh)" : "translateY(0)",
                                                textTransform: hoveredIndex === index ? "uppercase" : "",
                                                fontWeight: "bold", // Bold on hover
                                            }}
                                        >
                                            {edu.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            style={{
                                                color: hoveredIndex === index ? "#fff" : COLOURS[`TEXT_COLOUR_${theme}`],
                                                transition: "transform 0.3s ease",
                                                transform: hoveredIndex === index ? "translateY(-10vh)" : "translateY(0)",
                                            }}
                                        >
                                            {edu.description}
                                        </Typography>
                                        {hoveredIndex === index && (
                                            <div
                                                style={{
                                                    marginTop: "-5vh",
                                                    color: "#fff",
                                                }}
                                            >
                                                <div style={{ display: "flex", flexDirection: "row" }}></div>
                                                {Array.isArray(edu.details) ? (
                                                    edu.details.map((detail, i) => (
                                                        <div key={i} variant="body2" style={{ marginBottom: "10px" }}>
                                                            {detail}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div variant="body2" style={{ marginBottom: "10px" }}>
                                                        {edu.details}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default Education;
