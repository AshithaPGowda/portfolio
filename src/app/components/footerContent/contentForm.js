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
                    width: "80%",
                    maxWidth: "500px",
                    bgcolor: COLOURS[`SECTION_COLOUR_${theme}`],
                    boxShadow: 24,
                    p: 4,
                    borderRadius: "8px",
                }}
            >
                <Typography variant="h6" gutterBottom style={{ color: COLOURS[`TEXT_COLOUR_${theme}`] }} textAlign="center">
                    Contact Me
                </Typography>
                <form>
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
                        }}
                    />
                    <div style={{ marginTop: "20px", textAlign: "right" }}>
                        <Button
                            variant="contained"
                            onClick={onClose}
                            style={{ marginRight: "10px", color: COLOURS[`TEXT_COLOUR_${theme}`] }}
                        >
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" style={{ color: COLOURS[`TEXT_COLOUR_${theme}`] }}>
                            Submit
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default ContactForm;
