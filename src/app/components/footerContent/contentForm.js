"use client";

import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ open, onClose, theme, COLOURS }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create the payload for backend
        const formData = { name, email, message };
        try {
            // Make an API call to your backend to send the email
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.log('Email sent successfully:', result);
                // Optionally, you can show a success message or take any further action
            } else {
                console.error('Error sending email:', result);
                // Optionally, you can show an error message to the user
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle errors like network issues
        }

        onClose(); // Close the modal after submission
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
                        value={name}  // Bound to the name state
                        onChange={(e) => setName(e.target.value)}  // Updates the name state on change
                        slotProps={{
                            inputLabel: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                            input: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                "& fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                "&:hover fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                "&.Mui-focused fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                            },
                            marginBottom: "16px",
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        slotProps={{
                            inputLabel: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                            input: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                        }}
                        value={email}  // Bound to the name state
                        onChange={(e) => setEmail(e.target.value)}  // Updates the name state on change
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                "& fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                "&:hover fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                "&.Mui-focused fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                            },
                            marginBottom: "16px",
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={4}
                        slotProps={{
                            inputLabel: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                            input: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                        }}
                        value={message}  // Bound to the name state
                        onChange={(e) => setMessage(e.target.value)}  // Updates the name state on change
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                "& fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                "&:hover fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                                "&.Mui-focused fieldset": { borderColor: COLOURS[`TEXT_COLOUR_${theme}`] },
                            },
                            marginBottom: "24px",
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
                                "&:hover": { backgroundColor: COLOURS[`TEXT_COLOUR_${theme}`], color: COLOURS[`SECTION_COLOUR_${theme}`] },
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{
                                color: COLOURS[`TEXT_COLOUR_${theme}`],
                                borderRadius: "8px",
                                "&:hover": { backgroundColor: COLOURS[`TEXT_COLOUR_${theme}`], color: COLOURS[`SECTION_COLOUR_${theme}`] },
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default ContactForm;
