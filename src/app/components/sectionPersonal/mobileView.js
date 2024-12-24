"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const PersonalMobile = ({ theme }) => {
    const [isClicked, setIsClicked] = useState(false); // Track click state
    const [showMessage, setShowMessage] = useState(false); // Track message visibility
    const [clickedOnce, setClickedOnce] = useState(false); // Track if clicked at least once

    useEffect(() => {
        // Show the message after 2 seconds
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    useEffect(() => {
        // Show the message after 2 seconds
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "30px",
                flexWrap: "wrap",
                padding: "30px",
                backgroundColor: theme === "LIGHT" ? "#fdfdfd" : "#2c2c2c",
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {/* Left: Information */}
            <div style={{ flex: 2, minWidth: "300px" }}>
                <h1
                    style={{
                        color: theme === "LIGHT" ? "#222" : "#eee",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        display: "flex",
                        flexDirection: "column", // Stacks text for smaller screens
                        gap: "5px",
                    }}
                >
                    <span>Hey there! 👋 I'm</span>
                    <span
                        style={{
                            color: theme === "LIGHT" ? "#9268A5" : "#67d6f3",
                            animation: "fade-expand 2s ease-out",
                            display: "inline-block",
                        }}
                    >
                        Ashitha Paramesha Gowda
                    </span>
                </h1>
                <style>
                    {`
          @keyframes fade-expand {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.1);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          `}
                </style>

                <p
                    style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        color: theme === "LIGHT" ? "#444" : "#ddd",
                        marginTop: "20px",
                    }}
                >
                    🚀 Backend specialist focused on designing smart solutions to complex challenges. Whether it's building
                    robust APIs 💻, exploring cutting-edge AI technologies 🤖, or diving into blockchain innovation 🔗, I am
                    always driven to create impactful, high-quality work.
                </p>
                <p
                    style={{
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        color: theme === "LIGHT" ? "#555" : "#bbb",
                    }}
                >
                    I bring a blend of technical expertise and creativity to every project. With a passion for problem-solving
                    and a commitment to continuous learning 📚, I look forward to collaborating and delivering results that
                    matter. Let's create something remarkable together!
                </p>
            </div>
                <div
                    style={{
                        left: '6vw',
                        position: "relative",
                        width: "60vw",
                        height: "30vh",
                        borderRadius: "50%",
                        overflow: "hidden",
                        boxShadow: theme === "LIGHT" ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "0 8px 16px rgba(0, 0, 0, 0.5)",
                        transition: "box-shadow 0.3s ease",
                    }}
                    onClick={() => {
                        setIsClicked(!isClicked);
                        if (!clickedOnce) setClickedOnce(true);
                    }}
                >
                    {/* Default Image */}
                    <Image
                        src="/animated.webp"
                        alt="Ashitha Paramesha Gowda"
                        width={200}
                        height={200}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "60% 40%",
                            opacity: isClicked ? 0 : 1,
                            transition: "opacity 0.5s ease",
                        }}
                    />
                    {/* Clicked Image */}
                    <Image
                        src="/pp.png"
                        alt="Ashitha Paramesha Gowda Clicked Image"
                        width={200}
                        height={200}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "60% 40%",
                            opacity: isClicked ? 1 : 0,
                            transition: "opacity 0.5s ease",
                        }}
                    />
                </div>

        </div>
    );
};

export default PersonalMobile;
