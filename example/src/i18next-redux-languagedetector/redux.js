'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'redux',

  lookup: function lookup(options) {
    var found = void 0;
    if (options.lookupRedux) {
      var language = options.lookupRedux().language;
      if (language) found = language;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(newLanguage, options) {
    if (options.cacheUserLanguageRedux && options.lookupRedux) {
      var currentLanguage = options.lookupRedux().language;
      if (currentLanguage !== newLanguage) {
        options.cacheUserLanguageRedux(newLanguage);
      }
    }
  }
};