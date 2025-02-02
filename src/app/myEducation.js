import COLOURS from "./colours";
import { HistoryEdu, Language, School } from "@mui/icons-material";
const CONSTANT = [];

CONSTANT.EDUCATION = [
        {
            color: COLOURS.TIMELINECOLOURS[0],
            icon: <School />,
            title: "Bachelor of Engineering",
            description: "Vidyavardhaka College of Engineering",
            details: "August 2017 - May 2021 | Focused on Information Science and Engineering.",
        },
        {
            color: COLOURS.TIMELINECOLOURS[3],
            icon: <HistoryEdu />,
            title: "Founder & Manager",
            description: "Cnotes",
            details:
                "2022 - Present | Managing over 30,000 customer data and monthly predictions for streamlined cable TV management for operators.",
        },
        {
            color: COLOURS.TIMELINECOLOURS[1],
            icon: <Language />,
            title: "Software Developer",
            description: "Juego Studios",
            details: "August 2021 - April 2023 | Contributed to game development and innovative software solutions.",
        },
        {
            color: COLOURS.TIMELINECOLOURS[2],
            icon: <Language />,
            title: "Software Developer",
            description: "Jktech",
            details: "May 2023 - June 2024 | Worked on cutting-edge Blockchain, AI, and Full Stack Development project.",
        },
        {
            color: COLOURS.TIMELINECOLOURS[4],
            icon: <School />,
            title: "Master's in Computer Science",
            description: "Johns Hopkins University",
            details: "August 2023 - May 2025 | Specialization in Advanced Software Engineering and Artificial Intelligence.",
        },
    ];

export default CONSTANT;
