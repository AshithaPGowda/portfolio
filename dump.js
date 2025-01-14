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
                    <ProjectGrid projects={projects} onCardClick={handleCardClick} />
                ) : (
                    // Display Selected Project Details
                    <ProjectDetails project={selectedProject} onBackClick={handleBackClick} />
                )}
            </div>
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