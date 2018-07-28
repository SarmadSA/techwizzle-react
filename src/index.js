import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/global.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store =  createStore(reducer);

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
