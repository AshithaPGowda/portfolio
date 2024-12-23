"use client";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material"; // Import for media query
import { Menu, Close, Brightness7, Brightness2 } from "@mui/icons-material"; // Import icons
import FrostedGlassSidebar from "./frostedSidebar";
import MenuItem from "./menuIcons";
import COLOURS from "../colours";

export default function Header({ theme, toggleTheme }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar starts closed
    const [activeSection, setActiveSection] = useState(null);
    const menuItems = ["Home", "Education", "My Work"];
    const [activeIndex, setActiveIndex] = useState(0);
    const sidebarRef = useRef(null);

    // Check if the screen is small (mobile view)
    const isMobile = useMediaQuery("(max-width:600px)");

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
    };

    const handleSectionChange = (index) => {
        setActiveSection(index); // Update the active section
    };

    const handleItemClick = (index) => {
        console.log("Selection clicked, ", index); // Notify parent component of section change
        setActiveIndex(index);
    };

    // Close sidebar when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false); // Close the sidebar if clicked outside
            }
        };

        // Add event listener to detect outside clicks
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                backgroundColor: COLOURS[`BACKGROUND_${theme}`], // Dynamic background for the header
                color: COLOURS[`TEXT_${theme}`], // Dynamic text color
                position: "fixed", // Keep header fixed at the top
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
            }}
        >
            {/* Placeholder for logo */}
            <div style={{ width: "50px", height: "50px", borderRadius: "8px" }}>
                <img src="apg.png" alt="APG Logo" style={{ width: "100%", height: "100%" }} />
            </div>

            {isMobile ? (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {/* Hamburger icon for sidebar toggle */}
                    {!isSidebarOpen && (
                        <button
                            onClick={handleSidebarToggle}
                            style={{
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "30px", // Size of the icon
                                fontWeight: "bold",
                                color: COLOURS[`TEXT_COLOUR_${theme}`], // Icon color
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Menu fontSize="large" />
                        </button>
                    )}

                    {/* Dark/Light Mode Toggle Button */}
                    {!isSidebarOpen && (
                        <button
                            onClick={toggleTheme}
                            style={{
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "24px",
                                color: COLOURS[`TEXT_COLOUR_${theme}`], // Icon color based on theme
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {theme === "LIGHT" ? <Brightness2 fontSize="medium" /> : <Brightness7 fontSize="medium" />}
                        </button>
                    )}

                    {/* Sidebar component */}
                    <FrostedGlassSidebar
                        isOpen={isSidebarOpen}
                        activeSection={activeSection}
                        onClose={handleSectionChange}
                        ref={sidebarRef} // Attach ref to the sidebar
                        theme = {theme}
                    />

                    {/* Close button positioned on top of sidebar (only visible when sidebar is open) */}
                    {isSidebarOpen && (
                        <button
                            onClick={handleSidebarToggle}
                            style={{
                                position: "fixed",
                                top: "20px", // Adjust based on where you want it
                                right: "20px", // Place it on the right
                                zIndex: 20, // Ensure it appears above the sidebar
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "30px",
                                color: COLOURS[`TEXT_COLOUR_${theme}`],
                            }}
                        >
                            <Close fontSize="large" />
                        </button>
                    )}
                </div>
            ) : (
                // Desktop View
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    {isSidebarOpen ? null : ( // Only show the menu items when sidebar is closed
                        <>
                            {menuItems.map((text, index) => (
                                <MenuItem
                                    key={index}
                                    text={text}
                                    index={index}
                                    isActive={activeIndex === index} // Check if the item is active
                                    onClick={() => handleItemClick(index)}
                                    theme={theme}
                                    toggleTheme={toggleTheme}
                                />
                            ))}
                            <button
                                onClick={toggleTheme}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    marginLeft: "20px",
                                    fontSize: "24px",
                                    color: COLOURS[`TEXT_COLOUR_${theme}`], // Icon color based on theme
                                }}
                            >
                                {theme === "LIGHT" ? <Brightness2 /> : <Brightness7 />}
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
