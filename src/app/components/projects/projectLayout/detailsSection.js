import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const DetailsSection = ({ details }) => {
    if (!details) return null;

    return (
        <Box>
            <Typography variant="h6" style={{ marginBottom: "10px" }}>
                Project Details
            </Typography>
            <Grid container spacing={2}>
                {Object.entries(details).map(([key, value]) => (
                    <Grid item xs={12} sm={6} key={key}>
                        <Typography style={{ fontWeight: "bold" }}>{key}:</Typography>
                        <Typography>{value}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default DetailsSection;
