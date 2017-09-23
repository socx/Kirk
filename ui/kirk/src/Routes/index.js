import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../Login';
import ForgotPassword from '../Login/ForgotPassword'
import Home from '../Home';

const Routes = (history) => (
    <main>
        <Route exact path='/home' component={Home} history={history} />
        <Route exact path='/' component={Login} history={history} />
        <Route exact path='/forgotPassword' component={ForgotPassword} history={history} />
    </main>    
)

export default Routes