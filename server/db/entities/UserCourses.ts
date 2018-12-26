import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, UpdateDateColumn,
} from 'typeorm';
import Course from './Course';
import User from './User';
import { IUserCourse } from '../../../sdk/models/User';

@Entity('users_courses')
export default class UserCourse implements IUserCourse {
  @Column({ name: 'is_complete', type: 'varchar', length: 32 })
  public isComplete: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @ManyToOne(() => User, (user: any) => user.courses, { primary: true  })
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @ManyToOne(() => Course, (course: any) => course.users,  { primary: true  })
  @JoinColumn({ name: 'course_id' })
  public course: Course;
}
