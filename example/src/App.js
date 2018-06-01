import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{t('title')}</h1>
          <button onClick={() => changeLanguage('en')}>en</button>
          <button onClick={() => changeLanguage('de')}>de</button>
          <button onClick={() => changeLanguage('ru')}>ru</button>
        </header>
        <div className="App-intro">
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div>{t('description.part2')}</div>
      </div>
    );
  }
}

export default translate('translations')(App);
