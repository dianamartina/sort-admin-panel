import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Employees from './pages/Employees/Employees';

import './App.css';

function App() {
  return (
    <div className="App">
       <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/people" component={Employees} />
        </Switch>
    </div>
  );
}

export default App;
