import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Switch/Toggle';

class App extends Component {
  render() {
    return (
      <Toggle onToggle={on => console.log('toggle', on)}>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Button />
        <Toggle.Off>The button is off</Toggle.Off>
      </Toggle>
    )
  }
}

export default App;
