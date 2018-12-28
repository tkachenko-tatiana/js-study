import { EntityManager } from 'typeorm';
import { GenericRepository } from './GenericRepository';
import CourseEntity from '../entities/Course';
import { ICourse } from '../../../sdk/models/Course';

export default class CourseRepository extends GenericRepository<CourseEntity, ICourse> {
  protected defaultRelations = [];
  constructor(manager?: EntityManager) {
    super(CourseEntity, manager);
  }
}
