import { Code, Cloud, GitHub, Security, Assessment, BugReport, Api, Settings, Psychology } from "@mui/icons-material";
import DynamicPython from "../../public/python";
import DynamicNode from "../../public/nodejs";
import DynamicPHP from "../../public/php";
import DynamicTypescript from "../../public/typescript";
import COLOURS from "./colours";

const CONSTANT = [];

CONSTANT.MENUINDEX = {
    0 :'/',
    1: "/projects",
};

CONSTANT.PROJECTS = [
    { 
      title: "XOXO Game",
      description: "A fun tic-tac-toe game built with React.",
      cardBackgroundColor: "#E5E1DA",
      media: [
          "pp.png",
          "https://via.placeholder.com/200",
      ],
      details: {
          "Technologies Used": "React, JavaScript, HTML, CSS",
          "Role": "Frontend Developer",
          "Duration": "2 months",
          "Collaborators": "John Doe, Jane Smith",
      },
      features: [
          "Single and multiplayer modes",
          "Responsive design for all devices",
          "Save and resume game feature",
          "AI-powered opponent",
      ],
    },
    { 
      title: "Project 2", 
      description: "Project 2 description", 
      cardBackgroundColor: "#33FF57",
      toolTipText: "Personal Project" 
    },
    { 
      title: "Project 3", 
      description: "Project 3 description", 
      cardBackgroundColor: "#3357FF",
      toolTipText: "Professional Project" 
    },
    { 
      title: "Project 4", 
      description: "Project 4 description", 
      cardBackgroundColor: "#FF33A1",
      toolTipText: "Academic Project"
    },
    { 
      title: "Project 5", 
      description: "Project 5 description", 
      cardBackgroundColor: "#A1FF33",
      toolTipText: "Personal Project"
    },
    { 
      title: "Project 6", 
      description: "Project 6 description", 
      cardBackgroundColor: "#33A1FF",
      toolTipText: "Professional Project"
    },
    { 
      title: "Project 7", 
      description: "Project 7 description", 
      cardBackgroundColor: "#FF9833",
      toolTipText: "Academic Project"
    },
    { 
      title: "Project 8", 
      description: "Project 8 description", 
      cardBackgroundColor: "#FF33FF",
      toolTipText: "Personal Project"
    }
  ];

CONSTANT.SKILLS = [
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

export default CONSTANT;
