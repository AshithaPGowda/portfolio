import React, { useState, useEffect } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MediaSection = ({ media }) => {
    const [selectedMedia, setSelectedMedia] = useState(null); // Track the selected media for the modal
    const [modalImageStyle, setModalImageStyle] = useState({}); // Dynamic styles for the modal image

    if (!media || media.length === 0) return null;

    // Determine the number of columns based on the number of media items
    const getGridTemplateColumns = (mediaCount) => {
        if (mediaCount <= 2) return "repeat(2, 1fr)";
        if (mediaCount <= 4) return "repeat(2, 1fr)";
        if (mediaCount <= 6) return "repeat(3, 1fr)";
        if (mediaCount <= 9) return "repeat(3, 1fr)";
        return "repeat(4, 1fr)";
    };

    // Handle click to open media in a modal
    const handleMediaClick = (item) => {
        setSelectedMedia(item);

        // Load the image dimensions before opening
        const img = new Image();
        img.src = item;

        img.onload = () => {
            const { width, height } = img;
            const aspectRatio = width / height;
            const viewportWidth = window.innerWidth * 0.9; // 90% of the viewport width
            const viewportHeight = window.innerHeight * 0.9; // 90% of the viewport height

            // Scale the image to fit within the viewport, maintaining aspect ratio
            let adjustedWidth = viewportWidth;
            let adjustedHeight = adjustedWidth / aspectRatio;

            if (adjustedHeight > viewportHeight) {
                adjustedHeight = viewportHeight;
                adjustedWidth = adjustedHeight * aspectRatio;
            }

            setModalImageStyle({
                width: `${adjustedWidth}px`,
                height: `${adjustedHeight}px`,
            });
        };
    };

    // Handle closing the modal
    const handleClose = () => {
        setSelectedMedia(null);
        setModalImageStyle({}); // Reset the styles
    };

    return (
        <Box>
            {/* Media Grid */}
            <Box
                style={{
                    display: "grid",
                    gridTemplateColumns: getGridTemplateColumns(media.length),
                    gap: "10px",
                }}
            >
                {media.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt={`Project media ${index + 1}`}
                        onClick={() => handleMediaClick(item)}
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                            objectFit: "cover",
                            cursor: "pointer",
                            transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                        }}
                    />
                ))}
            </Box>

            {/* Modal for displaying selected media */}
            <Modal
                open={!!selectedMedia} // Show modal if selectedMedia is not null
                onClose={handleClose}
                aria-labelledby="media-modal"
                aria-describedby="media-modal-description"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    style={{
                        position: "relative",
                        outline: "none",
                        borderRadius: "10px",
                        overflow: "hidden",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                    }}
                >
                    {/* Close button */}
                    <IconButton
                        onClick={handleClose}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            color: "white",
                            zIndex: 10,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Selected Media */}
                    <img
                        src={selectedMedia}
                        alt="Selected Media"
                        style={{
                            ...modalImageStyle, // Dynamically calculated styles
                            objectFit: "contain", // Ensure full visibility
                            borderRadius: "10px",
                        }}
                    />
                </Box>
            </Modal>
        </Box>
    );
};

export default MediaSection;
