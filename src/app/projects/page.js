"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Header from "../components/header";
import COLOURS from "../colours";
import ProjectGrid from "../components/projects/projectGrid";
import ProjectDetails from "../components/projects/projectDetails";
import BackButton from "../components/projects/backButton";

const projects = [
    { title: "Project 1", description: "Project 1 description" },
    { title: "Project 2", description: "Project 2 description" },
    { title: "Project 3", description: "Project 3 description" },
    { title: "Project 4", description: "Project 4 description" },
    { title: "Project 5", description: "Project 5 description" },
    { title: "Project 6", description: "Project 6 description" },
    { title: "Project 7", description: "Project 7 description" },
    { title: "Project 8", description: "Project 8 description" },
];

export default function Projects() {
    const isActiveIndex = 2;
    const isMobile = useMediaQuery("(max-width:600px)");

    const currentYear = new Date().getFullYear();

    const getDefaultTheme = () => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "DARK" : "LIGHT";
    };
    const [theme, setTheme] = useState(getDefaultTheme); // Default to LIGHT
    const [selectedProject, setSelectedProject] = useState(null); // Track selected project

    useEffect(() => {
        // Ensure body and html take up full height of the screen
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.height = "100%";
        document.documentElement.style.height = "100%";
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "LIGHT" ? "DARK" : "LIGHT"));
    };

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleBackClick = () => {
        setSelectedProject(null); // Go back to the card view
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh", // Full screen height
                width: "100vw", // Full screen width
                margin: 0, // Remove margin
                padding: 0, // Remove padding
                overflow_x: "hidden", // Prevent overflow
                backgroundColor: COLOURS[`BACKGROUND_${theme}`], // Dynamic background color
            }}
        >
            {/* Custom Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                    backgroundColor: COLOURS[`HEADER_${theme}`], // Dynamic header color
                    color: COLOURS[`TEXT_${theme}`], // Dynamic text color
                    position: "fixed", // Keep header fixed at the top
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                }}
            >
                <Header theme={theme} toggleTheme={toggleTheme} isActive={isActiveIndex} />
            </div>

            {/* Main Content */}
            <div
                style={{
                    flexGrow: 1,
                    padding: "22vh 5vh",
                    marginTop: "-5vh", // Space for fixed header
                    backgroundColor: COLOURS[`BACKGROUND_${theme}`], // Dynamic background color
                    color: COLOURS[`TEXT_COLOUR_${theme}`], // Dynamic text color
                }}
            >
                {selectedProject === null ? (
                    // Display Project Cards
                    <ProjectGrid projects={projects} onCardClick={handleCardClick} theme ={theme} />
                ) : (
                    // Display Selected Project Details
                    <ProjectDetails project={selectedProject} onBackClick={handleBackClick} />
                )}
            </div>

            {/* Custom Footer */}
            <div
                style={{
                    padding: "10px 10px",
                    backgroundColor: COLOURS[`BACKGROUND_${theme}`], // Dynamic footer color
                    color: COLOURS[`TEXT_COLOUR_${theme}`], // Dynamic footer text color
                    textAlign: "center",
                    marginTop: "auto",
                }}
            >
                <p>&#169; Ashitha Gowda {currentYear}</p>
            </div>
        </div>
    );
}
