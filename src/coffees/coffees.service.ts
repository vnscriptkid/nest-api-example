import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepo: Repository<Coffee>,
  ) {}

  findAll() {
    return this.coffeeRepo.find({ relations: ['ingredients'] });
  }

  async findOne(id: number) {
    const coffee = await this.coffeeRepo.findOne(id, {
      relations: ['ingredients'],
    });

    if (!coffee) throw new NotFoundException(`Coffee #${id} not found`);

    return coffee;
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepo.preload({
      id,
      ...updateCoffeeDto,
    });

    if (!coffee) throw new NotFoundException(`Coffee #${id} not found`);

    return this.coffeeRepo.save(coffee);
  }

  async remove(id: number) {
    const coffee = await this.coffeeRepo.findOne(id);

    if (!coffee) throw new NotFoundException(`Coffee #${id} not found`);

    return this.coffeeRepo.remove(coffee);
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepo.create(createCoffeeDto);

    return this.coffeeRepo.save(coffee);
  }
}
