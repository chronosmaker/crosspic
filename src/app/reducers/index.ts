import {ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {RouterStateUrl} from '../shared/utils';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  layout: null;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  layout: null,
  routerReducer: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

// export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
// export const getShowSidenav = createSelector(
//   getLayoutState,
//   fromLayout.getShowSidenav
// );
