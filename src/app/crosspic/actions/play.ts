import {Action} from '@ngrx/store';
import * as fromPlay from '../reducers/play';

export const GET_MISSION = '[Play] Get Mission';
export const LOAD_MISSION = '[Play] Load Mission';

export class GetMission implements Action {
  readonly type = GET_MISSION;

  constructor(public payload: string) {
  }
}

export class LoadMission implements Action {
  readonly type = LOAD_MISSION;

  constructor(public payload: fromPlay.State) {
  }
}

export type Actions = GetMission | LoadMission;
