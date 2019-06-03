import React, { Component } from 'react';
import { People } from 'styled-icons/material/People';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import styled from 'styled-components';
import { fadeIn } from '../styles/animation';
import Table from '../layout/Table';
import Spinner from '../layout/Spinner';
import { colours } from '../styles/Globalstyles';

class Clients extends Component {
  state = {
    totalOwned: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    if (clients) {
      // Add balances
      const total = clients.reduce(
        (total, client) => total + parseFloat(client.balance.toString()),
        0
      );

      return { totalOwned: total };
    }

    return null;
  }

  render() {
    const { clients } = this.props;
    const { totalOwned } = this.state;
    if (clients) {
      return (
        <ClientWrapper>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {' '}
                <People size="45" /> Clients
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right">
                Total Owned:{' '}
                <span className="totalowned">
                  {' '}
                  ${parseFloat(totalOwned).toFixed(2)}{' '}
                </span>
              </h5>
            </div>
          </div>
          <Table clients={clients} />
        </ClientWrapper>
      );
    }
    return <span />;
  }
}

Clients.propTypes = {
  fireStore: PropTypes.object.isRequired,
  clients: PropTypes.array,
};

export default compose(
  firestoreConnect([{ collection: 'clients' }]),
  connect((state, props) => ({
    clients: state.firestore.ordered.clients,
  }))
)(Clients);

const ClientWrapper = styled.div`
  animation: 1s ${fadeIn} ease-in;
  .text-right {
    color: ${colours.white};
    font-size: 1.8rem;
    .totalowned {
      color: ${colours.black};
      font-size: 1.8rem;
    }
  }
`;
