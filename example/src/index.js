import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import configureStore from './store';
import configureI18n from './i18n';
import { languageChange } from 'i18next-redux-languagedetector';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const i18nextConfig = {
  language: null,
  whitelist: ['en', 'de', 'ru'],
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  debug: true,
}

const { store } = configureStore({
  i18next: i18nextConfig,
});

const i18n = configureI18n({
  i18nextConfig: i18nextConfig,
  redux: {
    lookupRedux: () => store.getState().i18next,
    cacheUserLanguageRedux: (language) => store.dispatch(languageChange(language))
  }
});


ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
