"use client";

import { Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Code, Cloud, GitHub, Security, Assessment, BugReport, Api, Settings, Psychology } from "@mui/icons-material";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import COLOURS from "@/app/colours";
import DynamicPython from "../../../../public/python";
import DynamicNode from "../../../../public/nodejs";
import DynamicPHP from "../../../../public/php";
import DynamicTypescript from "../../../../public/typescript";

const SwipeableCards = ({ skills, theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, skills.length - 1)),
        onSwipedRight: () => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)),
    });

    const skill = skills[currentIndex];

    return (
        <div
            {...handlers}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                padding: "3vh",
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
            <Card
                style={{
                    width: "90%",
                    textAlign: "center",
                    padding: "4vh",
                    borderRadius: "2vw",
                    backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div style={{ fontSize: "3rem", marginBottom: "10px", color: skill.color }}>{skill.icon}</div>
                <CardContent>
                    <Typography
                        variant="h6"
                        style={{
                            color: COLOURS[`TEXT_COLOUR_${theme}`],
                            fontWeight: "bold",
                            marginBottom: "10px",
                        }}
                    >
                        {skill.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{
                            color: COLOURS[`TEXT_COLOUR_${theme}`],
                            marginBottom: "10px",
                        }}
                    >
                        {skill.description}
                    </Typography>
                    <div>
                        {Array.isArray(skill.details) ? (
                            skill.details.map((detail, i) => (
                                <div key={i} style={{ marginBottom: "10px" }}>
                                    {detail}
                                </div>
                            ))
                        ) : (
                            <div style={{ marginBottom: "10px", color: COLOURS[`TEXT_COLOUR_${theme}`] }}>
                                {skill.details}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const WhatDoIDo = ({ theme }) => {
    const skills = [
        {
            color: "#4CAF50",
            icon: <Code />,
            title: "Software Development",
            description: "Crafting robust and scalable solutions.",
            details: [
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <DynamicNode
                        color={COLOURS[`BACKGROUND_LIGHT`]}
                        style={{
                            width: "50%", // Scale with card's width
                            height: "auto", // Maintain aspect ratio
                            maxWidth: "60px", // Ensure it doesn't get too large
                            margin: "0 auto", // Center it
                        }}
                    ></DynamicNode>
                    <DynamicPython
                        color={COLOURS[`BACKGROUND_LIGHT`]}
                        style={{
                            width: "50%", // Scale with card's width
                            height: "auto", // Maintain aspect ratio
                            maxWidth: "60px", // Ensure it doesn't get too large
                            margin: "0 auto", // Center it
                        }}
                    ></DynamicPython>
                    <DynamicPHP
                        color={"#4CAF50"}
                        style={{
                            width: "50%", // Scale with card's width
                            height: "auto", // Maintain aspect ratio
                            maxWidth: "60px", // Ensure it doesn't get too large
                            margin: "0 auto", // Center it
                        }}
                    ></DynamicPHP>
                    <DynamicTypescript
                        color={COLOURS[`BACKGROUND_LIGHT`]}
                        style={{
                            width: "50%", // Scale with card's width
                            height: "auto", // Maintain aspect ratio
                            maxWidth: "60px", // Ensure it doesn't get too large
                            margin: "0 auto", // Center it
                        }}
                    ></DynamicTypescript>
                </div>,
            ],
        },
        {
            color: "#2196F3",
            icon: <Cloud />,
            title: "Hosting",
            description: "Deploying applications on reliable platforms.",
            details: "AWS, Docker, Jenkins, Ubuntu, Linux.",
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
            color: "#FF5722",
            icon: <Api />,
            title: "RESTful APIs",
            description: "Building efficient and scalable API integrations.",
            details: "REST API, GraphQL, WebSockets, CQRS, Microservices.",
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

    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("sm"));
    const [hoveredIndex, setHoveredIndex] = useState(false);

    return isMobile ? (
        <SwipeableCards skills={skills} theme={theme} />
    ) : (
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

export default WhatDoIDo;
