import UserRepository from './repositories/UserRepository';
import CourseRepository from './repositories/CourseRepository';
import UserCourseRepository from './repositories/UserCourseRepository';

const db = {
  userRepository: new UserRepository(),
  courseRepository: new CourseRepository(),
  userCourseRepository: new UserCourseRepository(),
};

export default db;
