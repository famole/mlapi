import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import App from './App';
import { Provider } from 'react-redux';
import "./_/css/common.less";
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('app')
);

module.hot && module.hot.accept();
