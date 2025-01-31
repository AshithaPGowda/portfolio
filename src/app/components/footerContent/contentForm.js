"use client";

import { Modal, Box, Typography, Button, TextField, Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ open, onClose, theme, COLOURS }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError(true);
            return;
        }

        setEmailError(false);

        const formData = { name, email, message };

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Email sent successfully:', result);
                setSuccess(true); // Show success snackbar

                // Reset form fields
                setName("");
                setEmail("");
                setMessage("");

                setTimeout(() => {
                    onClose(); // Close modal after showing success message
                }, 2000);
            } else {
                console.error('Error sending email:', result);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <>
            <Modal open={open} onClose={onClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        maxWidth: "650px",
                        bgcolor: COLOURS[`SECTION_COLOUR_${theme}`],
                        boxShadow: 24,
                        padding: { xs: "5vw", sm: "3vw" },
                        borderRadius: "12px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ color: COLOURS[`TEXT_COLOUR_${theme}`], textAlign: "center", mb: 2 }}
                    >
                        Contact Me
                    </Typography>

                    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            margin="normal"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    "& fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                    "&:hover fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                    "&.Mui-focused fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                },
                                marginBottom: "16px",
                            }}
                            slotProps={{
                                inputLabel: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                                input: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError(!validateEmail(e.target.value));
                            }}
                            error={emailError}
                            helperText={emailError ? "Please enter a valid email address." : ""}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    "& fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                    "&:hover fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                    "&.Mui-focused fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                },
                                marginBottom: "16px",
                            }}
                            slotProps={{
                                inputLabel: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                                input: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            margin="normal"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    "& fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                    "&:hover fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                    "&.Mui-focused fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                },
                                marginBottom: "24px",
                            }}
                            slotProps={{
                                inputLabel: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                                input: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                            }}
                        />
                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                            <Button
                                variant="outlined"
                                onClick={onClose}
                                sx={{
                                    marginRight: "10px",
                                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                    borderRadius: "8px",
                                    "&:hover": {
                                        backgroundColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                        color: COLOURS[`SECTION_COLOUR_${theme}`],
                                    },
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={emailError || !email || !name || !message} // Disable button if invalid
                                sx={{
                                    color: COLOURS[`TEXT_COLOUR_${theme}`],
                                    borderRadius: "8px",
                                    "&:hover": {
                                        backgroundColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                        color: COLOURS[`SECTION_COLOUR_${theme}`],
                                    },
                                }}
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>

            {/* Snackbar for Success Message */}
            <Snackbar
                open={success}
                autoHideDuration={3500}
                onClose={() => setSuccess(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSuccess(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Message sent successfully! Acknowledgment sent to your email.
                    If not received, please check your spam folder and mark it as a trusted sender.
                </Alert>
            </Snackbar>
        </>
    );
};

export default ContactForm;
