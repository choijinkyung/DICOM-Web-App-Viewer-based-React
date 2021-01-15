import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import initCornerstone from './cornerstone/initCornerstone.js';

//
initCornerstone();
ReactDOM.render(<App />, document.getElementById('root'));
