import {Action} from '@ngrx/store';
import {Menu} from "../reducers/layout";

export const SELECT_MODULE = '[Layout] Select Module';

export class SelectModule implements Action {
  readonly type = SELECT_MODULE;

  constructor(public payload: string) {
  }
}

export type Actions = SelectModule;
