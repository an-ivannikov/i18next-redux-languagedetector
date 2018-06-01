import { LANGUAGE_CHANGE } from './action-types';

export const initialState = {
  language: null,
  whitelist: [],
  fallbackLng: null,
  ns: [],
  defaultNS: null,
  debug: false,
}

export const i18nextReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_CHANGE:
      if (action.payload !== state.language) {
        return Object.assign({}, state, { language: action.payload });
      }
      return state;
    default:
      return state;
  }
}
