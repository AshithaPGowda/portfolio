import React from "react";
import { Box } from "@mui/material";

const MediaSection = ({ media }) => {
    if (!media || media.length === 0) return null;

    // Determine the number of columns based on the number of media items
    const getGridTemplateColumns = (mediaCount) => {
        if (mediaCount <= 2) return "repeat(2, 1fr)"; // 1-2 items: 2 columns
        if (mediaCount <= 4) return "repeat(2, 1fr)"; // 3-4 items: 2 columns
        if (mediaCount <= 6) return "repeat(3, 1fr)"; // 5-6 items: 3 columns
        if (mediaCount <= 9) return "repeat(3, 1fr)"; // 7-9 items: 3 columns
        return "repeat(4, 1fr)"; // 10+ items: 4 columns
    };

    return (
        <Box>
            <Box
                style={{
                    display: "grid", // Use CSS Grid for layout
                    gridTemplateColumns: getGridTemplateColumns(media.length), // Adaptive number of columns
                    gap: "10px", // Gap between grid items
                }}
            >
                {media.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt={`Project media ${index + 1}`}
                        style={{
                            width: "100%", // Fit image within its grid cell
                            height: "auto",
                            borderRadius: "10px",
                            objectFit: "cover", // Maintain aspect ratio
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default MediaSection;
