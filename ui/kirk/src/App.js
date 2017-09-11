import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Home from './home';

const App = () => (
  <div>
    <header>
        <Link to='/'>Home</Link>
    </header>
    <main>
      <Route exact path='/' component = {Home} />
    </main>
  </div>
)
export default App;
