"use client";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material"; // Import for media query
import FrostedGlassSidebar from "./frostedSidebar";
import MenuItem from "./menuIcons";

export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar starts closed
    const [activeSection, setActiveSection] = useState(null);
    const menuItems = ["Home", "Education","My Work"];
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
        console.log("seelction clicked, ", index); // Notify parent component of section change
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
                padding: "20px",
                backgroundColor: "#FFFFFF", // White background for the header
                color: "#000000", // Black color for text
                position: "fixed", // Keep header fixed at the top
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
            }}
        >
            {/* Placeholder for logo */}
            <div style={{ width: "50px", height: "50px", backgroundColor: "#ffffff", borderRadius: "8px" }}>
                {/* Replace the div with an <img> tag once the logo is ready */}
                <img src="apg.png" alt="APG Logo" style={{ width: "100%", height: "100%" }} />
            </div>

            {/* If it's mobile view, show the hamburger icon */}
            {isMobile ? (
                <>
                    {/* Hamburger or "X" icon for sidebar toggle */}
                    <button
                        onClick={handleSidebarToggle}
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "30px", // Size of the icon
                            fontWeight: "bold",
                            color: "#000", // Icon color
                        }}
                    >
                        {isSidebarOpen ? "X" : "☰"} {/* Show X when open, ☰ (hamburger) when closed */}
                    </button>

                    {/* Sidebar component */}
                    <FrostedGlassSidebar
                        isOpen={isSidebarOpen}
                        activeSection={activeSection}
                        onClose={handleSectionChange}
                        ref={sidebarRef} // Attach ref to the sidebar
                    />
                </>
            ) : (
                // If it's desktop view, show the top navigation bar
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    {menuItems.map((text, index) => (
                        <MenuItem
                            key={index}
                            text={text}
                            index={index}
                            isActive={activeIndex === index} // Check if the item is active // Highlight active item
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
