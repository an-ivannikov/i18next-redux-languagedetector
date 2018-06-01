import * as types from './action-types'


export const languageChange = (language) => ({
  type: types.LANGUAGE_CHANGE,
  payload: language
});
