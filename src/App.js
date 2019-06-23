import React from 'react';
import './App.css';
import Aux from './hoc/Aux';
import ResumeBuilder from './containers/ResumeBuilder/ResumeBuilder';

function App() {
  return (
    <Aux>
      <main>
        <ResumeBuilder></ResumeBuilder>
      </main>
    </Aux>
  );
}


export default App;
