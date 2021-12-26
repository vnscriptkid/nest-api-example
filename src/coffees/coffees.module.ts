import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Ingredient } from './entities/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Ingredient])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
