import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IBook } from './core/interface/book.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'book-shop';
  public bookList: IBook[] = [];
  constructor(
    private _http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getBookList();
  }

  public getBookList(): void {
    this._http.get<IBook[]>("assets/books.json")
      .pipe(
        map(response => {
          this.bookList = response;
        }),
      ).subscribe();
  }

  trackBy<T extends { id: number | string }>(index: number, item: T): number {
    return +item.id;
  }
}
