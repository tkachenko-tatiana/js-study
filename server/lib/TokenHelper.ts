import jwt from 'jsonwebtoken';
import { IUser } from '../../sdk/models/User';

export const SECRET = 'Js_StUdY_11';
export const SECRET_2 = 'Learning_App_16';

export default class TokenHelper {
  static createToken(user: Partial<IUser>) {
    return jwt.sign({ user }, SECRET, { expiresIn: 60 });
  }

  static createRefreshToken(user: Partial<IUser>) {
    return jwt.sign({ user }, SECRET_2, { expiresIn: '7d' });
  }

  static refreshTokens() {
    return '';
  }

  static verifyToken(token: string) {
    return jwt.verify(token, SECRET);
  }
}
