import React from 'react';

const CourseList = ({ courses, onSelectCourse }) => {
  return (
    <div>
      <h2>Select a language course to start</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} onClick={() => onSelectCourse(course)}>
            {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
