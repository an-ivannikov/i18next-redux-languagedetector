export default {
  name: 'redux',

  lookup(options) {
    let found;
    if (options.lookupRedux) {
      const language = options.lookupRedux().language;
      if (language) found = language;
    }
    return found;
  },

  cacheUserLanguage(newLanguage, options) {
    if (options.cacheUserLanguageRedux && options.lookupRedux) {
      const currentLanguage = options.lookupRedux().language;
      if (currentLanguage !== newLanguage) {
        options.cacheUserLanguageRedux(newLanguage);
      }
    }
  }

};
