import { IBook } from './book.interface';

export interface IPrintedBook extends IBook {
  genre: number;
  price: number;
  publishingAge: number;
  publishingHouse: string;
}
