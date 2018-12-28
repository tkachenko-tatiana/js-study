import { EntityManager } from 'typeorm';
import { GenericRepository } from './GenericRepository';
import UserCourseEntity from '../entities/UserCourses';
import { IUserCourse } from '../../../sdk/models/User';

export default class UserCourseRepository extends GenericRepository<UserCourseEntity, IUserCourse> {
  protected defaultRelations = [];
  constructor(manager?: EntityManager) {
    super(UserCourseEntity, manager);
  }
}
