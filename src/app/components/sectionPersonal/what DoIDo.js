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
import SwipeableCards from "./swipeableCards";
import WhatDoIDoCards from "./cardsWhatDoIDo";

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
        <div
            style={{
                padding: "3vh",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "2vw",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {" "}
            <Typography
                variant="h4"
                style={{
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                    fontWeight: "bold",
                    marginBottom: "6vh",
                    textAlign: "center",
                }}
            >
                WHAT DO I DO? 💻
            </Typography>
            <SwipeableCards skills={skills} theme={theme} />
        </div>
    ) : (
        <div>
            <WhatDoIDoCards skills={skills} theme={theme} />
        </div>
    );
};

export default WhatDoIDo;
