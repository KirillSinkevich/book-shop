import { Book } from './book';
import { IWorkbook } from '../interface/work-book.interface';
import { IFullName } from '../interface/full-name.interface';
import { Cover } from '../interface/book.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

export class WorkBook extends Book implements IWorkbook {
  constructor(
    public id: string,
    public bookName: string,
    public author: IFullName,
    public lang: Record<string, string>,
    public pages: number,
    public cover: Cover,
    public subject: string,
    public teacher: IFullName,
    _snackBar: MatSnackBar
  ) {
    super(_snackBar);
  }

  override getBookInfo(): string {
    return `Это рабочая тетрадь по ${this.subject}, преподавателя ${this.teacher.firstName} ${this.teacher.lastName}`;
  }
}
