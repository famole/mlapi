import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import HashRouter from 'react-router-dom/HashRouter';
import routes from './routes';
import MainLayout from './container/MainLayout';

const Router = history.pushState ? BrowserRouter : HashRouter;

class App extends React.Component {
    render() {
        return (
            <MainLayout>
                <Router>
                    {routes}
                </Router>
            </MainLayout>
        );
    }
}

export default App;