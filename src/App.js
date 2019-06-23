import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Aux from './hoc/Aux';
import ResumeBuilder from './containers/ResumeBuilder/ResumeBuilder';

function App() {
  return (
    <Provider store={store}>
      <Aux>
        <main>
          <ResumeBuilder></ResumeBuilder>
        </main>
      </Aux>
    </Provider>
  );
}


export default App;
