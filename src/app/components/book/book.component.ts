import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../core/interface/book.interface';
import { FactoryBook } from '../../core/model/factory-book';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() public book: IBook = {} as IBook;

  public bookData: any;
  constructor(
    public _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {

    this.bookData = new FactoryBook(this.book, this._snackBar).create();
  }

  public getValue<T extends object, U extends keyof T>( obj: T, key: U ): T[U] | null {
    return obj[key];
  }

  public getKey<T extends object, U extends keyof T>( obj: T, val: T[U] ): U | null {
    const key = (Object.keys(obj) as Array<U>).find((key: U) => obj[key] === val);

    return key || null;
  }

  public patchField<
    T extends object,
    U extends keyof T,
    I extends T[U]
  >(obj: T, field: U, val: I): T {
    return {...obj, [field]: val};
  }


  // Conditional types
  public getBookId<T extends {id : any}>(book: T): T extends { id: string } ? string : number {
    return book.id;
  }
}
