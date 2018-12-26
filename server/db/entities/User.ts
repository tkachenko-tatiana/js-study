
import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import { IUser } from '../../../sdk/models/User';

@Entity('users')
export default class User implements IUser {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'user_name', type: 'varchar', length: 128 })
  public userName: string;

  @Column({ type: 'varchar', length: 128 })
  public email: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public password: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  public salt: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}
