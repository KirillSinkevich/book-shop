import { Book } from './book';
import { INewsPaper } from '../interface/newspaper.interface';
import { IFullName } from '../interface/full-name.interface';
import { Cover } from '../interface/book.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

export class Newspaper extends Book implements INewsPaper {
  constructor(
    public id: string,
    public bookName: string,
    public author: IFullName,
    public lang: Record<string, string>,
    public pages: number,
    public cover: Cover,
    public weekHeader: string,
    public editionNumber: number,
    public colored: boolean,
    public price: number,
    public weekly: boolean,
    _snackBar: MatSnackBar
  ) {
    super(_snackBar);
  }

  override getBookInfo(): string {
    return `${this.weekly ? 'Еженедельный ж' : 'Ж'}урнал ${this.bookName} номер ${this.editionNumber}`;
  }
}
