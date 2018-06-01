'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18nextReducer = exports.initialState = undefined;

var _actionTypes = require('./action-types');

var initialState = exports.initialState = {
  language: null,
  whitelist: [],
  fallbackLng: null,
  ns: [],
  defaultNS: null,
  debug: false
};

var i18nextReducer = exports.i18nextReducer = function i18nextReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.LANGUAGE_CHANGE:
      if (action.payload !== state.language) {
        return Object.assign({}, state, { language: action.payload });
      }
      return state;
    default:
      return state;
  }
};