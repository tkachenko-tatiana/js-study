
import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { ICourse } from '../../sdk/models/Course';

@Entity('courses')
export default class Course implements ICourse {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 128 })
  public name: string;

  @Column({ type: 'text', nullable: true })
  public description: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}
