import { ICourse } from './Course';

export interface IUser {
  id: number;
  email: string;
  password: string;
  confirmPassword?: string;
  salt: string;
  activationToken: string | null;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserActivationInitialData {
  firstName?: string;
  lastName?: string;
  email: string;
}

export interface IUserActivationFormValues extends IUserActivationInitialData {
  password: string;
  confirmPassword: string;
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
