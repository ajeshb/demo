import * as React from 'react';
import TodoList from './TodoList';

class TodoApp extends React.Component<{}, { items: Array<string> }> {
  constructor(props: any) {
    super(props);
    const itemsArray = ["apple", "orange", "jackfruit"];
    this.state = { items: itemsArray };
  }
  render() {
    return <TodoList items={this.state.items} />;
  }
}

export default TodoApp;
