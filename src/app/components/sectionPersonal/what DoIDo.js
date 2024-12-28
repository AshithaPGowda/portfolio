"use client";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import {
    Code,
    Cloud,
    GitHub,
    Security,
    Assessment,
    BugReport,
    Api,
    Settings,
    Psychology,
} from "@mui/icons-material";
import { useState } from "react";
import COLOURS from "@/app/colours";

const WhatDoIDo = ({ theme }) => {
    const skills = [
        {
            color: "#4CAF50",
            icon: <Code />,
            title: "Software Development",
            description: "Crafting robust and scalable solutions.",
            details: "Programming & Scripting: Python, Shell Scripting, SQL, C, C++, Java, C#.",
        },
        {
            color: "#2196F3",
            icon: <Cloud />,
            title: "Hosting",
            description: "Deploying applications on reliable platforms.",
            details: "Tools: AWS, Docker, Jenkins, Ubuntu, Linux.",
        },
        {
            color: "#000",
            icon: <GitHub />,
            title: "CI/CD & Git Management",
            description: "Streamlining workflows and version control.",
            details: "Git, CI/CD Pipelines, Jenkins, GitHub Actions.",
        },
        {
            color: "#F44336",
            icon: <Security />,
            title: "Testing & Security",
            description: "Ensuring code quality and system security.",
            details: "Jest, Mocha, Chai, TDD, Rate Limiting, XSS, MITM Protection.",
        },
        {
            color: "#FFC107",
            icon: <Assessment />,
            title: "Load Testing",
            description: "Optimizing performance under stress.",
            details: "Postman, LoadRunner, K6, Performance Benchmarks.",
        },
        {
            color: "#9C27B0",
            icon: <BugReport />,
            title: "Debugging",
            description: "Diagnosing and solving complex issues.",
            details: "Event-Driven Systems, Error Tracking, Profiling Tools.",
        },
        {
            color: "#FF5722",
            icon: <Api />,
            title: "RESTful APIs",
            description: "Building efficient and scalable API integrations.",
            details: "REST API, GraphQL, WebSockets, CQRS, Microservices.",
        },
        {
            color: "#607D8B",
            icon: <Settings />,
            title: "Smart Contracts",
            description: "Developing secure blockchain-based applications.",
            details: "Solidity, Hardhat, Web3.js, Ethers.js, DeFi, NFT Development.",
        },
        {
            color: "#8BC34A",
            icon: <Psychology />,
            title: "AI Algorithm Development",
            description: "Creating intelligent systems for real-world challenges.",
            details: "TensorFlow, PyTorch, Scikit-learn, AI Pipelines.",
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            style={{
                padding: "3vh",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "20px",
                boxShadow:
                    theme === "LIGHT"
                        ? "0 6px 12px rgba(0, 0, 0, 0.1)"
                        : "0 6px 12px rgba(0, 0, 0, 0.5)",
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
                            onMouseLeave={() => setHoveredIndex(null)}
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
                                backgroundColor:
                                    hoveredIndex === index
                                        ? skill.color
                                        : COLOURS[`CARD_COLOUR_${theme}`],
                                color:
                                    hoveredIndex === index
                                        ? "#fff"
                                        : COLOURS[`SECTION_COLOUR_${theme}`],
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
                                    color:
                                        hoveredIndex === index ? "#fff" : skill.color,
                                }}
                            >
                                {skill.icon}
                            </div>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    style={{
                                        color:
                                            hoveredIndex === index
                                                ? "#fff"
                                                : COLOURS[`TEXT_COLOUR_${theme}`],
                                        transition: "transform 0.3s ease",
                                        transform: hoveredIndex === index
                                            ? "translateY(-10px)"
                                            : "translateY(0)",
                                    }}
                                >
                                    {skill.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{
                                        color:
                                            hoveredIndex === index
                                                ? "#fff"
                                                : COLOURS[`TEXT_COLOUR_${theme}`],
                                    }}
                                >
                                    {skill.description}
                                </Typography>
                                {hoveredIndex === index && (
                                    <Typography
                                        variant="body2"
                                        style={{
                                            marginTop: "10px",
                                            color: "#fff",
                                        }}
                                    >
                                        {skill.details}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default WhatDoIDo;
