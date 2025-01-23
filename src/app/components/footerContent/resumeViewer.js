"use client";

import { Modal, Box, Typography, Button } from "@mui/material";
import CONSTANT from "@/app/constants";

const ResumeViewer = ({ open, onClose, theme, COLOURS, resumeUrl }) => {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = CONSTANT.RESUME_NAME_FOR_DOWNLOAD; // Set the desired filename
        link.click();
    };

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
                <Typography 
                    variant="h6" 
                    gutterBottom 
                    style={{ color: COLOURS[`TEXT_COLOUR_${theme}`], textAlign: "center", marginBottom: "20px" }}>
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
                        onClick={downloadResume}
                        style={{
                            color: COLOURS[`TEXT_COLOUR_${theme}`],
                            borderRadius: "8px",
                            textTransform: "none", // Optional: Makes the button text more readable
                        }}
                    >
                        Download Resume
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ResumeViewer;
