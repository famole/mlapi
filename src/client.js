import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import App from './App';
import { Provider } from 'react-redux';
import "./_/css/common.less";
import configureStore from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);

module.hot && module.hot.accept();
