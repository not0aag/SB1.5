import React, { useState } from 'react';
import CourseList from './components/CourseList';
import Course from './components/Course';
import Navbar from './components/Navbar';
import Footer from './components/footer'; // Ensure correct case
import './App.css';

const coursesData = [
  {
    id: 1,
    name: "Spanish for Beginners",
    description: "Learn the basics of Spanish.",
    questions: [
      {
        text: "What is 'Hola' in English?",
        options: [
          { text: "Hello", isCorrect: true },
          { text: "Goodbye", isCorrect: false },
        ],
      },
      {
        text: "What is 'Gracias' in English?",
        options: [
          { text: "Thank you", isCorrect: true },
          { text: "Please", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "French for Beginners",
    description: "Learn the basics of French.",
    questions: [
      {
        text: "What is 'Bonjour' in English?",
        options: [
          { text: "Hello", isCorrect: true },
          { text: "Goodbye", isCorrect: false },
        ],
      },
      {
        text: "What is 'Merci' in English?",
        options: [
          { text: "Thank you", isCorrect: true },
          { text: "Please", isCorrect: false },
        ],
      },
    ],
  },
];

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const renderContent = () => {
    switch (selectedPage) {
      case 'courses':
        return selectedCourse ? (
          <Course course={selectedCourse} />
        ) : (
          <CourseList courses={coursesData} onSelectCourse={setSelectedCourse} />
        );
      case 'team':
        return <h2>Meet Our Team</h2>; // Placeholder for Team page
      default:
        return <h1>Welcome to Samskrita Bharati</h1>;
    }
  };

  return (
    <div className="App">
      <Navbar setSelectedPage={setSelectedPage} />
      <div className="content">
        {renderContent()}
      </div>
      <Footer /> 
    </div>
  );
};

export default App;
