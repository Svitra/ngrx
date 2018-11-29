import { NgRxBook, Collections } from '../model/models';
import { Action } from '@ngrx/store';

export interface BookState {
  items: NgRxBook[];
}

export const initialState: BookState = {
  items: [
    new NgRxBook('Gra o Tron', Collections.TO_READ),
    new NgRxBook('Wiedźmin', Collections.READING),
    new NgRxBook('Władca Pierscienia', Collections.READ),
    new NgRxBook('JS The Good Parts', Collections.TO_READ),
    new NgRxBook('Clean Code', Collections.READ),
    new NgRxBook("You don't know JS", Collections.READING)
  ]
};

export function booksReducer(
  state: BookState = initialState,
  action: Action
): BookState {
  console.log('Book reducer', action);
  return state;
}
