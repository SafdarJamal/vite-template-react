import { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(10);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [score, setScore] = useState(75);
  const [mode, setMode] = useState('light');
  const [loadTime, setLoadTime] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [data, setData] = useState(null);
  const [visitCount, setVisitCount] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const hasIncremented = useRef(false);

  useEffect(() => {
    setLoadTime(new Date().toLocaleTimeString());
    console.log('Page loaded at:', new Date().toLocaleTimeString());
  }, []); // ← empty array = run only once on mount
  
  useEffect(() => {
    document.title = `Clicked ${clickCount} times`;
    console.log('Title updated to:', document.title);
  }, [clickCount]); // ← runs every time clickCount changes

  useEffect(() => {
    if (isLoggedIn) {
      console.log('Fetching data...');
      // Simulate API call
      const timer = setTimeout(() => {
        setData({ message: 'Hello from fake API!', user: 'Ufuoma' });
      }, 1500);
      
      // Cleanup function to clear timeout if user logs out before data loads
      return () => clearTimeout(timer);
    } else {
      setData(null);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    // Prevent double increment in React StrictMode (development)
    if (hasIncremented.current) return;
    hasIncremented.current = true;

    // This runs on every mount (page load/refresh)
    const previousCount = localStorage.getItem('visitCount');
    const count = previousCount ? parseInt(previousCount) + 1 : 1;
    
    setVisitCount(count);
    localStorage.setItem('visitCount', count.toString());

    // Only show first-visit message if count === 1
    if (count === 1) {
      setIsFirstVisit(true);
    }
  }, []); // only on mount

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
     
      <div>
      <p>🚀 Page first loaded at: <strong>{loadTime}</strong></p>
      </div>
    

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
    <div>
    <h2>Score: {score}</h2>
    {score >= 70 ? <span style={{ color: 'green', fontWeight: 'bold' }}>🎉 Congratulations! You passed!</span>: <span style={{ color: 'red', fontWeight: 'light' }}>😔 Sorry, you need to study more.</span>}
    </div>
   
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
      <button onClick={() => setClickCount(clickCount + 1)} style={{ marginTop: '20px' }}>
      Click me to change page title ({clickCount})
      </button>

      {data ? (
        <div style={{ padding: '20px', background: '#f0f8ff', borderRadius: '8px', marginTop: '20px' }}>
        <h3>📡 Data from API:</h3>
        <p><strong>Message:</strong> {data.message}</p>
        <p><strong>User:</strong> {data.user}</p>
        </div>) : (<p>Loading data from API...</p>)}

          <div style={{ marginTop: '30px', padding: '20px', background: '#f0f8ff', borderRadius: '12px' }}>
          <h3>📊 Visit Tracker</h3>
          <p>You have visited this page <strong>{visitCount}</strong> {visitCount === 1 ? 'time' : 'times'}.</p>

          {isFirstVisit && (
          <p style={{ color: 'green', fontWeight: 'bold' }}>
          🎉 Welcome! This is your first visit — thanks for coming!
          </p>
          )}

          <p><small>Refresh the page to see the counter increase.</small></p>
          </div>
          <button onClick={() => {
          localStorage.removeItem('visitCount');
          window.location.reload();
          }}>
          Reset Visit Counter
          </button>
    </div>
  );
};

export default App;
