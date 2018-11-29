import { Action } from '@ngrx/store';
import { NgRxBook } from '../model/models';

export const UPDATE_BOOK = 'BOOKS::UPDATE_BOOK';

export class UpdateBook implements Action {
  public readonly type = UPDATE_BOOK;
  constructor(public payload: NgRxBook) {}
}
