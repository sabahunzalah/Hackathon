import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddQuiz = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState('');
  const [correctOption, setCorrectOption] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuiz = { question, options: options.split(','), correctOption };
    console.log('New Quiz:', newQuiz);
    navigate('/');
  };

  return (
    <div>
      <h1>Add Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
        </div>
        <div>
          <label>Options (comma separated):</label>
          <input type="text" value={options} onChange={e => setOptions(e.target.value)} />
        </div>
        <div>
          <label>Correct Option:</label>
          <input type="text" value={correctOption} onChange={e => setCorrectOption(e.target.value)} />
        </div>
        <button type="submit">Add Quiz</button>
      </form>
    </div>
  );
};

export default AddQuiz;
