import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { AuthProvider } from './contexts/AuthProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Route exact path='/' component={Home} />
        <Route path='/rooms/new' component={NewRoom} />
      </AuthProvider>
    </Router>
  );
}

export default App;
