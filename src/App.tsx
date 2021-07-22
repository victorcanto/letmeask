import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/rooms/new' component={NewRoom} />
    </Router>
  );
}

export default App;
