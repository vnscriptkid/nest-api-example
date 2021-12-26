import { Ingredient } from './entities/ingredient.entity';
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

    @InjectRepository(Ingredient)
    private readonly ingredientRepo: Repository<Ingredient>,
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
    const ingredients =
      updateCoffeeDto.ingredients &&
      (await Promise.all(
        updateCoffeeDto.ingredients.map((name) =>
          this.preloadIngredientByName(name),
        ),
      ));

    const coffee = await this.coffeeRepo.preload({
      id,
      ...updateCoffeeDto,
      ingredients,
    });

    if (!coffee) throw new NotFoundException(`Coffee #${id} not found`);

    return this.coffeeRepo.save(coffee);
  }

  async remove(id: number) {
    const coffee = await this.coffeeRepo.findOne(id);

    if (!coffee) throw new NotFoundException(`Coffee #${id} not found`);

    return this.coffeeRepo.remove(coffee);
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    const ingredients = await Promise.all(
      createCoffeeDto.ingredients.map((name) =>
        this.preloadIngredientByName(name),
      ),
    );

    const coffee = this.coffeeRepo.create({
      ...createCoffeeDto,
      ingredients,
    });

    return this.coffeeRepo.save(coffee);
  }

  async preloadIngredientByName(name: string) {
    const ingredient = await this.ingredientRepo.findOne({ name });

    if (ingredient) return ingredient;

    const newIngredient = this.ingredientRepo.create({ name });

    return this.ingredientRepo.save(newIngredient);
  }
}
