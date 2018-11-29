import { Injectable } from '@angular/core';
import { Collections, NgRxBook } from '../model/models';
import { timer } from 'rxjs/observable/timer';
import { map } from 'rxjs/operators';

@Injectable()
export class ShelfService {
  books: NgRxBook[] = [];

  constructor() {
    this.books.push(new NgRxBook('Gra o Tron', Collections.TO_READ));
    this.books.push(new NgRxBook('Wiedźmin', Collections.READING));
    this.books.push(new NgRxBook('Władca Pierscienia', Collections.READ));
    this.books.push(new NgRxBook('JS The Good Parts', Collections.TO_READ));
    this.books.push(new NgRxBook('Clean Code', Collections.READ));
    this.books.push(
      new NgRxBook("You don't know JS - don't I", Collections.READING),
    );
  }

  fetchBooks() {
    return timer(300).pipe(map(() => this.books));
  }

  addBook(book: NgRxBook) {
    this.books.push(book);
  }
}
