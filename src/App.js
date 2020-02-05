import React from 'react';
import './App.css';
import ChuckNorris from './Components/ChuckNorris'
import ChuckNorrisAuto from './Components/ChuckNorrisAuto'

export default function App() {
  return (
    <div className="App">
      <ChuckNorris />
      <ChuckNorrisAuto />
    </div>
  );
}
