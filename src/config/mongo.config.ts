import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => ({
  uri: configService.get('MONGO_URI'),
});
