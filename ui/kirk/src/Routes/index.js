import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../Login';
import Home from '../Home';

const Routes = () => (
    <main>
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={Login} />
    </main>    
)

export default Routes