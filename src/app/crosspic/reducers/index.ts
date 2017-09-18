import {createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromPlay from './play';
import * as fromRoot from '../../reducers';

export interface PlayState {
  mission: fromPlay.State;
}

export interface State extends fromRoot.State {
  'crosspic': PlayState;
}

export const reducers = {
  mission: fromPlay.reducer,
};

export const getPlayState = createFeatureSelector<PlayState>('crosspic');
export const getMissionState = createSelector(getPlayState, (state: PlayState) => state.mission);

