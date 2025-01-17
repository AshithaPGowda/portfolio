import React, { useState } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MediaSection = ({ media }) => {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
    const [modalImageStyle, setModalImageStyle] = useState({});

    if (!media || media.length === 0) return null;

    const handleMediaClick = (index) => {
        setSelectedMediaIndex(index);
        calculateImageStyle(media[index]);
    };

    const handleClose = () => {
        setSelectedMediaIndex(null);
        setModalImageStyle({});
    };

    const handlePrevious = () => {
        setSelectedMediaIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    };

    const handleNext = () => {
        setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const calculateImageStyle = (imageSrc) => {
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
            const { width, height } = img;
            const aspectRatio = width / height;
            const viewportWidth = window.innerWidth * 0.9;
            const viewportHeight = window.innerHeight * 0.9;

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

    return (
        <Box>
            {/* Media Grid */}
            <Box
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`, // Responsive columns
                    gap: "10px",
                    maxHeight: "80vh", // Limit grid height to viewport
                    overflowY: "auto", // Enable scrolling if grid exceeds height
                }}
            >
                {media.map((item, index) => (
                    <img
                        key={index}
                        src={item}
                        alt={`Project media ${index + 1}`}
                        onClick={() => handleMediaClick(index)}
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

            {/* Modal */}
            <Modal
                open={selectedMediaIndex !== null}
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
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* Previous Image Button */}
                    <IconButton
                        onClick={handlePrevious}
                        style={{
                            position: "absolute",
                            left: "10px",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            color: "white",
                            zIndex: 10,
                            borderRadius: "50%",
                        }}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>

                    {/* Image */}
                    <img
                        src={media[selectedMediaIndex]}
                        alt="Selected Media"
                        style={{
                            ...modalImageStyle,
                            objectFit: "contain",
                            borderRadius: "10px",
                        }}
                    />

                    {/* Next Image Button */}
                    <IconButton
                        onClick={handleNext}
                        style={{
                            position: "absolute",
                            right: "10px",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            color: "white",
                            zIndex: 10,
                            borderRadius: "50%",
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>

                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            color: "white",
                            zIndex: 10,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Preview of Next Image */}
                    {media.length > 1 && (
                        <img
                            src={media[(selectedMediaIndex + 1) % media.length]}
                            alt="Next preview"
                            style={{
                                position: "absolute",
                                top: "70vh",
                                height: "15vh",
                                width: "auto",
                                opacity: 0.5,
                                borderRadius: "5px",
                                right: "-3vw",
                                zIndex: -1,
                            }}
                        />
                    )}

                </Box>
            </Modal>
        </Box>
    );
};

export default MediaSection;
