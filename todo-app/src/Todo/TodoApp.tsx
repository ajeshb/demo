import * as React from 'react';
import TodoList from './TodoList';

class TodoApp extends React.Component<{}, { items: Array<string> }> {
  constructor(props: any) {
    super(props);
    const itemsArray = ['Apple'];
    this.state = { items: itemsArray };
  }
  addItem = (event: any) => {
    if (event.keyCode == 13) {
      this.state.items.push(event.target.value);
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
            onKeyUp={this.addItem.bind(this)}
          />
        </div>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default TodoApp;
