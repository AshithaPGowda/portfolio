"use client";

import { useState } from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRouter
import CONSTANT from "@/app/constants";
import COLOURS from "@/app/colours";
import ContactForm from "./contentForm";
import ResumeViewer from "./resumeViewer";

const Footer = ({ theme, isMobile }) => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const router = useRouter(); // Initialize useRouter

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

    // Handle "Projects" button click
    const handleProjectsClick = () => {
        router.push("/projects"); // Navigate to /projects
    };

    return (
        <footer
            style={{
                padding: isMobile ? "0.8vw" : "1.5vw",
                backgroundColor: COLOURS[`BACKGROUND_${theme}`],
                color: COLOURS[`TEXT_COLOUR_${theme}`],
                textAlign: "center",
                marginTop: "auto",
                // borderTop: `1px solid ${COLOURS[`SECTION_COLOUR_${theme}`]}`,
            }}
        >
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
            <Typography
                variant="contained"
                color="primary"
                onClick={handleOpenContactForm}
                style={{
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
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
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer", // Hand on hover
                    transition: "transform 0.2s ease", // Smooth animation
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Enlarge
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Reset
            >
                {isMobile ? "📥 Resume" : "My Resume"}
            </Typography>

            {/* Projects Button */}
            <Typography
                variant="contained"
                color="primary"
                onClick={handleProjectsClick} // Updated to navigate to /projects
                style={{
                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer", // Hand on hover
                    transition: "transform 0.2s ease", // Smooth animation
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Enlarge
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Reset
            >
                Projects
            </Typography>

            {/* Footer Copyright */}
            <Typography variant="body2" style={{ marginTop: "10px" }}>
                &#169; APG {currentYear}
            </Typography>
        </footer>
    );
};

export default Footer;
