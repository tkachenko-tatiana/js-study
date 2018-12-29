import { ICourse } from './Course';

export interface IUser {
  id: number;
  userName: string;
  email: string;
  password: string;
  salt: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserCourse {
  isComplete: boolean;
  user: IUser;
  course: ICourse;
}

export interface IUserSession extends IUser {
  token: string;
}
