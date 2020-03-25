import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OsloBySykkel from './component/app/OsloBySykkel';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <OsloBySykkel />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
