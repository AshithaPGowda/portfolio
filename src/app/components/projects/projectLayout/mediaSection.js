import React, { useState, useEffect, useCallback } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const MediaSection = ({ media }) => {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
    const [modalImageStyle, setModalImageStyle] = useState({});

    const handleMediaClick = (index) => {
        setSelectedMediaIndex(index);
        calculateImageStyle(media[index]);
    };

    const handlePrevious = useCallback(() => {
        setSelectedMediaIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    }, [media.length]);

    const handleNext = useCallback(() => {
        setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, [media.length]);

    const handleClose = useCallback(() => {
        setSelectedMediaIndex(null);
        setModalImageStyle({});
    }, []);

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

    // Add keyboard listeners
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (selectedMediaIndex !== null) {
                switch (event.key) {
                    case "ArrowLeft":
                        handlePrevious();
                        break;
                    case "ArrowRight":
                        handleNext();
                        break;
                    case "Escape":
                        handleClose();
                        break;
                    default:
                        break;
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedMediaIndex, handlePrevious, handleNext, handleClose]);

    return (
        <Box>
            {/* Media Grid */}
            <Box
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
                    gap: "10px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                }}
            >
                {media.map((item, index) => (
                    <Image
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
                        width={100} // Adjust the width accordingly
                        height={300} // Adjust the height accordingly
                        priority // Ensures the images load quickly
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
                </Box>
            </Modal>
        </Box>
    );
};

export default MediaSection;
