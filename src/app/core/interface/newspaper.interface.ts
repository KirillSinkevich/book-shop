import { IBook } from './book.interface';

export interface INewsPaper extends IBook {
  weekHeader: string;
  editionNumber: number;
  colored: boolean;
  price: number;
  weekly: boolean;
}
