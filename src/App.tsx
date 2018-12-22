import * as React from 'react';
import { observer } from 'mobx-react';
import { default as MobxReactDevtools } from 'mobx-react-devtools';
import { Route } from 'react-router';
import { Switch, Link } from 'react-router-dom';

import TodoList from './models/TodoList';
import { default as Layout } from './layout';
import { default as SignIn } from './routes/SignIn';

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
        <Link to="signin">link to </Link>
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

const test = () => <TodoListView store={TodoList} />;

const App = () => (
  <React.Fragment>
    <MobxReactDevtools />
    <Layout>
      <Switch>
        <Route path="/" component={test} exact />
        <Route path="/signin" title="Sign In" component={SignIn}/>
      </Switch>
    </Layout>

  </React.Fragment>
);

export default App;
