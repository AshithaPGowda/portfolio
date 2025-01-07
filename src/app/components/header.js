import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import FrostedGlassSidebar from "./frostedSidebar";
import MenuItem from "./menuIcons";
import COLOURS from "../colours";
import CONSTANT from "../constants";
import { useRouter } from 'next/navigation';

export default function Header({ theme, toggleTheme, isActive}) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const menuItems = ["Home", "My Work"];
    const [activeIndex, setActiveIndex] = useState(isActive);
    const sidebarRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(theme === "LIGHT");
    const router = useRouter();

    // Check if the screen is small (mobile view)
    const isMobile = useMediaQuery("(max-width:600px)");

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleSectionChange = (index) => {
        setActiveSection(index);   
    };

    const handleItemClick = (index) => {
        setActiveIndex(index);
        let activePath = CONSTANT.MENUINDEX[index]
        setActiveSection(index); 
        router.push(activePath)
    };

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
        toggleTheme();
    };

    // Close sidebar when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
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
            <div style={{ width: "5vw", height: "8vh", borderRadius: "1vw" }}>
                <img src="apg.png" alt="APG Logo" style={{ width: "100%", height: "100%" }} />
            </div>

            {isMobile ? (
                <div style={{ display: "flex", alignItems: "center", gap: "8vw" }}>
                    {/* Dark/Light Mode Toggle Button */}
                    {!isSidebarOpen && (
                        <button
                            onClick={handleThemeToggle}
                            style={{
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "24px",
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
                    {/* Hamburger icon for sidebar toggle */}
                    {!isSidebarOpen && (
                        <button
                            onClick={handleSidebarToggle}
                            style={{
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "30px",
                                fontWeight: "bold",
                                color: COLOURS[`TEXT_COLOUR_${theme}`],
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Menu fontSize="inherit" />
                        </button>
                    )}

                    <FrostedGlassSidebar
                        isOpen={isSidebarOpen}
                        activeSection={activeSection}
                        onClose={handleSectionChange}
                        ref={sidebarRef}
                        theme={theme}
                    />

                    {isSidebarOpen && (
                        <button
                            onClick={handleSidebarToggle}
                            style={{
                                position: "fixed",
                                top: "20px",
                                right: "20px",
                                zIndex: 20,
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "30px",
                                color: COLOURS[`TEXT_COLOUR_${theme}`],
                            }}
                        >
                            <Close fontSize="inherit" />
                        </button>
                    )}
                </div>
            ) : (
                <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                    {isSidebarOpen ? null : (
                        <>
                            {menuItems.map((text, index) => (
                                <MenuItem
                                    key={index}
                                    text={text}
                                    index={index}
                                    isActive={activeIndex === index}
                                    onClick={() => handleItemClick(index)}
                                    theme={theme}
                                    toggleTheme={toggleTheme}
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
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
