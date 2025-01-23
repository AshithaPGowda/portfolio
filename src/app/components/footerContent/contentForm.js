"use client";

import { Modal, Box, Typography, Button, TextField } from "@mui/material";

const ContactForm = ({ open, onClose, theme, COLOURS }) => {
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
                    borderRadius: "12px", // Soften edges for a more modern look
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography 
                    variant="h6" 
                    gutterBottom 
                    style={{ color: COLOURS[`TEXT_COLOUR_${theme}`], textAlign: "center", marginBottom: "20px" }}>
                    Contact Me
                </Typography>

                <form style={{ width: "100%" }}>
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        slotProps={{
                            inputLabel: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                            input: { style: { color: COLOURS[`TEXT_COLOUR_${theme}`] } },
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px", // Rounded input fields
                                "& fieldset": {
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                },
                                "&:hover fieldset": {
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                },
                            },
                            marginBottom: "16px", // Space between fields
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
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                "& fieldset": {
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                },
                                "&:hover fieldset": {
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                },
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
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                "& fieldset": {
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                },
                                "&:hover fieldset": {
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                                },
                            },
                            marginBottom: "24px", // Extra space before buttons
                        }}
                    />
                    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            variant="outlined"
                            onClick={onClose}
                            style={{
                                marginRight: "10px",
                                color: COLOURS[`TEXT_COLOUR_${theme}`],
                                borderColor: COLOURS[`TEXT_COLOUR_${theme}`],
                            }}
                            sx={{
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
                            color="primary"
                            onClick={onClose}
                            style={{
                                color: COLOURS[`TEXT_COLOUR_${theme}`],
                                borderRadius: "8px",
                            }}
                            sx={{
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
    );
};

export default ContactForm;
