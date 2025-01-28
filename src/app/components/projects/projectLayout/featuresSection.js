import React from "react";
import { Box, Typography } from "@mui/material";
import COLOURS from "@/app/colours";

const FeaturesSection = ({ textContent, theme, challenge }) => {
    if (!textContent) return null; // Return nothing if no content is provided

    // Function to render the content with bold headings
    const renderTextContent = (content) => {
        const paragraphs = content.split("\n\n"); // Split content into paragraphs
        return paragraphs.map((para, index) => {
            // Check if the paragraph contains bold markdown syntax
            if (para.startsWith("**")) {
                return (
                    <Typography 
                        key={index} 
                        variant="body1" 
                        style={{ marginBottom: "16px", fontWeight: "bold", color: COLOURS[`TEXT_COLOUR_${theme}`] }}>
                        {para.replace(/(\*\*|\*\*)/g, "")}  {/* Remove markdown bold syntax */}
                    </Typography>
                );
            }
            return (
                <Typography 
                    key={index} 
                    variant="body1" 
                    style={{ marginBottom: "16px", color: COLOURS[`TEXT_COLOUR_${theme}`] }}>
                    {para}
                </Typography>
            );
        });
    };

    return (
        <Box>
            <Typography 
                variant="h5" 
                style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Key Challenge : {challenge}
            </Typography>

            {/* Render content from input */}
            {renderTextContent(textContent)}
        </Box>
    );
};

export default FeaturesSection;
