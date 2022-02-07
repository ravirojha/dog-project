import * as Joi from 'joi';
import { ValidationResult } from 'joi';

export const validateDogEntry = ({ name, age, breed }): ValidationResult => {
  const DogSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    age: Joi.number().min(1).max(16).required(),
    breed: Joi.string().min(3).max(100).required(),
  });

  return DogSchema.validate({ name, age, breed });

}

export const validateDogId = ({ id }): ValidationResult => {
    const DogSchema = Joi.object({
      id: Joi.string().required(),
    });
    return DogSchema.validate({ id });
  
  }