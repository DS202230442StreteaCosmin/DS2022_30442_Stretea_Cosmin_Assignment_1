import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Device } from '../../devices/entities/device.entity';

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CLIENT,
  })
  role: UserRole;

  @OneToMany(() => Device, (device) => device.user)
  devices: Device[];
}
