import { EntityManager } from 'typeorm';
import { GenericRepository } from './GenericRepository';
import UserEntity from '../entities/User';
import { IUser } from '../../../sdk/models/User';

export default class UserRepository extends GenericRepository<UserEntity, IUser> {
  protected defaultRelations = [];
  constructor(manager?: EntityManager) {
    super(UserEntity, manager);
  }
}
