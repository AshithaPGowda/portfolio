"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Header from "../components/header";
import COLOURS from "../colours";
import WhatDoIDo from "../components/sectionPersonal/what DoIDo";
import Footer from "../components/footerContent/customFooter";

export default function SkillsPage() {
    const isActiveIndex = 1;
    const isMobile = useMediaQuery("(max-width:600px)");

    const getDefaultTheme = () => {
        if (typeof window !== "undefined") {
            let theme = sessionStorage.getItem('theme');
            if(!theme){
                theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "DARK" : "LIGHT";
            }
            return theme;
        }
        return "LIGHT";
    };

    const [theme, setTheme] = useState(getDefaultTheme);

    useEffect(() => {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.height = "100%";
        document.documentElement.style.height = "100%";
    }, []);

    // Update body background when theme changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.body.style.backgroundColor = COLOURS[`BACKGROUND_${theme}`];
            document.documentElement.style.backgroundColor = COLOURS[`BACKGROUND_${theme}`];
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'LIGHT' ? 'DARK' : 'LIGHT';
            if (typeof window !== "undefined") {
                sessionStorage.setItem('theme', newTheme);
            }
            return newTheme;
        });
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
                    padding: "50px 20px",
                    marginTop: "12vh",
                    backgroundColor: COLOURS[`BACKGROUND_${theme}`],
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                }}
            >
                <WhatDoIDo theme={theme} />
            </div>

            {/* Footer */}
            <Footer theme={theme} isMobile={isMobile}/>
        </div>
    );
}
