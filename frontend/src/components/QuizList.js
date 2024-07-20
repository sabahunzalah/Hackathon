import React from 'react';
import { Link } from 'react-router-dom';

const quizzes = [
  { id: 1, question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'] },
  { id: 2, question: 'What is 2 + 2?', options: ['3', '4', '5', '6'] },
];

const QuizList = () => {
  return (
    <div>
      <h1>Quiz List</h1>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id}>
            <h2>{quiz.question}</h2>
            <ul>
              {quiz.options.map(option => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link to="/add">Add a New Quiz</Link>
    </div>
  );
};

export default QuizList;
