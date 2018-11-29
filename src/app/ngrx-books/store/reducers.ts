import { NgRxBook, Collections } from '../model/models';
import { Action } from '@ngrx/store';
import { UPDATE_BOOK, UpdateBook } from './actions';

export interface BookState {
  items: NgRxBook[];
}

export const initialState: BookState = {
  items: [
    new NgRxBook('Gra o Tron 5', Collections.TO_READ),
    new NgRxBook('Wiedźmin lala', Collections.READING),
    new NgRxBook('Władca Pierscienia 4', Collections.READ),
    new NgRxBook('JS The Good Parts - which?', Collections.TO_READ),
    new NgRxBook('Clean Code vs', Collections.READ),
    new NgRxBook("You don't know ECMA6", Collections.READING),
  ],
};

export function booksReducer(
  state: BookState = initialState,
  action: Action,
): BookState {
  console.log('Book reducer', action);

  switch (action.type) {
    case UPDATE_BOOK: {
      const { payload } = action as UpdateBook;
      const items = state.items.map((book: NgRxBook) =>
        payload.id === book.id ? { ...payload } : book,
      );
      return {
        ...state,
        items,
      };
    }
  }
  return state;
}
