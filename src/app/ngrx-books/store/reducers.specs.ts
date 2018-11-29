import {} from 'jasmine';
import { initialState, booksReducer, BookState } from './reducers';
import { Action } from '@ngrx/store';
import { NgRxBook, Collections } from '../model/models';
import { UpdateBook } from './actions';

describe('Reducers test', () => {
  it('should have initial state', () => {
    const initState = undefined;
    const expectedState = initialState;
    const action: Action = { type: '@ngrx/store/init' };
    const stateAfter = booksReducer(initState, action);

    expect(stateAfter).toEqual(expectedState);
  });

  it('should update book', () => {
    const book = new NgRxBook('Maly Ksiaze', Collections.READ);
    const book2 = new NgRxBook('Dzuma', Collections.READ);

    const updatedBook = { ...book, collection: Collections.TO_READ };
    const initState: BookState = {
      items: [book2, book],
    };
    const expectedState: BookState = {
      items: [book2, updatedBook],
    };
    const action: Action = new UpdateBook(updatedBook);
    const stateAfter = booksReducer(initState, action);

    expect(stateAfter).toEqual(expectedState);
  });
});
