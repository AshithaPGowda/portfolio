"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import COLOURS from "@/app/colours";

const SwipeableCards = ({ skills, theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length), // Loop to the first card
        onSwipedRight: () =>
            setCurrentIndex((prevIndex) =>
                (prevIndex - 1 + skills.length) % skills.length // Loop to the last card
            ),
    });

    return (
        <div
            {...handlers}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1vw",
                padding: "1vh",
                position: "relative",
                height: "60vh", // Ensure proper vertical alignment
                overflow: "hidden",
            }}
        >
            <Typography
                variant="h4"
                style={{
                    color: COLOURS[`TEXT_COLOUR_SECTION_${theme}`],
                    fontWeight: "bold",
                    marginBottom: "6vh",
                    textAlign: "center",
                }}
            >
                What Do I Do? 💻
            </Typography>
            <div
                style={{
                    position: "relative",
                    width: "85%", // Increased width for better appearance
                    height: "100%", // Container height for consistent layout
                    left: "-5%", // Slight left alignment
                }}
            >
                {/* Display three cards (current, next, previous) */}
                {[currentIndex, (currentIndex + 1) % skills.length, (currentIndex - 1 + skills.length) % skills.length].map(
                    (index, idx) => {
                        const skill = skills[index];
                        return (
                            <Card
                                key={index}
                                style={{
                                    width: "100%",
                                    height: "80%",
                                    textAlign: "center",
                                    padding: "2vh",
                                    borderRadius: "2vw",
                                    backgroundColor: skill.color,
                                    boxShadow: "0 60px 20px rgba(0, 0, 0, 0.1)",
                                    position: "absolute",
                                    top: `${idx * 5}%`, // Stack the cards with slight vertical offset
                                    zIndex: 3 - idx, // Higher index for the front card
                                    transform:
                                        idx === 1
                                            ? "rotate(15deg)"
                                            : idx === 2
                                            ? "rotate(30deg)"
                                            : "rotate(0deg)", // Rotate cards based on their position
                                    transition: "transform 0.7s ease, top 0.3s ease",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "3rem",
                                        marginBottom: "1vw",
                                        color: COLOURS[`TEXT_COLOUR_SECTION_${theme}`],
                                    }}
                                >
                                    {skill.icon}
                                </div>
                                <CardContent
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        style={{
                                            color: COLOURS[`TEXT_COLOUR_SECTION_${theme}`],
                                            fontWeight: "bold",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        {skill.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        style={{
                                            color: COLOURS[`TEXT_COLOUR_SECTION_${theme}`],
                                            marginBottom: "10px",
                                        }}
                                    >
                                        {skill.description}
                                    </Typography>
                                    <div>
                                        {Array.isArray(skill.details) ? (
                                            skill.details.map((detail, i) => (
                                                <div key={i} style={{ marginBottom: "10px" }}>
                                                    {detail}
                                                </div>
                                            ))
                                        ) : (
                                            <div
                                                style={{
                                                    marginBottom: "10px",
                                                    color: COLOURS[`TEXT_COLOUR_SECTION_${theme}`],
                                                }}
                                            >
                                                {skill.details}
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default SwipeableCards;
