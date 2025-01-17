"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation"; // For routing
import Header from "../components/header";
import COLOURS from "../colours";
import ProjectGrid from "../components/projects/projectGrid";
import ProjectDetails from "../components/projects/projectDetails";
import CONSTANT from "../myProjects";

export default function Projects() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isActiveIndex = 2;
    const isMobile = useMediaQuery("(max-width:600px)");

    const currentYear = new Date().getFullYear();

    const getDefaultTheme = () => {
        let theme = sessionStorage.getItem('theme');
        if(!theme){
            theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "DARK" : "LIGHT";
        }
        return theme
    };
    const [theme, setTheme] = useState(getDefaultTheme); // Default to LIGHT
    sessionStorage.setItem('theme', theme);
    const [selectedProject, setSelectedProject] = useState(null);

    // Function to set project based on ID
    const setProjectFromId = (id) => {
        if (id) {
            const projectIndex = parseInt(id, 10); // Parse the id as an integer
            if (!isNaN(projectIndex) && projectIndex < CONSTANT.PROJECTS.length) {
                setSelectedProject(CONSTANT.PROJECTS[projectIndex]); // Set the project if valid
            }
        }
    };

    // On initial load, set selected project from URL
    useEffect(() => {
        // Ensure body and html take up full height of the screen
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.height = "100%";
        document.documentElement.style.height = "100%";
        const id = searchParams.get("id"); // Access query parameters
        if(!id && selectedProject!= null){
            setSelectedProject(null)
        }
        setProjectFromId(id); // Set project based on `id`
    }, [searchParams]); // Re-run when searchParams change

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'LIGHT' ? 'DARK' : 'LIGHT'));
        let theme = sessionStorage.getItem('theme');
        let newTheme = theme === 'LIGHT' ? 'DARK' : 'LIGHT'
        sessionStorage.setItem('theme', newTheme);
    };

    const handleCardClick = (project) => {
        setSelectedProject(project);
        // Update URL with shallow routing
        router.push(`/projects?id=${project.slug}`, undefined, { shallow: true });
    };

    const handleBackClick = () => {
        setSelectedProject(null);

        // Remove `id` from the URL
        router.push("/projects", undefined, { shallow: true });
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                width: "100vw",
                margin: 0,
                padding: 0,
                overflowX: "hidden",
                backgroundColor: COLOURS[`BACKGROUND_${theme}`],
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                    backgroundColor: COLOURS[`HEADER_${theme}`],
                    color: COLOURS[`TEXT_${theme}`],
                    position: "fixed",
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
                    marginTop: "-5vh",
                    backgroundColor: COLOURS[`BACKGROUND_${theme}`],
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                }}
            >
                {selectedProject === null ? (
                    <ProjectGrid projects={CONSTANT.PROJECTS} onCardClick={handleCardClick} theme={theme} isMobile = {isMobile}/>
                ) : (
                    <ProjectDetails project={selectedProject} onBackClick={handleBackClick} theme={theme} />
                )}
            </div>

            {/* Footer */}
            <div
                style={{
                    padding: "10px 10px",
                    backgroundColor: COLOURS[`BACKGROUND_${theme}`],
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                    textAlign: "center",
                    marginTop: "auto",
                }}
            >
                <p>&#169; Ashitha Gowda {currentYear}</p>
            </div>
        </div>
    );
}
