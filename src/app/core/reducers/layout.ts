import * as layout from '../actions/layout';

export interface State {
  site: string;
  activeMenu: Menu;
  menus: Menu[];
}

export interface Menu {
  title: string;
  url: string;
}

const initialState: State = {
  site: 'chronos.red',
  activeMenu: {title: 'home', url: '/home'},
  menus: [
    {title: 'home', url: '/home'},
    {title: '{crosspic}', url: '/crosspic'}
  ]
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.SELECT_MODULE:
      return Object.assign({}, state, {
        activeMenu: action.payload,
      });
    default:
      return state;
  }
}

export const getSite = (state: State) => state.site;
export const getActiveMenus = (state: State) => state.activeMenu;
export const getMenus = (state: State) => state.menus;
