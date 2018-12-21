import * as React from 'react';
import { observer } from 'mobx-react';
import { default as MobxReactDevtools } from 'mobx-react-devtools';
import TodoList from './models/TodoList';

@observer
class TodoListView extends React.Component<any> {
  onClick = () => {
    this.props.store.addTodo('');
  }

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
        <button onClick={this.onClick}>add todo</button>
      </div>);
  }
}

const TodoView = observer(({ todo }) => {
  const onClickHandler = () => {
    todo.finished = !todo.finished;
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onClick={onClickHandler}
      />{todo.title}
    </li>
  );
});

export default () => (
  <div>
    <TodoListView store={TodoList} />
    <MobxReactDevtools />
  </div>
);
