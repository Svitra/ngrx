import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './reducers';

export const selectBookState = createFeatureSelector('books');
export const selectBookItems = createSelector(
  selectBookState,
  (state: BookState) => state.items,
);
