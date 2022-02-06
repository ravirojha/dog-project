import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from './dogs.model';

@Injectable()
export class DogsService {
  private dogs: Dog[] = [];

  insertDog(name: string, age: number, breed: string) {
    const dogId = Math.random().toString();
    const newDog = new Dog(dogId, name, age, breed);
    this.dogs.push(newDog);
    return dogId;
  }

  getDogs() {
    return [...this.dogs];
  }

  getSingleDog(dogId: string) {
    const dog = this.dogs.find((dg) => dg.id === dogId);
    if (!dog) {
      throw new NotFoundException('Could not find Dog.');
    }
    return { ...dog };
  }

  updateDog(dogId: string, name: string, age: number, breed: string) {
    const dog = this.dogs.find((dg) => dg.id === dogId);
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
    const dogIndex = this.dogs.findIndex((dg) => dg.id === dogId);
    if (!dogIndex) {
        throw new NotFoundException('Could not find Dog.');
      }
      this.dogs.splice(dogIndex, 1);
  }
}
