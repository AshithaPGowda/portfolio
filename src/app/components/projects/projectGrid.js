// components/ProjectGrid.js
import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import COLOURS from "@/app/colours";


const ProjectGrid = ({ projects, onCardClick, theme }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                flexWrap: "wrap",
                padding: "30px",
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "20px",
                boxShadow: theme === "LIGHT" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(0, 0, 0, 0.5)",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card onClick={() => onCardClick(project)} style={{ cursor: "pointer" }}>
                            <CardContent>
                                <Typography variant="h6">{project.title}</Typography>
                                <Typography>{project.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProjectGrid;
