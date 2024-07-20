import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/rigistration/Signup';
import Login from './components/rigistration/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<QuizList />} />
          <Route path="/add" element={<AddQuiz />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
