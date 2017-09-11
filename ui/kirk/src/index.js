import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/components.min.css';
import './assets/css/layout1.min.css';
import './assets/css/default1.min.css';
import './assets/css/custom1.min.css';

import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history} from './store'

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>, 
    document.querySelector('#root')
);

registerServiceWorker();
