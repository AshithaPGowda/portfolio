"use client";

import { Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import COLOURS from "@/app/colours";

const SwipeableCards = ({ skills, theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, skills.length - 1)),
        onSwipedRight: () => setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)),
    });

    const skill = skills[currentIndex];

    return (
        <div
        
            {...handlers}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                padding: "3vh",
            }}
        >
            <Typography
                variant="h4"
                style={{
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                    fontWeight: "bold",
                    marginBottom: "20px",
                    textAlign: "center",
                }}
            >
                What Do I Do? 💻
            </Typography>
            <Card
                style={{
                    width: "90%",
                    textAlign: "center",
                    padding: "4vh",
                    borderRadius: "2vw",
                    backgroundColor: skill.color,
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div style={{ fontSize: "3rem", marginBottom: "10px", color: COLOURS[`TEXT_COLOUR_${theme}`] }}>
                    {skill.icon}
                </div>
                <CardContent>
                    <Typography
                        variant="h6"
                        style={{
                            color: COLOURS[`TEXT_COLOUR_${theme}`],
                            fontWeight: "bold",
                            marginBottom: "10px",
                        }}
                    >
                        {skill.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{
                            color: COLOURS[`TEXT_COLOUR_${theme}`],
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
                            <div style={{ marginBottom: "10px", color: COLOURS[`TEXT_COLOUR_${theme}`] }}>
                                {skill.details}
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SwipeableCards;