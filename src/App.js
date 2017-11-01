import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import HashRouter from 'react-router-dom/HashRouter';
import Routes from './routes';
import MainLayout from './container/MainLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Router = history.pushState ? BrowserRouter : HashRouter;

class App extends React.Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <MainLayout>
                        <Routes />
                    </MainLayout>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
