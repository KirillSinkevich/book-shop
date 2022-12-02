import { IBook } from './book.interface';
import { IFullName } from './full-name.interface';

export interface IWorkbook extends IBook {
  subject: string;
  teacher: IFullName;
}
