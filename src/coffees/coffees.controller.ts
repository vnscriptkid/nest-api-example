import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit = 10, offset = 0 } = paginationQuery;
    return `return all coffees. Paginated by limit ${limit} and offset ${offset}`;
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
