import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Route exact path='/' component={Home} />
        <Route path='/rooms/new' component={NewRoom} />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
