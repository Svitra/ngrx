import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksShelfComponent } from './books-shelf.component';
import { BookOnShelfFormComponent } from '../book-on-shelf-form/book-on-shelf-form.component';
import { BooksOnShelfComponent } from '../books-on-shelf/books-on-shelf.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShelfService } from '../services/shelf.service';
import { StoreModule } from '@ngrx/store';

describe('BooksShelfComponent', () => {
  let component: BooksShelfComponent;
  let fixture: ComponentFixture<BooksShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot],
      declarations: [
        BooksShelfComponent,
        BooksOnShelfComponent,
        BookOnShelfFormComponent,
      ],
      providers: [ShelfService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
