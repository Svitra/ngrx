import { ActionReducerMap } from '@ngrx/store';
import { booksReducer, BookState } from './reducers';

export interface NgRxModuleState {
  books: BookState;
}

export const reduceMap: ActionReducerMap<NgRxModuleState> = {
  books: booksReducer
};
