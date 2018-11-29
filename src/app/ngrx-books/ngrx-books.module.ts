import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksShelfComponent } from './books-shelf/books-shelf.component';
import { BooksOnShelfComponent } from './books-on-shelf/books-on-shelf.component';
import { ShelfService } from './services/shelf.service';
import { BookOnShelfFormComponent } from './book-on-shelf-form/book-on-shelf-form.component';
import { StoreModule } from '@ngrx/store';
import { reduceMap } from './store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: '/shelf', pathMatch: 'full' },
      {
        path: 'shelf',
        component: BooksShelfComponent
      },
      {
        path: 'shelf/:collection',
        component: BooksShelfComponent
      }
    ]),
    StoreModule.forRoot(reduceMap)
  ],
  declarations: [
    BooksShelfComponent,
    BooksOnShelfComponent,
    BookOnShelfFormComponent
  ],
  providers: [ShelfService]
})
export class NgrxBooksModule {}
