import * as React from 'react';
import './../App.css';
const Todo: React.SFC<{ value: string }> = ({value}) =>
  (
    <div className="row todo-details">
      <input className="col-sm-2 " type="checkbox" name="tick" />
      <p className="col-sm-8 todo-name">{value}</p>
      <button className="col-sm-2 delete-button">X</button>
    </div>
  )
 

export default Todo;