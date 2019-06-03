import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './components/styles/Globalstyles';
import NavBar from './components/layout/NavBar';
import DashBoard from './components/layout/DashBoard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <NavBar />
        <div className="container">
          <Route path="/" exact component={DashBoard} />
          <Route path="/client/add" component={AddClient} />
          <Route path="/client/:id" component={ClientDetails} />
        </div>
      </Router>
    </Provider>
  );
}
