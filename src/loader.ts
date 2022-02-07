import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import { ConnectionOptionsEnvReader } from 'typeorm/connection/options-reader/ConnectionOptionsEnvReader';
export const loadEnvironmentVariables = async () => {
    config();

}

export const loadTypeOrmConnectionFromEnv = async (): Promise<TypeOrmModuleOptions> => {
  const envReader = new ConnectionOptionsEnvReader();
  const envConfig: ConnectionOptions[] = await envReader.read();
  const envConfigObj = envConfig[0];
  const connectionOption: TypeOrmModuleOptions = {
    ...envConfigObj,
    entities: [`${__dirname}/${process.env.TYPEORM_ENTITIES}`],
    migrations: [],
  };
  console.log(connectionOption);
  return connectionOption;
};
