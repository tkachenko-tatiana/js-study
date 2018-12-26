import * as React from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';

import TodoList from './models/TodoList';

@observer
class TodoListView extends React.Component<any> {
  onClick = () => {
    this.props.store.addTodo('');
  };

  render() {
    const { store } = this.props;

    return (
      <div>
        <ul>
          {store.todos.map((todo: any) =>
            <TodoView todo={todo} key={todo.id} />
          )}
        </ul>
        <p>Tasks left: {store.unfinishedTodoCount}</p>
        <p>Tasks done: {store.finishedTodoCount}</p>
        <Button onClick={this.onClick}>add todo</Button>
      </div>);
  }
}

const TodoView = observer(({ todo }) => {
  const onChangeHandler = () => {
    todo.finished = !todo.finished;
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onChange={onChangeHandler}
      />{todo.title}
    </li>
  );
});

export const TodoListWithStore = () => <TodoListView store={TodoList} />;
