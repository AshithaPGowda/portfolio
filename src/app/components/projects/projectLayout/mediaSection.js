import React from "react";
import { Box, Typography } from "@mui/material";

const MediaSection = ({ media }) => {
    if (!media || media.length === 0) return null;

    return (
        <Box>
            <Typography variant="h6" style={{ marginBottom: "10px" }}>
                Media
            </Typography>
            <Box
                style={{
                    display: "flex",
                    gap: "10px",
                    overflowX: "auto",
                }}
            >
                {media.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt={`Project media ${index + 1}`}
                        style={{
                            width: "200px",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default MediaSection;
