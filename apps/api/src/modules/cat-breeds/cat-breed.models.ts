import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatBreed {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  breed: string;
}


@ObjectType()
export class CatBreedImage {
  @Field()
  id: string;

  @Field()
  url: string;

  @Field(() => [CatBreed])
  breeds: CatBreed[];
}