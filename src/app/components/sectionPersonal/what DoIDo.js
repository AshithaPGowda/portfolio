"use client";

import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import COLOURS from "@/app/colours";
import SwipeableCards from "./swipeableCards";
import WhatDoIDoCards from "./cardsWhatDoIDo";
import CONSTANT from "@/app/mySkills";

const WhatDoIDo = ({ theme }) => {
    const themeMUI = useTheme();
    const isMobile = useMediaQuery(themeMUI.breakpoints.down("lg"));

    return isMobile ? (
        <div
            style={{
                padding: "3vh",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "2vw",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {" "}
            <Typography
                variant="h4"
                style={{
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                    fontWeight: "bold",
                    marginBottom: "6vh",
                    textAlign: "center",
                }}
            >
                WHAT DO I DO? 💻
            </Typography>
            <SwipeableCards skills={CONSTANT.SKILLS} theme={theme} />
        </div>
    ) : (
        <div>
            <WhatDoIDoCards skills={CONSTANT.SKILLS} theme={theme} />
        </div>
    );
};

export default WhatDoIDo;
