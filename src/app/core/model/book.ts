import { MatSnackBar } from '@angular/material/snack-bar';

export abstract class Book {
  private _currentPage: number = 0;
  private _isFavorite: boolean = false;
  abstract pages: number;

  constructor(
    private _snackBar: MatSnackBar
  ) {
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(pageNumber: number) {
    if (!!pageNumber && pageNumber < this.pages) {
      this._snackBar.open('Страница сохранена');
      this._currentPage = pageNumber;
    } else {
      this._snackBar.open('Страница не сохранена: номер страницы некорректен');
    }
  }

  get isFavorite(): boolean {
    return this._isFavorite;
  }

  set isFavorite(val: boolean) {
    this._snackBar.open(`Книга ${val ? 'добавлена в избранное' : 'убрана из избранного'}`);
    this._isFavorite = val;
  }

  abstract getBookInfo(): string;
}
