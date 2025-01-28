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

UTILITY.isOpponentWinningMove = (board, move) => {
    // Temporarily make the move and check if the opponent wins
    board[move] = CONSTANT.O; // Simulate the opponent's move
    const winner = UTILITY.checkWinner(board);
    board[move] = null; // Undo move
    return winner === CONSTANT.O; // Return true if the opponent wins with this move
};


UTILITY.minimax = (board, isMaximizing, depth = 0, HumanizeGame = false) => {
    const winner = UTILITY.checkWinner(board);

    // Base cases
    if (winner === CONSTANT.X) return 10 - depth; // AI wins
    if (winner === CONSTANT.O) return depth - 10; // User wins
    if (UTILITY.isBoardFull(board)) return 0; // Draw

    let optimalMoves = []; // Store optimal moves for AI
    let bestScore;

    if (isMaximizing) {
        bestScore = -Infinity;
        board.forEach((cell, index) => {
            if (!cell) {
                board[index] = CONSTANT.X; // AI's move
                const score = UTILITY.minimax(board, false, depth + 1, HumanizeGame);
                board[index] = null; // Undo move

                if (score > bestScore) {
                    bestScore = score;
                    optimalMoves = [index]; // New best move, reset optimalMoves
                } else if (score === bestScore) {
                    optimalMoves.push(index); // Store equally optimal moves
                }
            }
        });

        // If HumanizeGame is true and there are multiple optimal moves, pick a random one
        if (HumanizeGame && optimalMoves.length > 1) {
            // Avoid allowing the opponent to win
            const filteredMoves = optimalMoves.filter(move => !UTILITY.isOpponentWinningMove(board, move));
            const randomMove = filteredMoves.length > 0 ? filteredMoves[Math.floor(Math.random() * filteredMoves.length)] : optimalMoves[0];
            return randomMove;
        }

        return bestScore;
    } else {
        bestScore = Infinity;
        board.forEach((cell, index) => {
            if (!cell) {
                board[index] = CONSTANT.O; // User's move
                const score = UTILITY.minimax(board, true, depth + 1, HumanizeGame);
                board[index] = null; // Undo move

                if (score < bestScore) {
                    bestScore = score;
                    optimalMoves = [index]; // New best move, reset optimalMoves
                } else if (score === bestScore) {
                    optimalMoves.push(index); // Store equally optimal moves
                }
            }
        });

        // If HumanizeGame is true and there are multiple optimal moves, pick a random one
        if (HumanizeGame && optimalMoves.length > 1) {
            const filteredMoves = optimalMoves.filter(move => !UTILITY.isOpponentWinningMove(board, move));
            const randomMove = filteredMoves.length > 0 ? filteredMoves[Math.floor(Math.random() * filteredMoves.length)] : optimalMoves[0];
            return randomMove;
        }

        return bestScore;
    }
};

export default UTILITY;

