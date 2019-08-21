import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/index';

// create store with screenView and user info.
// To use redux dev tools, add second param  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__().
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    // Added provider, to have acces to store for all app 
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


serviceWorker.unregister();
