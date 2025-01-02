import React, { useEffect } from 'react';
import HomePage from './components/views/home/HomePage.jsx';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Marlon Daniel Portuguez Gomez";
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;