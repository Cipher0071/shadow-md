/*const { tlnag, cmd, getBuffer, prefix, Config } = require('../lib');


// * Tic Tac Toe game plugin with customizable board size, difficulty levels, and opponent choice

// * @pattern: `tictactoe [board size] [your symbol] [opponent symbol]` or `tictactoe bot [difficulty]`
 //* @desc: Starts a Tic Tac Toe game with the specified options.
 //* @category: 'games'
 //* @use:
 //*  - `tictactoe 3 X O` (or any valid combination)
 //*  - `tictactoe bot easy` (or medium/hard)

cmd({
 pattern: 'tictactoe (.+)',
 desc: 'Start a Tic Tac Toe game',
 category: 'games',
 use: '<board size> <your symbol> <opponent symbol> or bot [difficulty]',
}, async (Void, citel, text) => {
 // Extract game options or opponent type
 let [boardSizeStr, yourSymbol, opponentSymbol] = text.trim().split(/\s+/);

 // Handle bot opponent case
 if (boardSizeStr === 'bot') {
  const difficulty = opponentSymbol || 'easy'; // Default to easy if no difficulty provided
  if (!['easy', 'medium', 'hard'].includes(difficulty)) {
   return citel.reply('Invalid bot difficulty. Please choose easy, medium, or hard.');
  }
  startGameWithBot(Void, citel, difficulty);
  return; // Exit early as bot opponent will initiate the game
 }

 // Input validation and opponent challenge
 // Enhanced checks with clear messages
 if (!boardSizeStr || !yourSymbol || !opponentSymbol) {
  return citel.reply(
   'Invalid input! Usage: `tictactoe [board size] [your symbol] [opponent symbol]` or `tictactoe bot [difficulty]`'
  );
 }

 const boardSize = parseInt(boardSizeStr, 10);
 if (isNaN(boardSize) || boardSize < 3 || boardSize > 5) {
  return citel.reply(
   'Board size must be an integer between 3 and 5. Please try again.'
  );
 }

 if (yourSymbol.length !== 1 || opponentSymbol.length !== 1 || yourSymbol === opponentSymbol) {
  return citel.reply(
   'Symbols must be unique and single characters. Please try again.'
  );
 }

 const allowedSymbols = ['X', 'O', 'x', 'o'];
 if (!allowedSymbols.includes(yourSymbol) || !allowedSymbols.includes(opponentSymbol)) {
  return citel.reply(
   'Symbols must be either X or O. Please try again.'
  );
 }

 // Check if another game is already active
 if (activeGames.has(citel.chat)) {
  return citel.reply('Finish the current game or cancel using "tictactoe cancel" before starting a new one.');
 }

 // Send opponent challenge message
 const challengeMessage = `Hey ${opponentSymbol}, ${yourSymbol} has challenged you to a Tic Tac Toe game! Reply "ttt" within 30 seconds to join.`;
 const sentChallenge = await Void.sendMessage(opponentSymbol, challengeMessage);

 // Set a timeout to check for opponent's response and handle cases
 const waitForOpponent = setTimeout(async () => {
  if (!challengeResponses.has(sentChallenge.key)) {
   // Opponent didn't accept in time
   citel.reply(
    `${opponentSymbol} didn't respond in time. Challenge cancelled. Use "tictactoe" to start a new game.`
   );
   activeGames.delete(citel.chat);
  } else {
   startGame(Void, citel, boardSize, yourSymbol, opponentSymbol);
  }
 }, 30000); // 30 seconds timeout

 // Add the challenge to tracking for response validation
 challengeResponses.set(sentChallenge.key, citel.chat);

 // Handle opponent's response
 Void.on('chat-update', async (msg) => {
  if (msg.hasChat() && msg.isFromMe && msg.body === 'ttt' && challengeResponses.has(msg.key)) {
   clearTimeout(waitForOpponent);
   // Remove challenge from tracking
   challengeResponses.delete(msg.key);

   // Start the game if accepted
   const opponentChat = msg.chat;
   startGame(Void, citel.chat, boardSize, yourSymbol, opponentSymbol, opponentChat);
  }
 });

 // Function to start a game with a human opponent
 async function startGame(Void, chat, boardSize, yourSymbol, opponentSymbol, opponentChat = null) {
  // ... (rest of the game logic goes here)

  // Check for game over conditions (win, draw, or lose)
  const gameOver = checkGameOver(game);
  if (gameOver) {
   // Handle game over scenario
   citel.reply(gameOver.message);

   // Offer rematch with the same opponent
   const rematchPrompt = `Game over! Want to play again? Reply "yes" (with the same board size and symbols) or "no".`;
   const rematchResponse = await citel.reply(rematchPrompt);

   if (rematchResponse.body.toLowerCase() === 'yes') {
    startGame(Void, chat, boardSize, yourSymbol, opponentSymbol, opponentChat);
   } else {
    // Clear active game state
    activeGames.delete(chat);
   }
  }
 }

 // Function to start a game with a bot opponent (to be implemented)
 function startGameWithBot(Void, citel, difficulty) {
  // ... (implement bot opponent logic, board initialization, and game loop)
 }

 // Function to check game over conditions (win, draw, or lose)
 function checkGameOver(game) {
  // ... (implement logic to check for rows, columns, diagonals, or full board)

  // Return an object with a message summarizing the game outcome
  return { message: 'Game is over! ... (winner or draw message)' };
 }

 // Data structures to store active games and challenge responses
 const activeGames = new Map();
 const challengeResponses = new Map();
});*/
