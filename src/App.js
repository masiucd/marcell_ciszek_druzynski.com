import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './components/styles/Globalstyles';
import NavBar from './components/layout/NavBar';
import DashBoard from './components/layout/DashBoard';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <NavBar />
        <div className="container">
          <Route path="/" exact component={DashBoard} />
        </div>
      </Router>
    </Provider>
  );
}
