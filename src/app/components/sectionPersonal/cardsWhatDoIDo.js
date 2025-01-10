"use client";

import { Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import COLOURS from "@/app/colours";

const WhatDoIDoCards = ({ skills, theme }) => {
    const [hoveredIndex, setHoveredIndex] = useState(false);

    return (
        <div
            style={{
                padding: "3vh",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            <Typography
                variant="h4"
                style={{
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                    fontWeight: "bold",
                    marginBottom: "20px",
                    textAlign: "center",
                }}
            >
                What Do I Do? 💻
            </Typography>

            <Grid container spacing={3}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(false)}
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
                                backgroundColor: hoveredIndex === index ? skill.color : COLOURS[`CARD_COLOUR_${theme}`],
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
                                    color: !hoveredIndex === index ? "#fff" : skill.color,
                                }}
                            >
                                {skill.icon}
                            </div>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    style={{
                                        color: hoveredIndex === index ? "#fff" : COLOURS[`TEXT_COLOUR_${theme}`],
                                        transition: "transform 0.3s ease",
                                        transform: hoveredIndex === index ? "translateY(-13vh)" : "translateY(0)",
                                        textTransform: hoveredIndex === index ? "uppercase" : "",
                                        fontWeight: "bold", // Bold on hover
                                    }}
                                >
                                    {skill.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{
                                        color: hoveredIndex === index ? "#fff" : COLOURS[`TEXT_COLOUR_${theme}`],
                                        transition: "transform 0.3s ease",
                                        transform: hoveredIndex === index ? "translateY(-10vh)" : "translateY(0)",
                                    }}
                                >
                                    {skill.description}
                                </Typography>
                                {hoveredIndex === index && (
                                    <div
                                        style={{
                                            marginTop: "-5vh",
                                            color: COLOURS[`TEXT_COLOUR_${theme}`],
                                        }}
                                    >
                                        <div style={{ display: "flex", flexDirection: "row" }}></div>
                                        {Array.isArray(skill.details) ? (
                                            skill.details.map((detail, i) => (
                                                <div key={i} variant="body2" style={{ marginBottom: "10px" }}>
                                                    {detail}
                                                </div>
                                            ))
                                        ) : (
                                            <div variant="body2" style={{ marginBottom: "10px" }}>
                                                {skill.details}
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
    );
};

export default WhatDoIDoCards;
