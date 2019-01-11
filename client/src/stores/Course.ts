import { observable } from 'mobx';

class CourseStore {
  @observable courses = [];
}

export default CourseStore;
