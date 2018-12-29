import crypto from 'crypto';

export const HASH_KEYLEN = 32;
export const HASH_DIGEST = 'sha256';
export const HASH_ITERATIONS = 100000;

export default class PasswordHelper {
  static getHash(password: string) {
    const salt = crypto.randomFillSync(Buffer.alloc(HASH_KEYLEN)).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, HASH_ITERATIONS, HASH_KEYLEN, HASH_DIGEST).toString('hex');
    return { salt, hash };
  }

  static checkPassword(password: string, salt: string, hash: string) {
    return true;
  }
}
