import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material"; // Import Material UI icon for check mark
import COLOURS from "@/app/colours";

const FeaturesSection = ({ features, theme }) => {
    if (!features || features.length === 0) return null;

    return (
        <Box>
            <Typography variant="h5" style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Key Challenges
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "20px", color: COLOURS[`TEXT_COLOUR_${theme}`] }}>
                Here are the core features that set this project apart.
            </Typography>

            <Grid container spacing={3}>
                {features.map((feature, index) => (
                    <Grid item xs={6} key={index}>
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            style={{ paddingLeft: 0, marginBottom: "12px" }}
                        >
                            <CheckCircle style={{ color: "#4CAF50", marginRight: "10px" }} />
                            <Typography variant="body1" style={{ fontWeight: "500" }}>
                                {feature}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturesSection;
