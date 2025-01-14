import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";

const FeaturesSection = ({ features }) => {
    if (!features || features.length === 0) return null;

    return (
        <Box>
            <Typography variant="h6" style={{ marginBottom: "10px" }}>
                Key Features
            </Typography>
            <List>
                {features.map((feature, index) => (
                    <ListItem key={index} style={{ paddingLeft: 0 }}>
                        • {feature}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default FeaturesSection;
