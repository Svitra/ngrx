import { Component, OnInit } from '@angular/core';
import { Collections, NgRxBook } from '../model/models';
import { ShelfService } from '../services/shelf.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgRxModuleState } from '../store';
import { Store, select, Action } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { selectBookItems } from '../store/selectors';
import { UpdateBook, LoadBooks, BookAdded } from '../store/actions';

@Component({
  selector: 'app-books-shelf',
  templateUrl: './books-shelf.component.html',
  styleUrls: ['./books-shelf.component.scss'],
})
export class BooksShelfComponent implements OnInit {
  books = [];
  books$: Observable<NgRxBook[]>;
  title: string;
  mode: Collections | undefined;
  collections = Collections;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private shelfService: ShelfService,
    private store$: Store<NgRxModuleState>,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log('Router params', params);
      this.mode = params.collection;
      this.getData();
    });
  }

  private getData() {
    this.books$ = this.store$.pipe(
      select(selectBookItems),
      map((books: NgRxBook[]) =>
        this.mode
          ? books.filter((book: NgRxBook) => book.collection === this.mode)
          : books,
      ),
    );

    switch (this.mode) {
      case Collections.READ: {
        this.title = 'Books already read';
        break;
      }
      case Collections.READING: {
        this.title = 'Books currently reading';
        break;
      }
      case Collections.TO_READ: {
        this.title = 'Books to read';
        break;
      }
      default: {
        this.title = 'All my books';
      }
    }
  }

  changeCollectionHandler({ book, newCollection }) {
    console.log('Book has changed collection', book, newCollection);
    this.store$.dispatch(
      new UpdateBook({ ...book, collection: newCollection }),
    );
  }

  loadBooks(action: Action) {
    this.store$.dispatch(new LoadBooks());
  }

  /*   addBook(title, type) {
    this.store$.dispatch(new BookAdded(new NgRxBook(title, type)));
    this.getData();
  }
 */
  newBookHandler(newBook) {
    this.store$.dispatch(new BookAdded(newBook));
    this.getData();
  }
}
