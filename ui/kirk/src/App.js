import React from 'react';
import { Route } from 'react-router-dom';
import './assets/css/components.min.css';
import './assets/css/layout1.min.css';
import './assets/css/default1.min.css';
import './assets/css/custom1.min.css';
import './App.css';
import AppHeader from './AppHeader';
import Home from './home';

const App = () => (
  <div className='page-wrapper'>
    <AppHeader/>
    <div className='clearfix'> </div>
    <div className='page-container'> 
      <Route exact path='/' component={Home} />
    </div>
    <div className='page-footer'> 
    </div>
  </div>
)
export default App;
