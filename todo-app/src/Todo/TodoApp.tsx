import * as React from 'react';
import TodoList from './TodoList';

type TData = {
  id: string,
  title: string
}

interface appData{
  items: TData[],
  todoName: string
}

class TodoApp extends React.Component<{}, appData> {
  constructor(props: any) {
    super(props);
    this.state = { items: [], todoName: ''};
    this.addItem = this.addItem.bind(this);
    this.populateTodoName = this.populateTodoName.bind(this);
  }
  populateTodoName = (event: any) => {
    this.setState({todoName: event.target.value})
  }
  deleteToDo = (index: number) => {
    console.log(index)

    this.setState({
      items: [...this.state.items.slice(0, index), ...this.state.items.slice(index + 1)]
    })
  }
  addItem = (event: any) => {
    if (event.keyCode == 13) {
      event.stopPropagation();

      const title = event.target.value.trim();
      const id = Date.now().toString();

      this.setState({
        items: [...this.state.items, { id, title }],
        todoName: ''
      })
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
        <TodoList items={this.state.items} onDelete={this.deleteToDo}/>
      </div>
    );
  }
}

export default TodoApp;
