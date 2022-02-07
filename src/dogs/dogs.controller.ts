import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  addDog(
    @Body('name') dogName: string,
    @Body('age') dogAge: number,
    @Body('breed') dogBreed: string,
  ) {
    const generatedId = this.dogsService.insertDog(dogName, dogAge, dogBreed);
    return { id: generatedId };
  }

  @Get()
  getAllDogs() {
    return this.dogsService.getDogs();
  }

  @Get(':id')
  getDog(@Param('id') dogId: string) {
    return this.dogsService.getSingleDog(dogId);
  }

  @Patch(':id')
  updateDog(
    @Param('id') dogId: string,
    @Body('name') dogName: string,
    @Body('age') dogAge: number,
    @Body('breed') dogBreed: string,
  ) {
    this.dogsService.updateDog(dogId, dogName, dogAge, dogBreed);
    return null;
  }

  @Delete(':id')
  removeDog(@Param('id') dogId: string) {
      this.dogsService.deleteDog(dogId);
      return null;
  } 
}
