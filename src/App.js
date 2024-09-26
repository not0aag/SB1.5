import React, { useState } from 'react';
import CourseList from './components/CourseList';
import Course from './components/Course';
import Navbar from './components/Navbar';
import Footer from './components/footer'; 
import samskritaBharatiImage from './assets/images/SamskritaBharati.jpg';
import sanskritIntro1 from './assets/audio/sanskritIntro1.mp3';
import sanskritIntro2 from './assets/audio/sanskritIntro2.mp3';
import AudioQuestion from './components/AudioQuestion';

import './App.css';

const coursesData = [
  {
    id: 1,
    name: "Sanskrit for Beginners",
    description: "Learn the basics of Sanskrit.",
    questions: [
      {
        text: "What is 'नमः' (Namah) in English?",
        options: [
          { text: "Hello", isCorrect: true },
          { text: "Goodbye", isCorrect: false },
        ],
      },
      {
        text: "What is 'धन्यवादः' (Dhanyavaadah) in English?",
        options: [
          { text: "Thank you", isCorrect: true },
          { text: "Sorry", isCorrect: false },
        ],
      },
      {
        text: "What is 'शुभः रात्रिः' (Shubha Raatrih) in English?",
        options: [
          { text: "Good night", isCorrect: true },
          { text: "Good morning", isCorrect: false },
        ],
      },
      {
        text: "How do you say 'Please' in Sanskrit?",
        options: [
          { text: "कृपया (Kripaya)", isCorrect: true },
          { text: "धन्यवादः (Dhanyavaadah)", isCorrect: false },
        ],
      },
      {
        text: "What is 'विद्यालयः' (Vidyalayah) in English?",
        options: [
          { text: "Library", isCorrect: false },
          { text: "School", isCorrect: true },
        ],
      },
      {
        text: "How do you say 'Teacher' in Sanskrit?",
        options: [
          { text: "गुरुः (Guruh)", isCorrect: true },
          { text: "शिष्यः (Shishyah)", isCorrect: false },
        ],
      },
      {
        text: "What is 'मित्रम्' (Mitram) in English?",
        options: [
          { text: "Friend", isCorrect: true },
          { text: "Enemy", isCorrect: false },
        ],
      },
      {
        text: "How do you say 'Father' in Sanskrit?",
        options: [
          { text: "पितरः (Pitarah)", isCorrect: true },
          { text: "मातरः (Matarah)", isCorrect: false },
        ],
      },
      {
        text: "What is 'गृहः' (Grihah) in English?",
        options: [
          { text: "House", isCorrect: true },
          { text: "Garden", isCorrect: false },
        ],
      },
      {
        text: "What is 'नदी' (Nadi) in English?",
        options: [
          { text: "Mountain", isCorrect: false },
          { text: "River", isCorrect: true },
        ],
      },
    ],
    audioQuestions: [ 
      {
        audio: sanskritIntro1,
        question: "What is the meaning of 'तथा मस्ती भवति'?",
        options: [
          { text: "And you feel happy", isCorrect: true },
          { text: "Thank you", isCorrect: false },
        ],
      },
      {
        audio: sanskritIntro2,
        question: "What is the meaning of 'धन्यवादः'?",
        options: [
          { text: "Hello", isCorrect: false },
          { text: "Thank you", isCorrect: true },
        ],
      },
    ],
  },

  {
    id: 2,
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
          { text: "Please", isCorrect: false },
          { text: "Thank you", isCorrect: true },
        ],
      },
      {
        text: "What is 'Adiós' in English?",
        options: [
          { text: "Hello", isCorrect: false },
          { text: "Goodbye", isCorrect: true },
        ],
      },
      {
        text: "What is 'Por favor' in English?",
        options: [
          { text: "Thank you", isCorrect: false },
          { text: "Please", isCorrect: true },
        ],
      },
      {
        text: "How do you say 'Good night' in Spanish?",
        options: [
          { text: "Buenas tardes", isCorrect: false },
          { text: "Buenas noches", isCorrect: true },
        ],
      },
      {
        text: "How do you say 'Good afternoon' in Spanish?",
        options: [
          { text: "Buenas tardes", isCorrect: true },
          { text: "Buenas noches", isCorrect: false },
        ],
      },
      {
        text: "What is '¿Cómo estás?' in English?",
        options: [
          { text: "Where are you?", isCorrect: false },
          { text: "How are you?", isCorrect: true },
        ],
      },
      {
        text: "How do you say 'I'm sorry' in Spanish?",
        options: [
          { text: "Lo siento", isCorrect: true },
          { text: "Perdón", isCorrect: false },
        ],
      },
      {
        text: "What is 'Uno' in English?",
        options: [
          { text: "Two", isCorrect: false },
          { text: "One", isCorrect: true },
        ],
      },
      {
        text: "What is 'Amigo' in English?",
        options: [
          { text: "Friend", isCorrect: true },
          { text: "Enemy", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "French for Beginners",
    description: "Learn the basics of French.",
    questions: [
      {
        text: "What is 'Bonjour' in English?",
        options: [
          { text: "Goodbye", isCorrect: false },
          { text: "Hello", isCorrect: true },
        ],
      },
      {
        text: "What is 'Merci' in English?",
        options: [
          { text: "Please", isCorrect: false },
          { text: "Thank you", isCorrect: true },
        ],
      },
      {
        text: "What is 'Au revoir' in English?",
        options: [
          { text: "Goodbye", isCorrect: true },
          { text: "Hello", isCorrect: false },
        ],
      },
      {
        text: "What is 'S'il vous plaît' in English?",
        options: [
          { text: "Please", isCorrect: true },
          { text: "Excuse me", isCorrect: false },
        ],
      },
      {
        text: "How do you say 'Good night' in French?",
        options: [
          { text: "Bonne nuit", isCorrect: true },
          { text: "Bonne soirée", isCorrect: false },
        ],
      },
      {
        text: "How do you say 'Good evening' in French?",
        options: [
          { text: "Bonsoir", isCorrect: true },
          { text: "Bonne nuit", isCorrect: false },
        ],
      },
      {
        text: "What is 'Comment ça va?' in English?",
        options: [
          { text: "Where are you?", isCorrect: false },
          { text: "How are you?", isCorrect: true },
        ],
      },
      {
        text: "How do you say 'Excuse me' in French?",
        options: [
          { text: "Excusez-moi", isCorrect: true },
          { text: "Je suis désolé", isCorrect: false },
        ],
      },
      {
        text: "What is 'Deux' in English?",
        options: [
          { text: "Two", isCorrect: true },
          { text: "Three", isCorrect: false },
        ],
      },
      {
        text: "What is 'Amour' in English?",
        options: [
          { text: "Love", isCorrect: true },
          { text: "Hate", isCorrect: false },
        ],
      },
    ],
  },
];


const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0); 

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      alert("Correct answer!");
  
      // Move to the next audio question
      setCurrentAudioIndex(prevIndex => {
        if (prevIndex < selectedCourse.audioQuestions.length - 1) {
          console.log(`Changing index from ${prevIndex} to ${prevIndex + 1}`);
          return prevIndex + 1; // Move to the next question
        } else {
          console.log(`Resetting index to 0`);
          return 0; // Reset to the first question
        }
      });
    } else {
      alert("Incorrect answer. Try again!");
      // Do not change the index if the answer is incorrect
    }
  };
  

  const renderContent = () => {
    switch (selectedPage) {
      case 'courses':
        return selectedCourse ? (
          <>
            <Course course={selectedCourse} />
            <AudioQuestion 
              audioSrc={selectedCourse.audioQuestions[currentAudioIndex].audio}
              question={selectedCourse.audioQuestions[currentAudioIndex].question}
              options={selectedCourse.audioQuestions[currentAudioIndex].options}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <CourseList courses={coursesData} onSelectCourse={setSelectedCourse} />
        );
        case 'team':
          return (
            <div className="team-container">
              <h2 className="team-title">Meet Our Team</h2>
              <div className="team-member">
                <h3>Alen Aiju George</h3>
              </div>
              <div className="team-member">
                <h3>Sukhmanpreet Singh Aulakh</h3>
              </div>
              <div className="team-member">
                <h3>Neil Patrick Saldanha</h3>
              </div>
            </div>
          );
      default:
        return <><img src={samskritaBharatiImage} alt='Samskrita Bharati'/></>;
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
