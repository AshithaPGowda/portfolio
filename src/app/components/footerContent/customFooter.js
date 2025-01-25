"use client";

import { useState } from "react";
import { Typography, Button } from "@mui/material";
import CONSTANT from "@/app/constants";
import COLOURS from "@/app/colours";
import ContactForm from "./contentForm";
import ResumeViewer from "./resumeViewer";

const Footer = ({ theme, isMobile }) => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showResume, setShowResume] = useState(false);

    const currentYear = new Date().getFullYear();

    const handleOpenContactForm = () => setShowContactForm(true);
    const handleCloseContactForm = () => setShowContactForm(false);

    const handleOpenResume = () => setShowResume(true);
    const handleCloseResume = () => setShowResume(false);

    // Handle the click on "Download Resume" on mobile
    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = CONSTANT.RESUMEURL;
        link.download = CONSTANT.RESUME_NAME_FOR_DOWNLOAD; // Customize the filename if necessary
        link.click();
    };

    return (
        <footer
            style={{
                padding: "20px",
                backgroundColor: COLOURS[`BACKGROUND_${theme}`],
                color: COLOURS[`TEXT_COLOUR_${theme}`],
                textAlign: "center",
                marginTop: "auto",
                borderTop: `1px solid ${COLOURS[`SECTION_COLOUR_${theme}`]}`,
            }}
        >
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                {/* Contact Me */}
                <Typography
                    variant="contained"
                    color="primary"
                    onClick={handleOpenContactForm}
                    style={{
                        backgroundColor: COLOURS[`BUTTON_${theme}`],
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer", // Hand on hover
                        transition: "transform 0.2s ease", // Smooth animation
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Enlarge
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Reset
                >
                    Contact Me
                </Typography>

                {/* My Resume / Download Resume */}
                <Typography
                    variant="contained"
                    color="secondary"
                    onClick={isMobile ? handleDownloadResume : handleOpenResume}
                    style={{
                        backgroundColor: COLOURS[`BUTTON_${theme}`],
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer", // Hand on hover
                        transition: "transform 0.2s ease", // Smooth animation
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Enlarge
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Reset
                >
                    {isMobile ? "Download Resume" : "My Resume"}
                </Typography>
            </div>

            <ContactForm open={showContactForm} onClose={handleCloseContactForm} theme={theme} COLOURS={COLOURS} />
            {isMobile ? null : (
                <ResumeViewer
                    open={showResume}
                    onClose={handleCloseResume}
                    theme={theme}
                    COLOURS={COLOURS}
                    resumeUrl={CONSTANT.RESUMEURL}
                />
            )}

            {/* Footer Copyright */}
            <Typography variant="body2" style={{ marginTop: "10px" }}>
                &#169; Ashitha Gowda {currentYear}
            </Typography>
        </footer>
    );
};

export default Footer;
