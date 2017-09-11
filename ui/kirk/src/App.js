import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Login from './Login';
import Home from './Home';


const App = () => (
  <main>
    <Route exact path='/home' component={Home} />
    <Route exact path='/' component={Login} />
  </main>
)
export default App;
