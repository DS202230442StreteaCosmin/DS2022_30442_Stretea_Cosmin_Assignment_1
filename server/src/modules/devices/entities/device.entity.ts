import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

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

  @ManyToOne(() => User, (user) => user.devices)
  user: User | null;
}
