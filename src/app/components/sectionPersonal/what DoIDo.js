"use client";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Code, Cloud, GitHub, Security, Assessment, BugReport, Api, Settings, Psychology } from "@mui/icons-material";
import { useState } from "react";
import COLOURS from "@/app/colours";

const WhatDoIDo = ({ theme }) => {
    const skills = [
        { color: "#4CAF50", icon: <Code />, title: "Software Development", description: "Crafting robust and scalable solutions." },
        { color: "#2196F3", icon: <Cloud />, title: "Hosting", description: "Deploying applications on reliable platforms." },
        { color: "#000", icon: <GitHub />, title: "CI/CD & Git Management", description: "Streamlining workflows and version control." },
        { color: "#F44336", icon: <Security />, title: "Testing & Security", description: "Ensuring code quality and system security." },
        { color: "#FFC107", icon: <Assessment />, title: "Load Testing", description: "Optimizing performance under stress." },
        { color: "#9C27B0", icon: <BugReport />, title: "Debugging", description: "Diagnosing and solving complex issues." },
        { color: "#FF5722", icon: <Api />, title: "RESTful APIs", description: "Building efficient and scalable API integrations." },
        { color: "#607D8B", icon: <Settings />, title: "Smart Contracts", description: "Developing secure blockchain-based applications." },
        { color: "#8BC34A", icon: <Psychology />, title: "AI Algorithm Development", description: "Creating intelligent systems for real-world challenges." },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            style={{
                padding: "3vh",
                backgroundColor: theme === "LIGHT" ? "#fdfdfd" : "#2c2c2c",
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            <Typography
                variant="h4"
                style={{
                    color: theme === "LIGHT" ? COLOURS.TEXT_COLOUR_LIGHT : COLOURS.TEXT_COLOUR_DARK,
                    fontWeight: "bold",
                    marginBottom: "20px",
                }}
            >
                What Do I Do? 💻
            </Typography>

            <Grid container spacing={3}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                textAlign: "center",
                                padding: "20px",
                                borderRadius: "15px",
                                boxShadow: hoveredIndex === index
                                    ? "0 10px 20px rgba(0, 0, 0, 0.2)"
                                    : "0 6px 12px rgba(0, 0, 0, 0.1)",
                                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                                backgroundColor: hoveredIndex === index ? skill.color : theme === "LIGHT" ? "#fff" : "#333",
                                color: hoveredIndex === index ? "#fff" : theme === "LIGHT" ? "#222" : "#eee",
                            }}
                        >
                            <div style={{ fontSize: "3rem", marginBottom: "10px", color: hoveredIndex === index ? "#fff" : skill.color }}>
                                {skill.icon}
                            </div>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    style={{ color: hoveredIndex === index ? "#fff" : theme === "LIGHT" ? "#222" : "#eee" }}
                                >
                                    {skill.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ color: hoveredIndex === index ? "#fff" : theme === "LIGHT" ? "#555" : "#ccc" }}
                                >
                                    {skill.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default WhatDoIDo;
