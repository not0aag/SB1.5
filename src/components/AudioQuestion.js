import React, { useState } from 'react';

const AudioQuestion = ({ audioSrc, question, options, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState(null);

  const handleAnswer = (isCorrect) => {
    setUserAnswer(isCorrect);
    onAnswer(isCorrect);
  };

  return (
    <div>
      <h3>{question}</h3>
      <audio controls>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.isCorrect)}>
            {option.text}
          </button>
        ))}
      </div>
      {userAnswer !== null && (
        <h3>{userAnswer ? "Correct!" : "Incorrect! Please try again."}</h3>
      )}
    </div>
  );
};

export default AudioQuestion;
