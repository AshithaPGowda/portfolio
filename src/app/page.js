"use client";
import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import UserProfile from "./home/page";
import COLOURS from "./colours";
import Header from "./components/header";

export default function Home() {
    const [isVisible, setIsVisible] = useState(true); // State to control visibility of the animation
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const isActiveIndex = 0;

    const getDefaultTheme = () => {
        let theme = sessionStorage.getItem('theme');
        if(!theme){
            theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "DARK" : "LIGHT";
        }
        return theme
    };
    const [theme, setTheme] = useState(getDefaultTheme); // Default to LIGHT
    sessionStorage.setItem('theme', theme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'LIGHT' ? 'DARK' : 'LIGHT'));
        let theme = sessionStorage.getItem('theme');
        let newTheme = theme === 'LIGHT' ? 'DARK' : 'LIGHT'
        sessionStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        // Check if the animation has already been played in the current session
        const animationFlag = sessionStorage.getItem('animationPlayed');
        
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
            sessionStorage.setItem('animationPlayed', 'true'); // Set flag in sessionStorage
        } else {
            setAnimationPlayed(true); // Animation has already been played
            setIsVisible(false); // Directly show content if animation was already played
        }
    }, []);


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
                    <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                        <text x="50" y="100" className="letter" fontSize="80" fontWeight="bold">
                            A
                        </text>
                        <text x="120" y="100" className="letter" fontSize="80" fontWeight="bold">
                            P
                        </text>
                        <text x="190" y="100" className="letter" fontSize="80" fontWeight="bold">
                            G
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
                        backgroundColor: "#FFFFFF",
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
                    <UserProfile theme={theme} timelineColours={COLOURS.TIMELINECOLOURS}/>
                </div>
            )}
        </div>
    );
}
