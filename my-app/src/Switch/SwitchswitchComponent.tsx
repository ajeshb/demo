import * as React from 'react';

import './App.css';
import Switch from './Switchswitch';


class SwitchComponent extends React.Component{
  state = {on: true}
  render(){
    const {on} = this.state
    return <Switch on={on}/>
  }
}

export default SwitchComponent;