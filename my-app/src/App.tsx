import * as React from 'react';

import './App.css';
import SwitchComponent from './Switch/SwitchComponent';
import WordComponent from './Word/Word';

class App extends React.Component {
  render() {
    return (
      <div>
        <WordComponent message="hello world" />
        <SwitchComponent />
      </div>
      
    );
  }
}

export default App;
