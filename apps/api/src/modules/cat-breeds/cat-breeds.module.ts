import { Module } from '@nestjs/common';
import { CatBreedsResolver } from './cat-breeds.resolver';
import { CatBreedsService } from './cat-breeds.service';

@Module({
  providers: [CatBreedsService, CatBreedsResolver],
})
export class CatBreedsModule {}
