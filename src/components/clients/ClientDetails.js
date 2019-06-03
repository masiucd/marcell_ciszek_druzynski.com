import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { LinkBtn } from '../styles/buttons';
import { colours } from '../styles/Globalstyles';
import { CardClient } from '../styles/layout/Card';

class ClientDetails extends Component {
  render() {
    const { client } = this.props;
    if (client) {
      return (
        <DetailWrapper>
          <div className="row">
            <div className="col-md-6">
              <Link to="/">
                {' '}
                <LinkBtn className="cta-back">Back Home</LinkBtn>{' '}
              </Link>
            </div>
            <div className="col-md-6">
              <LinkBtn className="cta-delete">Delete</LinkBtn>{' '}
              <Link to="/client/:id">
                {' '}
                <LinkBtn className="cta-edit">Edit</LinkBtn>{' '}
              </Link>
            </div>
          </div>
          <hr />
          <CardClient>
            <div className="card-header">
              <h3>
                {' '}
                {client.firstName} {client.lastName}{' '}
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <h4>
                    Client ID: <span className="client-id">{client.id}</span>{' '}
                  </h4>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h4>
                    Balance:{' '}
                    <span
                      className={`balance ${
                        client.balance <= 0 ? 'text-red' : 'text-green'
                      }`}
                    >
                      ${parseFloat(client.balance).toFixed(2)}
                    </span>
                  </h4>
                </div>
              </div>
            </div>

            <hr />
            <ul>
              <li> Contact Email: {client.email}</li>
              <li> Contact Phone: {client.phone}</li>
            </ul>
          </CardClient>
        </DetailWrapper>
      );
    }
    return <span />;
  }
}

ClientDetails.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect(props => [
    { collection: 'clients', storeAs: 'client', doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0], // gives the single client
  }))
)(ClientDetails);

const DetailWrapper = styled.div`
  padding: 1rem 3rem;
  .cta-back {
    background: transparent;
    padding: 0.7rem 1.6rem;
  }
  .cta-edit {
    background: ${colours.black};
    padding: 0.7rem 1.6rem;
    float: right;
    &:hover {
      color: ${colours.blueL};
    }
  }
  .cta-delete {
    background: ${colours.red};
    padding: 0.7rem 1.6rem;
    float: right;
    margin-left: 1.4rem;
  }
  hr {
    margin: 2rem 0;
    border: 0;
    height: 2px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0)
    );
  }
`;
