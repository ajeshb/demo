import * as React from 'react';
import './../App.css';
class Todo extends React.Component<{ value: string }> {
  render() {
    return (
    <div className="row todo-details">
      <input className="col-sm-2 " type="checkbox" name="tick" />
      <p className="col-sm-8 todo-name">{this.props.value}</p>
      <button className="col-sm-2 delete-button">X</button>
    </div>)
  }
}

export default Todo;