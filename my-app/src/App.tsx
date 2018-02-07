import * as React from 'react';

import './App.css';

class SwitchComponent extends React.Component{
  state = {on: true}
  render(){
    const {on} = this.state
    return <Switch on={on}/>
  }
}

class Switch extends React.Component <{on: boolean}>{
  
  constructor(props: any) {
    super(props);
    // code...
  }
  state= {on:this.props.on}
  getClasses = () => {
    return ["toggle-btn " , (this.state.on ? 'toggle-btn-on':'toggle-btn-off')];
  }

  toggle = () => {
    this.setState({on:!this.state.on})
  }

  render(){
    return (
      <div className="toggle">
        <input
          className="toggle-input"
          type="checkbox"
        />
        <button className={this.getClasses().join(" ")} onClick={this.toggle}/>     
      </div>
    )
  }
  
}

class WordComponent extends React.Component <{message: string}, {count: number}> {
  
  constructor(props: any) {
    super(props);
    this.state = {count: 0};
    // code...
  }
  incrementCount = () =>{
    this.setState({count: this.state.count+1})
  }
  render(){
    return (<p onClick={this.incrementCount}>{this.props.message}, {this.state.count}</p>)
  }
}

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
