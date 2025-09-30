import { Injectable } from '@nestjs/common';
import { CatBreedImage } from './cat-breed.models';

const breeds = [
  {
    id: '1',
    url: 'https://example.com/cat1.jpg',
    breeds: [
      {
        id: '1',
        name: 'Persian',
        breed: 'Persian',
      },
    ],
  },
  {
    id: '2',
    url: 'https://example.com/cat2.jpg',
    breeds: [
      {
        id: '2',
        name: 'Siamese',
        breed: 'Siamese',
      },
    ],
  },
];

@Injectable()
export class CatBreedsService {
  getBreedImages(): CatBreedImage[] {
    return breeds;
  }

  getBreedImage(id: string): CatBreedImage | undefined {
    return breeds.find((breed) => breed.id === id);
  }
}
