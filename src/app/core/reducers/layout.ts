import * as layout from '../actions/layout';

export interface State {
  site: string;
  activeMenu: Menu;
  menus: Menu[];
}

export interface Menu {
  id: string;
  title: string;
  url: string;
}

const initialState: State = {
  site: 'chronos.red',
  activeMenu: {id: 'home', title: 'home', url: '/home'},
  menus: [
    {id: 'home', title: 'home', url: '/home'},
    {id: 'crosspic', title: '{crosspic}', url: '/crosspic'}
  ]
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.SELECT_MODULE:
      return Object.assign({}, state, {
        activeMenu: state.menus.find(val => val.id === action.payload),
      });
    default:
      return state;
  }
}

export const getSite = (state: State) => state.site;
export const getActiveMenus = (state: State) => state.activeMenu;
export const getMenus = (state: State) => state.menus;
