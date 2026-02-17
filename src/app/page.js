"use client";
import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import UserProfile from "./components/sectionPersonal/userProfile";
import COLOURS from "./colours";
import Header from "./components/header";

export default function Home() {
    const [isVisible, setIsVisible] = useState(true); // State to control visibility of the animation
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const isActiveIndex = 0;

    const getDefaultTheme = () => {
        if (typeof window !== "undefined") {
            // This check ensures the code is running in the browser
            let theme = sessionStorage.getItem("theme");
            if (!theme) {
                theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "DARK" : "LIGHT";
                sessionStorage.setItem("theme", theme); // Set the default theme in sessionStorage
            }
            return theme;
        }
        return "LIGHT"; // Fallback for server-side rendering
    };

    const [theme, setTheme] = useState(getDefaultTheme()); // Initialize with the correct theme

    const toggleTheme = () => {
        if (typeof window !== "undefined") {
            setTheme((prevTheme) => {
                const newTheme = prevTheme === "LIGHT" ? "DARK" : "LIGHT";
                sessionStorage.setItem("theme", newTheme); // Update sessionStorage
                return newTheme;
            });
        }
    };

    // Update body background when theme changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.body.style.backgroundColor = COLOURS[`BACKGROUND_${theme}`];
            document.documentElement.style.backgroundColor = COLOURS[`BACKGROUND_${theme}`];
        }
    }, [theme]);

    useEffect(() => {
        // Check if the animation has already been played in the current session
        const animationFlag = sessionStorage.getItem("animationPlayed");

        if (!animationFlag) {
            // If not, run the animation and set the flag in sessionStorage
            anime({
                targets: ".letter",
                opacity: [0, 1], // Fading in
                translateY: [-50, 0], // Moving up from -50px
                duration: 2000,
                delay: anime.stagger(100), // Stagger each letter's animation
                easing: "easeOutElastic(1, .8)",
                loop: false, // Animation stops after one complete loop
                direction: "alternate", // Alternate between forward and backward
                fill: ["#E6D9A2", "#1F4529", "#FA4032", "#2A3663", "#CEDF9F", "#E5D9F2", "#FF8A8A", "#624E88 "],
                complete: () => {
                    // After 3 seconds, switch to the "home" content
                    setTimeout(() => {
                        setIsVisible(false);
                    }, 1200);
                },
            });
            sessionStorage.setItem("animationPlayed", "true"); // Set flag in sessionStorage
        } else {
            setAnimationPlayed(true); // Animation has already been played
            setIsVisible(false); // Directly show content if animation was already played
        }
    }, []);

    if (theme === null) {
        return null; // Prevent rendering until theme is set
    }

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            {isVisible ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <svg width="300" height="150" viewBox="0 0 300 150">
                        <text x="50" y="100" fontSize="80" fontWeight="bold" textAnchor="start">
                            <tspan className="letter">A</tspan>
                            <tspan className="letter" dx="20">
                                P
                            </tspan>
                            <tspan className="letter" dx="20">
                                G
                            </tspan>
                        </text>
                    </svg>
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        backgroundColor: COLOURS[`BACKGROUND_${theme}`],
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
                    <UserProfile theme={theme} timelineColours={COLOURS.TIMELINECOLOURS} />
                </div>
            )}
        </div>
    );
}
