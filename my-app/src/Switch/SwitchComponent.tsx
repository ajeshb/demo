import * as React from 'react';

import Switch from './Switch';


class SwitchComponent extends React.Component<{},{on: boolean}>{

  constructor(props: any) {
    super(props);
    const initialState = { on: false };
    this.state = initialState
  }
  
  toggle = ()=> {
  	this.setState({on: !this.state.on})
  }

  render(){
    const {on} = this.state
    return <Switch on={on} onClick={this.toggle}/>
  }
}

export default SwitchComponent;