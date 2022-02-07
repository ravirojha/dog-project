import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from './dogs.model';
import { validateDogEntry, validateDogId } from './joi.validators';

@Injectable()
export class DogsService {
  private dogs: Dog[] = [];

  insertDog(name: string, age: number, breed: string) {
    const { value, error } = validateDogEntry({ name, age, breed });
    if (error) {
      throw new HttpException(error.message, 400);
    }
    const dogId = Math.random().toString();
    const newDog = new Dog(dogId, name, age, breed);
    this.dogs.push(newDog);
    return dogId;
  }

  getDogs() {
    return [...this.dogs];
  }

  getSingleDog(dogId: string) {
    const { error } = validateDogId({ id: dogId });
    if (error) {
      throw new HttpException(error.message, 400);
    }
    const dog = this.dogs.find((dg) => dg.id === dogId);
    if (!dog) {
      throw new NotFoundException('Could not find Dog.');
    }
    return { ...dog };
  }

  updateDog(dogId: string, name: string, age: number, breed: string) {
    const { error } = validateDogId({ id: dogId });
    if (error) {
      throw new HttpException(error.message, 400);
    }
    const dog = this.dogs.find((dg) => {
      if (dg.id === dogId) {
        const { error } = validateDogEntry({ name, age, breed });
        if (error) {
          throw new HttpException(error.message, 400);
        }
        return dg;
      }
    });
    const dogIndex = this.dogs.findIndex((dg) => dg.id === dogId);
    if (!dog) {
      throw new NotFoundException('Could not find Dog.');
    }
    const updatedDog = { ...dog };
    if (name) {
      updatedDog.name = name;
    }
    if (age) {
      updatedDog.age = age;
    }
    if (breed) {
      updatedDog.breed = breed;
    }
    this.dogs[dogIndex] = updatedDog;
  }

  deleteDog(dogId: string) {
    const { error } = validateDogId({ id: dogId });
    if (error) {
      throw new HttpException(error.message, 400);
    }
    const dogIndex = this.dogs.findIndex((dg) => dg.id === dogId);
    if (!dogIndex) {
      throw new NotFoundException('Could not find Dog.');
    }
    this.dogs.splice(dogIndex, 1);
  }
}
