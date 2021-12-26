import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['title', 'type']) /* composite index */
@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index()
  @Column()
  title: string;

  @Column('json')
  payload: Record<string, any>;
}
