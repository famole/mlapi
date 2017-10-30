import React from 'react'
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import Link from 'react-router-dom/Link';
import Home from './container/Home';
import Detail from './container/About';
import MainLayout from './container/MainLayout';
import NotFound from './presenter/NotFound';

export default () => (
    <div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/items" exact component={Home}/>            
            <Route path="/items/:id" component={Home} />
            <Route path="/about" exact component={Detail} />            
            <Redirect from="/home" to="/"/>
            <Route component={NotFound} />            
        </Switch>
    </div>
);