import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import AddEditAndDelete from './pages/add-edit-and-delete/add-edit-and-delete.component';

function App() {
  return (
    <div>
      <Header style={{ marginBottom: '120px' }} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/add' component={AddEditAndDelete} />
        <Route path='/edit' component={AddEditAndDelete} />
      </Switch>
    </div>
  );
}

export default App;
