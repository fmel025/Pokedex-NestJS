import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './common/config/app.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration]
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    PokemonModule,
    CommonModule,
    SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
