"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import COLOURS from "@/app/colours";

const PersonalMobile = ({ theme }) => {
    const [isClicked, setIsClicked] = useState(false); // Track click state
    const [clickedOnce, setClickedOnce] = useState(false); // Track if clicked at least once


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "30px",
                flexWrap: "wrap",
                padding: "30px",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {/* Left: Information */}
            <div style={{ flex: 2, minWidth: "300px" }}>
                <h1
                    style={{
                        color: COLOURS[`TEXT_COLOUR_${theme}`],
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
                            color: COLOURS[`SPECIAL_TEXT_COLOUR_${theme}`],
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
                        color: COLOURS[`TEXT_COLOUR_${theme}`],
                        marginTop: "20px",
                    }}
                >
                    I'm a full-stack developer with a focus on backend engineering and API development, tackling complex
                    problems to create scalable, high-performance solutions. I work with Node.js, Next.js, React, and
                    blockchain to build systems that work seamlessly. At cnotes.in, I designed a custom algorithm to predict
                    monthly billing for over 30,000 customers. Always exploring AI in tech, I thrive on collaborating with
                    teams to innovate and solve challenges. When I'm not coding, I'm learning something new or pushing myself
                    to improve.
                </p>
                <p
                    style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        color: COLOURS[`TEXT_COLOUR_${theme}`],
                    }}
                >
                    💬 I'm a strong believer in collaboration and empathy, always striving to uplift those around me. If
                    there's one thing I value deeply, it's meaningful connections and making a positive impact in every space
                    I occupy. 🎨 Outside work, you'll find me immersed in art, experimenting in the kitchen, or on a quest to
                    discover the best local coffee shops. Life, for me, is about crafting beautiful experiences—both in and
                    outside the code.
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
