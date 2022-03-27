import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dogEntity } from './db/entities/dog.entity';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [DogsModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'dogs.sqlite',
    entities: [dogEntity],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
