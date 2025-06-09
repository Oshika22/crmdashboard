import React from 'react';

const FallingSquares = () => {
  // Create an array to map and render multiple squares
  const squares = Array(15).fill(0);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {squares.map((_, i) => (
        <div
          key={i}
          className="square"
          style={{
            left: `${Math.random() * 100}vw`,      // random horizontal start
            animationDelay: `${Math.random() * 10}s`, // random delay for natural fall
            animationDuration: `${5 + Math.random() * 10}s`, // random speed
            width: 20 + Math.random() * 20,         // random size
            height: 20 + Math.random() * 20,
            backgroundColor: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.4})`, // translucent white
          }}
        />
      ))}
    </div>
  );
};

export default FallingSquares;