"use client";

import COLOURS from "@/app/colours";
import Image from "next/image";
import { useState, useEffect } from "react";

const PersonalDesktop = ({ theme }) => {
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    const [showMessage, setShowMessage] = useState(false); // Track message visibility
    const [hoveredOnce, setHoveredOnce] = useState(false); // Track message visibility

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
                        color: theme === "LIGHT" ? COLOURS.TEXT_COLOUR_LIGHT : COLOURS.TEXT_COLOUR_DARK,
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
                        color: theme === "LIGHT" ? COLOURS.TEXT_COLOUR_LIGHT : COLOURS.TEXT_COLOUR_DARK,
                        marginTop: "20px",
                    }}
                >
                            🌟 An adventurer at heart, I thrive on curiosity and exploration. Whether it's decoding life's mysteries or learning
                            something new every day, I'm drawn to challenges that spark creativity and growth.  
                </p>
                <p
                    style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        color: theme === "LIGHT" ? COLOURS.TEXT_COLOUR_LIGHT : COLOURS.TEXT_COLOUR_DARK,
                    }}
                >
                    💬 I’m a strong believer in collaboration and empathy, always striving to uplift those around me. If there’s one thing I value deeply, it's meaningful connections and making a positive impact in every space I occupy.  
                    🎨 Outside work, you’ll find me immersed in art, experimenting in the kitchen, or on a quest to discover the best local coffee shops. Life, for me, is about crafting beautiful experiences—both in and outside the code.
                </p>
            </div>

            {/* Right: Photo */}
            <div
                style={{
                    display: "flex", // Use flexbox for centering the image
                    justifyContent: "center", // Center the image horizontally
                    alignItems: "center", // Center the image vertically
                    width: "280px", // Adjust the size as needed, or use percentage for responsiveness
                    height: "280px",
                    borderRadius: "50%",
                    overflow: "hidden", // Prevents image overflow
                    boxShadow: theme === "LIGHT" ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "0 8px 16px rgba(0, 0, 0, 0.5)",
                    transition: "box-shadow 0.3s ease",
                    marginLeft: "2vw",
                }}
            >
                {/* Hover text */}
                {showMessage && !isHovered && !hoveredOnce &&(
                    <div
                        style={{
                            position: "absolute",
                            top: "20vh",
                            right: "13vw",
                            zIndex: 10, // Higher z-index to appear above photo
                            fontSize: "1rem",
                            fontWeight: "bold",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            animation: "fadeOut 3s ease",
                        }}
                    >
                        <div
                            style={{
                                width: "3vw",
                                height: "5vh",
                                backgroundImage: `url('curved-arrow-4635.svg')`,
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
                        display: "flex", // Use flexbox for centering the image
                        justifyContent: "center", // Center the image horizontally
                        alignItems: "center", // Center the image vertically
                        width: "280px", // Adjust the size as needed, or use percentage for responsiveness
                        height: "280px",
                        borderRadius: "50%",
                        overflow: "hidden", // Prevents image overflow
                        boxShadow: theme === "LIGHT" ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "0 8px 16px rgba(0, 0, 0, 0.5)",
                        transition: "box-shadow 0.3s ease",
                    }}
                    onMouseEnter={() => {setIsHovered(true)
                        if(!hoveredOnce){
                            setHoveredOnce(true)
                        }
                    }}
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

export default PersonalDesktop;
