import { inject, injectable } from 'inversify';
import BaseManager from './BaseManager';
import { ICourse } from '../../sdk/models/Course';
import { IUserSession } from '../../sdk/models/User';
import CourseRepository from '../db/repositories/CourseRepository';

@injectable()
export default class CourseManager extends BaseManager<ICourse> {
  constructor(
    @inject('Session') user: IUserSession | null,
    private readonly courseRepository: CourseRepository,
  ) {
    super(user, 'course', courseRepository);
  }

}
