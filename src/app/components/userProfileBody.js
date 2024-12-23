"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ProfileSection = ({ theme }) => {
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    const [showMessage, setShowMessage] = useState(false); // Track message visibility

    useEffect(() => {
        // Show the message after 20 seconds
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 20000);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    return (
        <div
            style={{
                display: "flex",
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
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    Hey there! 👋 I'm{" "}
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

            {/* Right: Photo */}
            <div
                style={{
                    flex: 1,
                    textAlign: "center",
                    minWidth: "250px",
                    position: "relative", // Required for positioning overlay
                }}
            >
                {/* Hover text */}
                {showMessage && !isHovered && (
                    <div
                        style={{
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            zIndex: 10, // Higher z-index to appear above photo
                            fontSize: "0.9rem",
                            fontWeight: "bold",
                            color: theme === "LIGHT" ? "#555" : "#ddd",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            animation: "fadeIn 1s ease",
                        }}
                    >
                        <span>Hover over me</span>
                        <div
                            style={{
                                width: "30px",
                                height: "30px",
                                backgroundImage: `url('path/to/curly-arrow.svg')`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                animation: "bounce 2s infinite",
                            }}
                        ></div>
                    </div>
                )}

                <style>
                    {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          `}
                </style>

                <div
                    style={{
                        position: "relative",
                        width: "280px",
                        height: "280px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        boxShadow: theme === "LIGHT" ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "0 8px 16px rgba(0, 0, 0, 0.5)",
                        transition: "box-shadow 0.3s ease",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Default Image */}
                    <Image
                        src="/animated.webp"
                        alt="Ashitha Paramesha Gowda"
                        width={280}
                        height={280}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "60% 40%",
                            transition: "opacity 0.5s ease",
                            opacity: isHovered ? 0 : 1,
                        }}
                    />
                    {/* Hover Image */}
                    <Image
                        src="/pp.png"
                        alt="Ashitha Paramesha Gowda Hover Image"
                        width={280}
                        height={280}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "60% 40%",
                            transition: "opacity 0.5s ease",
                            opacity: isHovered ? 1 : 0,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
