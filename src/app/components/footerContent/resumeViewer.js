"use client";

import { Modal, Box, Typography, Button } from "@mui/material";

const ResumeViewer = ({ open, onClose, theme, COLOURS, resumeUrl }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "90%",
                    maxWidth: "600px",
                    bgcolor: COLOURS[`SECTION_COLOUR_${theme}`],
                    boxShadow: 24,
                    p: 4,
                    borderRadius: "8px",
                }}
            >
                <Typography variant="h6" gutterBottom>
                    My Resume
                </Typography>
                <iframe
                    src={resumeUrl}
                    title="Resume Preview"
                    style={{
                        width: "100%",
                        height: "400px",
                        border: "none",
                        borderRadius: "8px",
                        marginBottom: "20px",
                    }}
                ></iframe>
                <div style={{ textAlign: "right" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open(resumeUrl, "_blank")}
                    >
                        Download Resume
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ResumeViewer;
