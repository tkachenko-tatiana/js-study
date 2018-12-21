import * as React from 'react';
import { observer } from 'mobx-react';
import { default as MobxReactDevtools } from 'mobx-react-devtools';
import TodoList from './models/TodoList';

@observer
class TodoListView extends React.Component<any> {
  onClick = () => {
    this.props.todoList.addTodo('');
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map((todo: any) =>
              <TodoView todo={todo} key={todo.id} />
          )}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
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

const store = new TodoList();

export default () => (
  <div>
    <TodoListView todoList={store} />
    <MobxReactDevtools />
  </div>
);
