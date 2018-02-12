import * as React from 'react';
import './../App.css';

type TProps = {
  value: string;
  index: number;
  onDelete: Function;
};

class Todo extends React.Component<TProps,{showEdit: boolean, value: string}> {
  constructor(props: TProps) {
    super(props);
    this.state = {showEdit: false,value: props.value}
    this.localDelete = this.localDelete.bind(this);
    // this.enableEditing = this.enableEditing.bind(this);
    this.makeValueChange = this.makeValueChange.bind(this);
    this.editValue = this.editValue.bind(this);
  }

  localDelete() {
    // show confirm??
    const { index } = this.props;
    
    this.props.onDelete(index);
  }

  enableEditing = () => {
     this.setState({showEdit: true});
  }

  makeValueChange = (event: any) => {
    this.setState({value: event.target.value});
  }

  editValue = (event: any) => {
    if (event.keyCode == 13) {
      event.stopPropagation();
      this.editTodoTitle();
      this.setState({showEdit: false});
    }
  };

  editTodoTitle = () => {
     console.log('change Value');
  }

  render() {

    return (
      <div className="row todo-details" onDoubleClick={this.enableEditing} >
        <input className="col-sm-2 " type="checkbox" name="tick" />
        <input className="col-sm-8 todo-name" type="text" value={this.state.value} onBlur={this.editTodoTitle} onKeyUp={this.editValue} onChange={this.makeValueChange} readOnly={!this.state.showEdit} />
        <button className="col-sm-2 delete-button" onClick={this.localDelete}>
          X
        </button>
      </div>
    );
  }
}

export default Todo;