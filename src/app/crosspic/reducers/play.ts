import * as play from '../actions/play';

export interface State {
  id: string;
  title: string;
  option: MOption;
  data: Array<MData[]>;
}

export interface MOption {
  row: number;
  col: number;
  life: number;
}

export interface MData {
  fill: number;
  color: string;
}

export const initialState: State = {
  id: '',
  title: '',
  option: {row: 0, col: 0, life: 0},
  data: [[{fill: 0, color: ''}]]
};

export function reducer(state = initialState, action: play.Actions): State {
  switch (action.type) {
    case play.GET_MISSION: {
      return state;
    }
    case play.LOAD_MISSION: {
      return Object.assign({}, state, action.payload);
    }
    default: {
      return state;
    }
  }
}
