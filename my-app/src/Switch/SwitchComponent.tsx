import * as React from 'react';

// import './App.css';
import Switch from './Switch';


class SwitchComponent extends React.Component{
  state = {on: false}
  render(){
    const {on} = this.state
    return <Switch on={on}/>
  }
}

export default SwitchComponent;