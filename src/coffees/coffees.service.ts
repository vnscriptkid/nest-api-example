import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'arabica',
      brand: 'trung nguyen',
      flavors: ['bitter', 'sour'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((c) => c.id === id);

    if (!coffee) throw new NotFoundException(`Coffee #${id} not found`);

    return coffee;
  }

  update(id: number, data: Partial<Coffee>) {
    const idx = this.coffees.findIndex((c) => c.id === id);

    if (idx === -1) throw new Error('Coffee not found');

    this.coffees[idx] = {
      ...this.coffees[idx],
      ...data,
    };
  }

  remove(id: number) {
    const idx = this.coffees.findIndex((c) => c.id === id);

    if (idx === -1) throw new Error('Coffee not found');

    this.coffees.splice(idx, 1);
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }
}
