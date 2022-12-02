import { IBook } from './book.interface';

export interface IMagazine extends IBook {
  genre: number;
  price: number;
  monthly: boolean;
  eVersion: boolean;
  withImages: boolean;
}
