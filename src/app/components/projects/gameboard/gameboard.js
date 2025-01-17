import React, { useState } from "react";
import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import COLOURS from "@/app/colours";
import CONSTANT from "@/app/constants";
import UTILITY from "./utility";

const GameBoard = ({ theme, isMobile }) => {
    const boardSize = 3; // 3x3 board
    const [board, setBoard] = useState(Array(boardSize * boardSize).fill(null)); // Tracks board state
    const [currentTurn, setCurrentTurn] = useState(CONSTANT.USER); // Tracks whose turn it is
    const [currentSymbol, setCurrentSymbol] = useState(CONSTANT.X); // Tracks whether X or O is being played
    const [status, setStatus] = useState("Your Turn!"); // Status message
    const [showHand, setShowHand] = useState(true); // Whether to show the tutorial hand

    // Leaderboard states
    const [userWins, setUserWins] = useState(0);
    const [aiWins, setAiWins] = useState(0);
    const [draws, setDraws] = useState(0);

    // Handle user click on a cell
// Handle user click on a cell
const handleCellClick = (index) => {
    if (board[index] || currentTurn !== CONSTANT.USER) return; // Ignore invalid moves

    const updatedBoard = [...board];
    updatedBoard[index] = CONSTANT.O; // User plays O
    setBoard(updatedBoard);

    // Check if the user wins
    if (UTILITY.checkWinner(updatedBoard)) {
        setStatus("You Win!");
        setUserWins((prev) => prev + 1); // Update leaderboard
        setTimeout(resetGame, 1500); // Reset game after a short delay
        return;
    }

    // Check for draw
    if (UTILITY.isBoardFull(updatedBoard)) {
        setStatus("It's a Draw!");
        setDraws((prev) => prev + 1); // Update leaderboard
        setTimeout(resetGame, 1500); // Reset game after a short delay
        return;
    }

    // Switch to AI's turn
    setCurrentTurn(CONSTANT.AI);
    setStatus("AI is thinking...");

    setTimeout(() => {
        handleAITurn(updatedBoard); // Pass the updated board explicitly
    }, 1000); // Simulate AI delay
};

const handleAITurn = (currentBoard) => {
    let bestMove = -1;
    let bestScore = -Infinity;

    currentBoard.forEach((cell, index) => {
        if (!cell) {
            const simulatedBoard = [...currentBoard];
            simulatedBoard[index] = CONSTANT.X; // AI plays X
            const moveScore = UTILITY.minimax(simulatedBoard, false);
            if (moveScore > bestScore) {
                bestScore = moveScore;
                bestMove = index;
            }
        }
    });

    if (bestMove !== -1) {
        const updatedBoard = [...currentBoard];
        updatedBoard[bestMove] = CONSTANT.X; // AI makes the best move
        setBoard(updatedBoard);

        // Check if the AI wins
        if (UTILITY.checkWinner(updatedBoard)) {
            setStatus("AI Wins!");
            setAiWins((prev) => prev + 1); // Update leaderboard
            setTimeout(resetGame, 1500); // Reset game after a short delay
            return;
        }

        // Check for draw
        if (UTILITY.isBoardFull(updatedBoard)) {
            setStatus("It's a Draw!");
            setDraws((prev) => prev + 1); // Update leaderboard
            setTimeout(resetGame, 1500); // Reset game after a short delay
            return;
        }

        // Switch back to user's turn
        setCurrentTurn(CONSTANT.USER);
        setStatus("Your Turn!");
    }
};


    // Reset the game state
    const resetGame = () => {
        setBoard(Array(boardSize * boardSize).fill(null)); // Reset board
        setCurrentTurn(CONSTANT.USER); // Reset turn
        setCurrentSymbol(CONSTANT.X); // Reset symbol
        setStatus("Your Turn!"); // Reset status
        setShowHand(true); // Reset tutorial hand
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Game Board */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
                    gap: isMobile ? "0.8vw" : "0.4vw", // Increase gap slightly for mobile
                    backgroundColor: COLOURS[`BORDER_COLOUR_${theme}`],
                    padding: isMobile ? "0.2vw" : "0.1vw", // Increase padding for mobile
                    borderRadius: "3vh",
                }}
            >
                {/* Render grid cells */}
                {board.map((cell, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        onClick={() => handleCellClick(index)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: isMobile ? "11vh" : "12vh", // Adjust height for mobile
                            width: isMobile ? "20vw" : "7vw", // Adjust width for mobile
                            fontSize: isMobile ? "1.5rem" : "2rem", // Adjust font size for mobile
                            fontWeight: "bold",
                            color: COLOURS[`SPECIAL_TEXT_COLOUR_${theme}`],
                            cursor: cell ? "not-allowed" : "pointer",
                            userSelect: "none",
                            "&:hover": {
                                backgroundColor: cell ? "inherit" : theme === "LIGHT" ? "#f0f0f0" : "#333",
                            },
                        }}
                    >
                        {cell}
                    </Paper>
                ))}
            </Box>

            {/* Status Section */}
            <Typography
                variant="h6"
                sx={{
                    color: COLOURS[`SPECIAL_TEXT_COLOUR_${theme}`],
                    textAlign: "center",
                    marginTop: 2,
                }}
            >
                {status}
            </Typography>

            {/* Leaderboard */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    marginTop: 2,
                }}
            >
                <Typography sx={{ color: COLOURS[`SPECIAL_TEXT_COLOUR_${theme}`] }}>
                    User Wins: {userWins}
                </Typography>
                <Typography sx={{ color: COLOURS[`SPECIAL_TEXT_COLOUR_${theme}`] }}>
                    AI Wins: {aiWins}
                </Typography>
                <Typography sx={{ color: COLOURS[`SPECIAL_TEXT_COLOUR_${theme}`] }}>
                    Draws: {draws}
                </Typography>
            </Box>

            {/* Reset Button */}
            <Button
                variant="contained"
                color="primary"
                onClick={resetGame}
                sx={{
                    marginTop: 2,
                    padding: "10px 20px",
                    fontSize: "1rem",
                }}
            >
                Reset Game
            </Button>
        </Box>
    );
};

export default GameBoard;
