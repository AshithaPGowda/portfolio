"use client";

import { useState } from "react";
import { Typography, Button } from "@mui/material";
import CONSTANT from "@/app/constants";
import COLOURS from "@/app/colours";
import ContactForm from "./contentForm";
import ResumeViewer from "./resumeViewer";

const Footer = ({ theme }) => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showResume, setShowResume] = useState(false);

    const currentYear = new Date().getFullYear();

    const handleOpenContactForm = () => setShowContactForm(true);
    const handleCloseContactForm = () => setShowContactForm(false);

    const handleOpenResume = () => setShowResume(true);
    const handleCloseResume = () => setShowResume(false);

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
            <Typography variant="body2" style={{ marginBottom: "10px" }}>
                &#169; Ashitha Gowda {currentYear}
            </Typography>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenContactForm}
                    style={{ backgroundColor: COLOURS[`BUTTON_${theme}`] }}
                >
                    Contact Me
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleOpenResume}
                    style={{ backgroundColor: COLOURS[`BUTTON_${theme}`] }}
                >
                    My Resume
                </Button>
            </div>

            <ContactForm
                open={showContactForm}
                onClose={handleCloseContactForm}
                theme={theme}
                COLOURS={COLOURS}
            />
            <ResumeViewer
                open={showResume}
                onClose={handleCloseResume}
                theme={theme}
                COLOURS={COLOURS}
                resumeUrl={CONSTANT.RESUMEURL}
            />
        </footer>
    );
};

export default Footer;
