import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import MenuItem from "./menuIcons";
import COLOURS from "../colours";
import CONSTANT from "../constants";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header({ theme, toggleTheme, isActive }) {
    const [isMenuOpen, setMenuOpen] = useState(false); // State to control menu visibility
    const [activeSection, setActiveSection] = useState(null);
    const [activeIndex, setActiveIndex] = useState(isActive);
    const [isDarkMode, setIsDarkMode] = useState(theme === "LIGHT");
    const router = useRouter();

    const isMobile = useMediaQuery("(max-width:600px)");

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    const handleItemClick = (index) => {
        setActiveIndex(index);
        let activePath = CONSTANT.MENUINDEX[index];
        setActiveSection(index);
        router.push(activePath);
        setMenuOpen(false); // Close the menu after clicking an item
    };

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
        toggleTheme();
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2vw",
                backgroundColor: COLOURS[`BACKGROUND_${theme}`],
                color: COLOURS[`TEXT_${theme}`],
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
            }}
        >
            <div style={{ width: "5vw", height: "8vh", borderRadius: "1vw", position: "relative", overflow: "hidden" }}>
                <Image
                    src={`/APG_${theme}.svg`} // Use a relative path starting from the public directory
                    alt="APG Logo"
                    layout="fill" // Ensures the image fills the parent container
                    objectFit="cover" // Adjusts how the image is resized
                    quality={100} // Optional: Adjust image quality
                    priority // Optional: Ensures the image is loaded eagerly
                />
            </div>

            {isMobile ? (
                <div style={{ display: "flex", alignItems: "center", gap: "8vw" }}>
                    {/* Dark/Light Mode Toggle Button  */}
                    {!isMenuOpen && (
                        <button
                            onClick={handleThemeToggle}
                            style={{
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "7vw",
                                color: COLOURS[`ICON_COLOUR_${theme}`],
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    opacity: isDarkMode ? 1 : 0,
                                    transition: "opacity 0.3s ease-in-out",
                                }}
                            >
                                <WbSunnyTwoToneIcon fontSize="inherit" />
                            </span>
                            <span
                                style={{
                                    position: "absolute",
                                    opacity: isDarkMode ? 0 : 1,
                                    transition: "opacity 0.3s ease-in-out",
                                }}
                            >
                                <DarkModeTwoToneIcon fontSize="inherit" />
                            </span>
                        </button>
                    )}

                    {/* Hamburger icon for menu toggle */}
                    {!isMenuOpen && (
                        <button
                            onClick={handleMenuToggle}
                            style={{
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "8vw",
                                fontWeight: "bold",
                                color: COLOURS[`TEXT_COLOUR_${theme}`],
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                                transition: "all 0.3s ease", // Add transition for smooth effect
                            }}
                        >
                            <Menu
                                fontSize="inherit"
                                style={{
                                    opacity: isMenuOpen ? 0 : 1,
                                    transform: isMenuOpen ? "scale(0)" : "scale(1)", // Scale down when closing
                                    transition: "all 0.3s ease", // Smooth transition for scaling
                                }}
                            />
                        </button>
                    )}

                    {/* Menu items displayed when the menu is open */}
                    {isMenuOpen && (
                        <div
                            style={{
                                position: "absolute",
                                width: "25vw",
                                top: "2vh",
                                right: "13vw",
                                backgroundColor: COLOURS[`BACKGROUND_${theme}`],
                                padding: "2vw",
                                borderRadius: "1vh",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                display: "flex",
                                flexDirection: "row",
                                gap: "7vw",
                                transform: "translateX(100%)", // Start off-screen (to the right)
                                opacity: 0,
                                animation: isMenuOpen ? "slideIn 0.5s forwards" : "slideOut 0.5s forwards", // Apply animation when open
                            }}
                        >
                            <style>
                                {`@keyframes slideIn {
                                    from {
                                        transform: translateX(100%);
                                        opacity: 0;
                                    }
                                    to {
                                        transform: translateX(0);
                                        opacity: 1;
                                    }
                                    }
                                `}
                                {`@keyframes slideOut {
                                    from {
                                        transform: translateX(0%);
                                        opacity: 1;
                                    }
                                    to {
                                        transform: translateX(10%);
                                        opacity: 0;
                                    }
                                    }
                                `}
                            </style>
                            {["Home", "My Work"].map((text, index) => (
                                <MenuItem
                                    key={index}
                                    text={text}
                                    index={index}
                                    isActive={activeIndex === index}
                                    onClick={() => handleItemClick(index)}
                                    theme={theme}
                                    size="10vw"
                                />
                            ))}

                            <button
                                onClick={handleMenuToggle} // Close the menu
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "-10vw",
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "5vw",
                                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                                }}
                            >
                                <Close
                                    fontSize="inherit"
                                    style={{
                                        opacity: isMenuOpen ? 1 : 0,
                                        transform: isMenuOpen ? "scale(1)" : "scale(0)", // Show the close icon with scale
                                        transition: "all 0.3s ease", // Smooth transition for scale
                                    }}
                                />
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                    {/* Desktop version */}
                    {["Home", "My Work"].map((text, index) => (
                        <MenuItem
                            key={index}
                            text={text}
                            index={index}
                            isActive={activeIndex === index}
                            onClick={() => handleItemClick(index)}
                            theme={theme}
                        />
                    ))}

                    <button
                        onClick={handleThemeToggle}
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            marginRight: "2vw",
                            fontSize: "2.5vw",
                            color: COLOURS[`ICON_COLOUR_${theme}`],
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <span
                            style={{
                                position: "absolute",
                                opacity: isDarkMode ? 1 : 0,
                                transition: "opacity 0.3s ease-in-out",
                            }}
                        >
                            <WbSunnyTwoToneIcon fontSize="inherit" />
                        </span>
                        <span
                            style={{
                                position: "absolute",
                                opacity: isDarkMode ? 0 : 1,
                                transition: "opacity 0.3s ease-in-out",
                            }}
                        >
                            <DarkModeTwoToneIcon fontSize="inherit" />
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
}
