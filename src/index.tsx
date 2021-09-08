import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import { VanillaApp } from './VanillaExampleApp';

import { Provider } from 'react-redux';
import { ReduxExampleApp } from 'ReduxExampleApp';
import { reduxRootStore } from 'ReduxStore/root.store';

import { reduxToolkitRootStore } from 'ReduxToolkitStore/root.store';

import 'bulma/css/bulma.min.css';
import { ReduxToolkitExampleApp } from 'ReduxToolkitExample';

enum BuildTargets {
  VANILLA_DEMO = 'VanillaExample',
  REDUX_FINISHED_EXAMPLE = 'ReduxFinishedExample',
  REDUX_TOOLKIT_FINISHED_EXAMPLE = 'ReduxToolkitFinishedExample',
  REDUX_EXERCISE = 'Exercise',
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
      <Provider store={reduxRootStore}>
        <ReduxExampleApp />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
} else if (
  BuildTargets.REDUX_TOOLKIT_FINISHED_EXAMPLE === process.env.REACT_APP_BUILD_TARGET
) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={reduxToolkitRootStore}>
        <ReduxToolkitExampleApp />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
