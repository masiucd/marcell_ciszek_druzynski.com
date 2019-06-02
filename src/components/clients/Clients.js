import React, { Component } from 'react';
import { People } from 'styled-icons/material/People';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Table from '../layout/Table';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: 1,
        firstname: 'boris',
        lastname: 'storissov',
        email: 'boris@gmail.com',
        phone: '555 555 5555',
        balance: '67',
      },
      {
        id: 2,
        firstname: 'Aleks',
        lastname: 'Balkov',
        email: 'Aleks@gmail.com',
        phone: '555 555 5555',
        balance: '12',
      },
    ];
    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {' '}
                <People size="45" /> Clients
              </h2>
            </div>
            <div className="col-md-6">
              <p>s</p>
            </div>
          </div>
          <Table clients={clients} />
        </div>
      );
    }
  }
}

export default compose(
  firestoreConnect([{ collection: 'clients' }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients,
  }))
)(Clients);
