import UserStore from './User';
import CourseStore from './Course';
import UIStore from './UI';

export default {
  userStore: new UserStore(),
  courseStore: new CourseStore(),
  uiStore: new UIStore()
};
