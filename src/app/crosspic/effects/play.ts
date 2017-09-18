import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {CrosspicService} from "../services/crosspic.service";
import * as play from '../actions/play';
import * as fromPlay from '../reducers/play';

@Injectable()
export class PlayEffects {
  @Effect()
  getMission$: Observable<Action> = this.actions$
    .ofType<play.GetMission>(play.GET_MISSION)
    .map(action => action.payload)
    .switchMap(query => {
      return this.crosspicService.getMissionData(query)
        .map((mission: fromPlay.State) => new play.LoadMission(mission))
        .catch(() => of(new play.LoadMission(fromPlay.initialState)));
    });

  constructor(private actions$: Actions, private crosspicService: CrosspicService) {
  }
}
