import * as React from 'react';
import Todo from './Todo';

type TData = {
    id: string,
    title: string
}

class TodoList extends React.Component<{ items: TData[], onDelete: any }> {
  constructor(props: any) {
    super(props);

    this.onDelete = this.onDelete.bind(this)
  }

  onDelete(index: number | undefined) {
      this.props.onDelete(index)
  }

  generateData(items: TData[]) {
      return items.map(({ title, id }, index) => {
        return (
          <li key={id}>
              <Todo value={title} index={index} onDelete={this.onDelete}/>
          </li>
        )
    })
  }

  render() {
      const {
          items
      } = this.props

      return (
          <ul>{this.generateData(items)}</ul> 
      )
  }
}

export default TodoList;