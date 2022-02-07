import { NestFactory } from '@nestjs/core';
import { loadEnvironmentVariables } from './loader';
import MainModule from './main.module';

async function bootstrap() {
  await loadEnvironmentVariables();
  console.log(process.env.TYPEORM_CONNECTION);
  const app = await NestFactory.create(MainModule);
  await app.listen(3000);
}
bootstrap();
