import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import COLOURS from "@/app/colours"; // Assuming COLOURS contains the theme colors

const DetailsSection = ({ details, theme }) => {
    if (!details) return null;

    // Calculate card height dynamically, or set a fixed height
    const cardHeight = 100; // Fixed height for all cards

    return (
        <Box>
            <Typography
                variant="h6"
                style={{
                    marginBottom: "20px",
                    fontWeight: "bold",
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                }}
            >
                Project Details
            </Typography>

            <Grid container spacing={2}>
                {Object.entries(details).map(([key, value]) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                        <Card
                            style={{
                                borderRadius: "10px",
                                backgroundColor: COLOURS[`CARD_COLOUR_${theme}`],
                                height: `${cardHeight}px`, // Fixed height for all cards
                                padding: "10px",
                                boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontWeight: "bold",
                                        color: COLOURS[`SPECIAL_TEXT_COLOUR_${theme}`],
                                    }}
                                > 
                                    {key}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{
                                        color: COLOURS[`TEXT_COLOUR_${theme}`],
                                    }}
                                >
                                    {value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default DetailsSection;
