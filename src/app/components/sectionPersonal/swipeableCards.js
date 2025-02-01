"use client";

import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import COLOURS from "@/app/colours";

const SwipeableCards = ({ skills, theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: goToNext,
        onSwipedRight: goToPrevious,
    });

    const handleClick = (event) => {
        const { clientX, target } = event;
        const cardWidth = target.clientWidth;
        if (clientX < cardWidth / 2) {
            goToPrevious();
        } else {
            goToNext();
        }
    };

    return (
        <div
            {...handlers}
            onClick={handleClick}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1vw",
                padding: "1vh",
                position: "relative",
                height: "60vh",
                overflow: "hidden",
                cursor: "pointer",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "85%",
                    height: "100%",
                    left: "-5%",
                }}
            >
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
                                    boxShadow: "0 4px 1px rgba(0, 0, 0, 0.1)",
                                    position: "absolute",
                                    top: `${idx * 5}%`,
                                    zIndex: 3 - idx,
                                    transform:
                                        idx === 1 ? "rotate(15deg)" : idx === 2 ? "rotate(30deg)" : "rotate(0deg)",
                                    transition: "transform 0.7s ease, top 0.3s ease",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
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
