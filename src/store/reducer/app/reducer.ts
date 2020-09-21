import * as actionTypes from './actionTypes';

const defaultState = {
  appName:'music'
};

export default (state = defaultState, action:any) => {
  switch(action.type) {
    case actionTypes.CHANGE_APP_NAME:{
      const newState:any = JSON.parse(JSON.stringify(state));
      newState.appName = action.data;
      return newState;
    }
    default:
      return state;
  }
};