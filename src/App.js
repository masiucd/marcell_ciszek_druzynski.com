import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './components/styles/Globalstyles';
import NavBar from './components/layout/NavBar';
import DashBoard from './components/layout/DashBoard';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <div className="container">
        <Route path="/" exact component={DashBoard} />
      </div>
    </Router>
  );
}
