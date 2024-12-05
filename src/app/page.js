"use client";
import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import UserProfile from "./userProfile";

export default function Home() {
    const [isVisible, setIsVisible] = useState(true); // State to control SVG visibility

    useEffect(() => {
        // Animate the letters "APG" with the specified colors and animations
        anime({
            targets: ".letter",
            opacity: [0, 1], // Fading in
            translateY: [-50, 0], // Moving up from -50px
            duration: 2000,
            delay: anime.stagger(100), // Stagger each letter's animation
            easing: "easeOutElastic(1, .8)",
            loop: false, // Animation stops after one complete loop
            direction: "alternate", // Alternate between forward and backward
            // Brighter and more interesting colors with faster transitions
            fill: ["#E6D9A2", "#1F4529", "#FA4032", "#2A3663", "#CEDF9F", "#E5D9F2", "#FF8A8A", "#624E88"], // New color scheme
            complete: () => {
                // After 3 seconds, hide the SVG element
                setTimeout(() => {
                    setIsVisible(false); // Set visibility state to false after animation
                }, 2000);
            },
        });
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            {/* Conditionally render the SVG based on isVisible state */}
            {isVisible && (
                <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                    {/* Letter A */}
                    <text x="50" y="100" className="letter" fontSize="80" fontWeight="bold">
                        A
                    </text>

                    {/* Letter P */}
                    <text x="120" y="100" className="letter" fontSize="80" fontWeight="bold">
                        P
                    </text>

                    {/* Letter G */}
                    <text x="190" y="100" className="letter" fontSize="80" fontWeight="bold">
                        G
                    </text>
                </svg>
            )}
            {!isVisible && (<><UserProfile></UserProfile></>)}
        </div>
    );
}
