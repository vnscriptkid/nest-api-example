import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'return all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `returns coffee number #${id} (${typeof id})`;
  }
}
