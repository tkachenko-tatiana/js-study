
import { observable, computed, action } from 'mobx';

class TodoList {
  @observable todos = [{
    title: 'test',
    id: Math.random(),
    finished: false,
  }];

  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo: any) => !todo.finished).length;
  }

  @computed get finishedTodoCount() {
    return this.todos.filter((todo: any) => todo.finished).length;
  }

  @action
  addTodo(title: string) {
    this.todos.push({
      title,
      id: Math.random(),
      finished: false,
    });
  }
}

export default new TodoList();
