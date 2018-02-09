import * as React from 'react';
import TodoList from './TodoList';

interface appData{
  items: Array<string>,
  todoName: string
}

class TodoApp extends React.Component<{}, appData> {
  constructor(props: any) {
    super(props);
    this.state = { items: [] ,todoName: ''};
    this.addItem = this.addItem.bind(this);
    this.populateTodoName = this.populateTodoName.bind(this);
  }
  populateTodoName = (event: any) => {
    this.setState({todoName: event.target.value})
  }
  addItem = (event: any) => {
    if (event.keyCode == 13) {
      event.stopPropagation();
      const tempArray = this.state.items;
      tempArray.push(event.target.value);
      this.setState({items: tempArray, todoName: ''})
      // this.state.items.push(event.target.value);
    }
  };
  render() {
    return (
      <div className="todo-box">
        <div className="row todo-box-input">
          <input
            type="text"
            className="todo-input"
            name="todo-input"
            value={this.state.todoName}
            onKeyUp={this.addItem}
            onChange={this.populateTodoName}
          />
        </div>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default TodoApp;
