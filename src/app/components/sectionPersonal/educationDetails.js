"use client";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Engineering, Science, HistoryEdu, Language, School } from "@mui/icons-material";
import { useState } from "react";
import COLOURS from "@/app/colours";

const Education = ({ theme, timelineColours, onHoverChangeTheme }) => {
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
            icon: <Science />,
            title: "Cnotes",
            description: "startup",
            details: "June 2015 - May 2017 | Specialized in Physics, Chemistry, and Mathematics.",
        },
        {
            color: timelineColours[2],
            icon: <HistoryEdu />,
            title: "Software Developer",
            description: "Juego Studios",
            details: "June 2010 - May 2015 | Comprehensive foundational education.",
        },
        {
            color: timelineColours[3],
            icon: <Language />,
            title: "Software Developer",
            description: "Jktech",
            details: "Ongoing | Various certifications in Blockchain, AI, and Full Stack Development.",
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

    return (
        <div style={{ padding: "3vh", backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`] }}>
            <Typography variant="h4" style={{ color: COLOURS[`TEXT_COLOUR_${theme}`], marginBottom: "20px", textAlign: "center" }}>
                My Timeline
            </Typography>

            <Grid container spacing={3}>
                {education.map((edu, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            onMouseEnter={() => {
                                setHoveredIndex(index);
                                onHoverChangeTheme(index); // Update theme on hover
                            }}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                textAlign: "center",
                                padding: "4vh",
                                backgroundColor: hoveredIndex === index ? edu.color : COLOURS[`CARD_COLOUR_${theme}`],
                                color: hoveredIndex === index ? "#fff" : COLOURS[`TEXT_COLOUR_${theme}`],
                                transition: "background-color 0.3s ease",
                            }}
                        >
                            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>{edu.icon}</div>
                            <CardContent>
                                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                                    {edu.title}
                                </Typography>
                                <Typography variant="body2">{edu.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Education;
