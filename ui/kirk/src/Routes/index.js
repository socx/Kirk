import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../Login';
import Logout from '../Login/Logout';
import ForgotPassword from '../Login/ForgotPassword'
import Home from '../Home';
import Contact from '../Contact';
import Dashboard from '../Dashboard';
import Finance from '../Finance';

const Routes = (history) => (
    <main>
        <Route exact path='/' component={Login} history={history} />
        <Route exact path='/logout' component={Logout} history={history} />
        <Route exact path='/forgotPassword' component={ForgotPassword} history={history} />
        <Route exact path='/home' component={Home} history={history} />
        <Route exact path='/contact' component={Contact} history={history} />
        <Route exact path='/dashboard' component={Dashboard} history={history} />
        <Route exact path='/finance' component={Finance} history={history} />
    </main>    
)

export default Routes