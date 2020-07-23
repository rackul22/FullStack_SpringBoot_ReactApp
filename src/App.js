import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
      </div>
    );
  }
}

// Class Component
class LearningComponent extends Component {
  render() {
    return (
      <div className='Learning Components'>
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
      </div>
    );
  }
}

// Function Component

function FourthComponent() {
  return <div className='FourthComponent'>This is my FourthComponent</div>;
}

export default App;
