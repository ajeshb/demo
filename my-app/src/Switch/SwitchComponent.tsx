import * as React from 'react';

// import './App.css';
import Switch from './Switch';


class SwitchComponent extends React.Component{
  constructor(props: any) {
    super(props);
  }

  state = {on: false}
  toggle = ()=> {
  	this.setState({on: !this.state.on})
  }
  render(){
    const {on} = this.state
    return <Switch on={on} onClick={this.toggle}/>
  }
}

export default SwitchComponent;