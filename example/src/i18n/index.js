import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import ReduxDetector from 'i18next-redux-languagedetector';

import Backend from 'i18next-chained-backend';
import XHR from 'i18next-xhr-backend';


const LngDetector = new LanguageDetector();
LngDetector.addDetector(ReduxDetector);

export default function configureI18n({ redux, i18nextConfig }) {
  i18n
    .use(Backend)
    .use(LngDetector)
    .use(reactI18nextModule)
    .init({
      backend: {
        // array of existing i18next backends from https://www.i18next.com/plugins-and-utils.html#backends
        backends: [
          XHR      // primary // fallback
        ],
        // array of options in order of backends above
        backendOptions: [
          {
            loadPath: '/locales/{{lng}}/{{ns}}.json' // xhr load path for my own fallback
          }
        ]
      },

      detection: {
        // order and from where user language should be detected
        // order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        order: [
          'redux',
        ],

        // keys or params to lookup language from
        // lookupQuerystring: 'lng',
        // lookupCookie: 'i18next',
        // lookupLocalStorage: 'i18nextLng',
        // lookupFromPathIndex: 0,
        // lookupFromSubdomainIndex: 0,

        lookupRedux: redux.lookupRedux,
        cacheUserLanguageRedux: redux.cacheUserLanguageRedux,

        // cache user language on
        // caches: ['localStorage', 'cookie'],
        caches: ['redux'],
        excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

        // optional expire and domain for set cookie
        // cookieMinutes: 10,
        // cookieDomain: 'myDomain',

        // optional htmlTag with lang attribute, the default is:
        // htmlTag: document.documentElement
      },

      whitelist: i18nextConfig.whitelist,
      fallbackLng: i18nextConfig.fallbackLng,
      // have a common namespace used around the full app
      ns: i18nextConfig.ns,
      defaultNS: i18nextConfig.defaultNS,
      debug: i18nextConfig.debug,

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      react: {
        defaultTransParent: 'div', // needed for preact
        wait: true
      }
    });

  return i18n;
};
