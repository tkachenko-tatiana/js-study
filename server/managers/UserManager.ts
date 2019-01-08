import { inject, injectable } from 'inversify';
import UserRepository from '../db/repositories/UserRepository';
import BaseManager from './BaseManager';
import { IUser, IUserSession } from '../../sdk/models/User';
import { HttpError } from '../lib/errors';
import httpStatus from 'http-status';
import PasswordHelper from '../lib/PasswordHelper';
import TokenHelper from '../lib/TokenHelper';
import uuid from 'uuid';

@injectable()
export default class UserManager extends BaseManager<IUser> {
  constructor(
    @inject('Session')
    user: IUserSession | null,
    private readonly userRepository: UserRepository,
  ) {
    super(user, 'user', userRepository);
  }

  public async register(email: string) {
    const activationToken = uuid();
    const userInfo = { activationToken, email };

    // TODO send email to user to check their password
    return this.userRepository.create(userInfo);
  }

  public async activate(token: string, params: IUser) {
    const user = await this.userRepository.findByActivationToken(token);

    if (!user) {
      throw new HttpError(httpStatus.BAD_REQUEST, 'Invalid activation token.');
    }

    const { password, ...userInfo } = params;
    const { hash, salt } = PasswordHelper.getHash(password);

    const { password: p, salt: s, activationToken, ...updatedUser } = await this.userRepository.update({
      ...user,
      ...userInfo,
      activationToken: null,
      password: hash,
      salt
    });

    return {
      user: updatedUser,
      token: TokenHelper.createToken(userInfo)
    };
  }

  public async getUserByToken(activationToken: string) {
    const user = await this.userRepository.findOne({ where: { activationToken } });

    if (!user) {
      throw new HttpError(httpStatus.BAD_REQUEST, 'Invalid activation token.');
    }

    return {
      email: user.email
    };

  }

  public async login(email: string, userPassword: string) {
    if (!email || !userPassword) {
      throw new HttpError(httpStatus.BAD_REQUEST, 'Email or password are not provided.');
    }

    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new HttpError(httpStatus.UNAUTHORIZED, 'Wrong email or password');
    }

    const { password, salt, ...userInfo } = user;

    if (!password) {
      throw new HttpError(
        httpStatus.UNAUTHORIZED,
        'Your password is not set. Please check your email and use the provided link to set the new password'
      );
    }

    const signIn = PasswordHelper.checkPassword(userPassword, salt, password);
    if (!signIn) {
      throw new HttpError(httpStatus.UNAUTHORIZED, 'Wrong email or password');
    }

    return {
      user: userInfo,
      token: TokenHelper.createToken(userInfo)
    };
  }

  public async forgotPassword(email: string) {
    return {};
  }
}
