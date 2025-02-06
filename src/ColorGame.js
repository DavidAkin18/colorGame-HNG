import React, { useState, useEffect } from 'react';

const ColorGame = () => {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState('');
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('');

  useEffect(() => {
    generateColors();
  }, []);

  const generateColors = () => {
    const colorArray = Array.from({ length: 6 }, () => `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
    setColors(colorArray);
    setTargetColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
  };

  const checkGuess = (color) => {
    if (color === targetColor) {
      setGameStatus('You Sabi! 🎉');
      setScore(score + 1);
      generateColors(); // Automatically generate new colors when correct
    } else {
      setGameStatus('Wrong! Olodo. 😝😂😂');
    }
  };

  const startNewGame = () => {
    setGameStatus('');
    setScore(0); // Reset score
    generateColors();
  };

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="game-container">
      <div className="score" data-testid="score">Score: {score}</div>
      <h1 data-testid="gameInstructions">Guess the correct color!</h1>
      <div className="color-box" style={{ backgroundColor: targetColor }} data-testid="colorBox"></div>
      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => checkGuess(color)}
            className="color-option"
            data-testid="colorOption"
          ></button>
        ))}
      </div>
      <p className="game-status animated-status" data-testid="gameStatus">{gameStatus}</p>
      <button onClick={startNewGame} data-testid="newGameButton" className="new-game-btn">New Game</button>
    </div>
  );
};

export default ColorGame;