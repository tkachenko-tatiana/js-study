import { Container, interfaces } from 'inversify';
import UserRepository from './db/repositories/UserRepository';
import CourseRepository from './db/repositories/CourseRepository';
import UserCourseRepository from './db/repositories/UserCourseRepository';

import UserManager from './managers/UserManager';
import CourseManager from './managers/CourseManager';

const container = new Container({ skipBaseClassChecks: true });

// repositories
[
  UserRepository,
  CourseRepository,
  UserCourseRepository,
]
  .forEach((repository: any) => container.bind<any>(repository).toSelf().inSingletonScope());

// managers
[
  UserManager,
  CourseManager
]
  .forEach((manager: any) => container.bind<any>(manager).toSelf().inRequestScope());

export { container };
