import { ICourse } from './Course';

export interface IUser {
  id: number;
  email: string;
  password: string;
  salt: string;
  activationToken: string | null;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserCourse {
  isComplete: boolean;
  user: IUser;
  course: ICourse;
}

export interface IUserSession {
  user: IUser;
  token: string;
}
