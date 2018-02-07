import * as React from 'react';

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

export default WordComponent;