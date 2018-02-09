import * as React from 'react';
import './../App.css';

type TProps = {
  value: string;
  index: number;
  onDelete: Function;
}

export default class Todo extends React.Component<TProps> {
  constructor(props: TProps) {
    super(props)

    this.localDelete = this.localDelete.bind(this)
  }

  localDelete() {
    // show confirm??
    const { index } = this.props;

    this.props.onDelete(index)
  }

  render() {
    const { value } = this.props;

    return (
      <div className="row todo-details">
      <input className="col-sm-2 " type="checkbox" name="tick" />
      <p className="col-sm-8 todo-name">{value}</p>
      <button className="col-sm-2 delete-button" onClick={this.localDelete}>X</button>
    </div>
    )
  }
}

// export default Todo;