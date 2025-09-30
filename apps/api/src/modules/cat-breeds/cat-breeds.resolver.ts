import { Args, Query, Resolver } from '@nestjs/graphql';
import { CatBreedsService } from './cat-breeds.service';
import { CatBreedImage } from './cat-breed.models';

@Resolver(() => CatBreedImage)
export class CatBreedsResolver {
  constructor(private readonly catBreedsService: CatBreedsService) {}

  @Query(() => [CatBreedImage])
  getBreedImages(): CatBreedImage[] {
    return this.catBreedsService.getBreedImages();
  }

  @Query(() => CatBreedImage, {
    nullable: true,
  })
  getBreedImage(@Args('id') id: string): CatBreedImage | undefined {
    return this.catBreedsService.getBreedImage(id);
  }
}
