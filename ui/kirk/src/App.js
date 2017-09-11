import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Login from './Login';
import Home from './home';


const App = () => (
  <main>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
  </main>
)
export default App;
