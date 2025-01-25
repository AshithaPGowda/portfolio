import { Code, Cloud, GitHub, Security, Assessment, BugReport, Api, Settings, Psychology } from "@mui/icons-material";
import DynamicPython from "../../public/python";
import DynamicNode from "../../public/nodejs";
import DynamicPHP from "../../public/php";
import DynamicTypescript from "../../public/typescript";
import COLOURS from "./colours";

const CONSTANT = [];

CONSTANT.SKILLS = [
    {
        color: "#4CAF50",
        icon: <Code />,
        title: "Software Development",
        description: "Crafting robust and scalable solutions.",
        details: [
            <div
                key="dynamic-icons" // Add a unique key
                style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
                <DynamicNode
                    key="dynamic-node" // Unique key for this component
                    color={COLOURS[`BACKGROUND_LIGHT`]}
                    style={{
                        width: "50%",
                        height: "auto",
                        maxWidth: "60px",
                        margin: "0 auto",
                    }}
                />
                <DynamicPython
                    key="dynamic-python" // Unique key for this component
                    color={COLOURS[`BACKGROUND_LIGHT`]}
                    style={{
                        width: "50%",
                        height: "auto",
                        maxWidth: "60px",
                        margin: "0 auto",
                    }}
                />
                <DynamicPHP
                    key="dynamic-php" // Unique key for this component
                    color={"#4CAF50"}
                    style={{
                        width: "50%",
                        height: "auto",
                        maxWidth: "60px",
                        margin: "0 auto",
                    }}
                />
                <DynamicTypescript
                    key="dynamic-typescript" // Unique key for this component
                    color={COLOURS[`BACKGROUND_LIGHT`]}
                    style={{
                        width: "50%",
                        height: "auto",
                        maxWidth: "60px",
                        margin: "0 auto",
                    }}
                />
            </div>,
        ],
    },
    {
        color: "#8BC34A",
        icon: <Psychology />,
        title: "AI Algorithm Development",
        description: "Creating intelligent systems for real-world challenges.",
        details: "TensorFlow, PyTorch, Scikit-learn, AI Pipelines.",
    },
    {
        color: "#FF5722",
        icon: <Api />,
        title: "RESTful APIs",
        description: "Building efficient and scalable API integrations.",
        details: "REST API, GraphQL, WebSockets, CQRS, Microservices.",
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
];

export default CONSTANT;
