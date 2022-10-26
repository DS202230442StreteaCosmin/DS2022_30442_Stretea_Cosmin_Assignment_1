import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Consumption } from './consumption.entity';

@Entity()
export class Device {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  maxHourlyConsumption: number;

  @ManyToMany(() => User, (user) => user.devices)
  users: User[];

  @OneToMany(() => Consumption, (consumption) => consumption.device)
  consumptions: Consumption[];
}
