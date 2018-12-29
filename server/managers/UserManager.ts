import { inject, injectable } from 'inversify';
import UserRepository from '../db/repositories/UserRepository';
import BaseManager from './BaseManager';
import { IUser, IUserSession } from '../../sdk/models/User';
import { HttpError } from '../lib/errors';
import httpStatus from 'http-status';

@injectable()
export default class UserManager extends BaseManager<IUser> {
  constructor(
    @inject('Session')
    user: IUserSession | null,
    private readonly userRepository: UserRepository,
  ) {
    super(user, 'user', userRepository);
  }

  public async login(userName: string, password: string) {
    const user = await this.userRepository.findOne({ where: { userName } });

    if (!user) {
      throw new HttpError(httpStatus.UNAUTHORIZED, 'Wrong username or password');
    }

    if (!password) {
      throw new HttpError(
        httpStatus.UNAUTHORIZED,
        'Your password is not set. Please check your email and use the provided link to set the new password'
      );
    }

    
    return {};
  }

  public async forgotPassword(email: string) {
    return {};
  }

}
