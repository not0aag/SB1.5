import React from 'react';

const Question = ({ question, onAnswer }) => {
  const handleAnswerClick = (isCorrect) => {
    onAnswer(isCorrect);
  };

  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerClick(option.isCorrect)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Question;
