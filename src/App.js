import React from 'react';
import './App.css';
import ChuckNorris from './Components/ChuckNorris'
// import ChuckNorrisAuto from './Components/ChuckNorrisAuto'
import ChuckNorrisOptimize from './Components/ChuckNorrisOptimize'

export default function App() {
  return (
    <div className="App">
      <ChuckNorris />
      <ChuckNorrisOptimize />
    </div>
  );
}
