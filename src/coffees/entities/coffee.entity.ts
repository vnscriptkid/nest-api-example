import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Entity('coffee')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @Column('json', { nullable: true })
  flavors: string[];

  @JoinTable() // owner side of relationship
  @ManyToMany(
    () => Ingredient /* related entity */,
    (ingredient) => ingredient.coffees,
    {
      cascade: true, // ['insert']
    },
  )
  ingredients: Ingredient[];
}
