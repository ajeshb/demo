import * as React from 'react';

import './App.css';
import SwitchComponent from './Switch/SwitchswitchComponent';
import WordComponent from './Word/Wordword';

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
