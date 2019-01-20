import { observable, action, runInAction } from 'mobx';
import CourseApi from '../api/Course';
import { ICourse } from '../../../sdk/models/Course';

class CourseStore {
  @observable courses: ICourse[] = [];

  @action
  public fetchCourses = () => {
    return CourseApi.fetchCourses()
      .then((data) => {
        runInAction(() => this.courses = data);
      });
  }
}

export default CourseStore;
