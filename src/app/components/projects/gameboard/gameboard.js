import React, { useState } from "react";
import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import COLOURS from "@/app/colours";
import CONSTANT from "@/app/constants";
import UTILITY from "./utility";

const GameBoard = ({ theme }) => {
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
                gap: 2,
                padding: 2,
                backgroundColor: COLOURS[`SECTION_COLOUR_${theme}`],
                borderRadius: "16px",
                boxShadow: theme === "LIGHT" ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "0 4px 8px rgba(0, 0, 0, 0.5)",
                width: "100%",
            }}
        >
            {/* Game Board */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
                    gap: "1vw",
                    backgroundColor: COLOURS[`BORDER_COLOUR_${theme}`],
                    padding: "1vw",
                    borderRadius: "3vw",
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
                            height: "100px",
                            width: "100px",
                            fontSize: "2rem",
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
