import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LOAD_BOOKS, BooksLoaded, BookAdded, BOOK_ADDED } from './actions';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { ShelfService } from '../services/shelf.service';
import { NgRxBook } from '../model/models';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private shelfService: ShelfService) {}

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(LOAD_BOOKS),
    concatMap(() => this.shelfService.fetchBooks()),
    map((books: NgRxBook[]) => new BooksLoaded(books)),
  );
}
