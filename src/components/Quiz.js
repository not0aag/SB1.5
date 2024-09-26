import React, { useState } from 'react';
import Question from './Question';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <Question 
          question={questions[currentQuestionIndex]} 
          onAnswer={handleAnswer} 
        />
      ) : (
        <div>Your score: {score} / {questions.length}</div>
      )}
    </div>
  );
};

export default Quiz;
