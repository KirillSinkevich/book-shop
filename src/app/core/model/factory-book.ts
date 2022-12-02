import { Newspaper } from './newspaper';
import { WorkBook } from './work-book';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IWorkbook } from '../interface/work-book.interface';
import { INewsPaper } from '../interface/newspaper.interface';

export class FactoryBook {
  constructor(
    public book: any,
    public _snackBar: MatSnackBar
  ) {}

  public create(): any {
    debugger
    if ('subject' in this.book) {
      const {id, bookName, author, lang, pages, cover, subject, teacher} = this.book as IWorkbook;

      return new WorkBook(id, bookName, author, lang, pages, cover, subject, teacher, this._snackBar);
    } else if ('weekly' in this.book) {
      const {id, bookName, author, lang, pages, cover, weekHeader, editionNumber, colored, price, weekly} = this.book as INewsPaper;

      return new Newspaper(id , bookName, author, lang, pages, cover, weekHeader, editionNumber, colored, price, weekly, this._snackBar);
    }
  }
}
