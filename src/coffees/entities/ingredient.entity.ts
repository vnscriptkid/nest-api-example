import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity('ingredient')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    () => Coffee /* inverse of relationship */,
    (coffee) => coffee.ingredients,
  )
  coffees: Coffee[];
}
