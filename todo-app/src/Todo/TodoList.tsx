import * as React from 'react';
import Todo from './Todo';

class TodoList extends React.Component<{ items: Array<string> }> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const elementArray = this.props.items.map(item => (
      <li key={item}>
        <Todo value={item} />
      </li>
    ));

    return <ul>{elementArray}</ul>;
  }
}

export default TodoList;