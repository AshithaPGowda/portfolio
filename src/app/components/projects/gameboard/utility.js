// Utility to check for a winner
import CONSTANT from "@/app/constants";
const UTILITY = []

UTILITY.checkWinner = (board) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6],           // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Return the winner ('X' or 'O')
        }
    }

    return null; // No winner yet
};

// Utility to check if the board is full
UTILITY.isBoardFull = (board) => {
    return board.every((cell) => cell !== null);
};

UTILITY.minimax = (board, isMaximizing, depth = 0) => {
    const winner = UTILITY.checkWinner(board);

    // Base cases
    if (winner === CONSTANT.X) return 10 - depth; // AI wins
    if (winner === CONSTANT.O) return depth - 10; // User wins
    if (UTILITY.isBoardFull(board)) return 0; // Draw

    // Simulate moves
    if (isMaximizing) {
        let bestScore = -Infinity;
        board.forEach((cell, index) => {
            if (!cell) {
                board[index] = CONSTANT.X; // AI's move
                const score = UTILITY.minimax(board, false, depth + 1);
                board[index] = null; // Undo move
                bestScore = Math.max(bestScore, score);
            }
        });
        return bestScore;
    } else {
        let bestScore = Infinity;
        board.forEach((cell, index) => {
            if (!cell) {
                board[index] = CONSTANT.O; // User's move
                const score = UTILITY.minimax(board, true, depth + 1);
                board[index] = null; // Undo move
                bestScore = Math.min(bestScore, score);
            }
        });
        return bestScore;
    }
};

export default UTILITY;

