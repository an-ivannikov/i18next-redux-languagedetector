'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('./redux');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_redux).default;
  }
});
Object.defineProperty(exports, 'ReduxDetector', {
  enumerable: true,
  get: function get() {
    return _redux.ReduxDetector;
  }
});

var _actionTypes = require('./action-types');

Object.defineProperty(exports, 'ActionTypes', {
  enumerable: true,
  get: function get() {
    return _actionTypes.ActionTypes;
  }
});

var _actions = require('./actions');

Object.defineProperty(exports, 'languageChange', {
  enumerable: true,
  get: function get() {
    return _actions.languageChange;
  }
});

var _reducer = require('./reducer');

Object.defineProperty(exports, 'i18nextReducer', {
  enumerable: true,
  get: function get() {
    return _reducer.i18nextReducer;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }