import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from './app.module';
import { loadTypeOrmConnectionFromEnv } from './loader';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => {
                return loadTypeOrmConnectionFromEnv();
            }
        }),
        AppModule
    ]
})

export default class MainModule {

}