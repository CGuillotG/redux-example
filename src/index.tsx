import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import { VanillaApp } from './VanillaApp';

import { Provider } from 'react-redux';
import { ReduxExampleApp } from 'ReduxExampleApp';
import { rootStore } from 'ReduxExampleStore/root.store';

import 'bulma/css/bulma.min.css';

enum BuildTargets {
  VANILLA_DEMO = 'Vanilla',
  REDUX_EXERCISE = 'Exercise',
  REDUX_FINISHED_EXAMPLE = 'FinishedExample',
}

if (BuildTargets.VANILLA_DEMO === process.env.REACT_APP_BUILD_TARGET) {
  ReactDOM.render(
    <React.StrictMode>
      <VanillaApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else if (BuildTargets.REDUX_FINISHED_EXAMPLE === process.env.REACT_APP_BUILD_TARGET) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={rootStore}>
        <ReduxExampleApp />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
