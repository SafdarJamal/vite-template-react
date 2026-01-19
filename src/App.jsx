import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(10);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [score, setScore] = useState(75);
  const [mode, setMode] = useState('light');

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Day 5: Conditional Rendering Practice</h1>
      <h2>By Ufuoma 🚀</h2>
  
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
    {isLoggedIn ? 'Log Out' : 'Log In'}
    </button>

    {isLoggedIn && (
    <div style={{ marginTop: '20px', padding: '20px', background: '#fff3cd', borderRadius: '8px' }}>
    <h3>🎉 Welcome back, Ufuoma!</h3>
    <p>You are now logged in. Secret content is visible!</p>
    </div>
    )}
    <h3>Quiz Result:</h3>
    <p>
    <h2>Score: {score}</h2>
    {score >= 70 ? <span style={{ color: 'green', fontWeight: 'bold' }}>🎉 Congratulations! You passed!</span>: <span style={{ color: 'red', fontWeight: 'light' }}>😔 Sorry, you need to study more.</span>}
    </p>
   
    <button onClick={() => setScore(score + 10)}>Add 10 Points</button>
    <button onClick={() => setScore(50)}>Reset to 50</button>
    <button onClick={() => setScore(score - 10)}>Subtract 10 Points</button>
    <p></p>
    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
    Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </button>
      <div style={{
      marginTop: '30px',
      padding: '30px',
      background: mode === 'light' ? '#ffffff' : '#1a1a1a',
      color: mode === 'light' ? '#000000' : '#ffffff',
      borderRadius: '12px',
      border: '2px solid #ccc'
      }}>
      <h3>This box background color and font color changes with mode!</h3>
      <p>Current mode: {mode}</p>
      </div>
    </div>

  );
};

export default App;
