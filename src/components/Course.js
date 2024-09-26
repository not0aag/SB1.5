import React from 'react';
import Quiz from './Quiz';

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <Quiz questions={course.questions} />
    </div>
  );
};

export default Course;
