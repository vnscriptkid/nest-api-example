import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `updates coffee #${id} with data: ${JSON.stringify(body, null, 2)}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete coffee #${id}`;
  }
}
