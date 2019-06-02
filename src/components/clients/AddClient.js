import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack } from 'styled-icons/boxicons-regular/ArrowBack';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { LinkBtn, SubmitBtn } from '../styles/buttons';
import { Card } from '../styles/layout/Card';

class AddClient extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newClient = this.state;
    const { firestore, history } = this.props;

    // if no balnce then 0
    if (newClient.balance === '') {
      newClient.balance = 0;
    }

    firestore
      .add({ collection: 'clients' }, newClient)
      .then(() => history.push('/'));
  };

  render() {
    return (
      <AddClientWrapper>
        <div className="row">
          <div className="col-md-6">
            <Link to="/">
              <LinkBtn id="linkbtn">
                Back to dashboard <ArrowBack size="35" />{' '}
              </LinkBtn>
            </Link>
          </div>
        </div>
        <Card>
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  minLength="2"
                  required
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  minLength="2"
                  required
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">phone</label>
                <input
                  type="text"
                  name="phone"
                  minLength="10"
                  required
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="balance">balance</label>
                <input
                  type="text"
                  name="balance"
                  onChange={this.handleChange}
                  value={this.state.balance}
                />
              </div>
              <SubmitBtn id="submit">Submit</SubmitBtn>
            </form>
          </div>
        </Card>
      </AddClientWrapper>
    );
  }
}

AddClient.propTypes = {
  fireStore: PropTypes.object.isRequired,
};

const AddClientWrapper = styled.div`
  #linkbtn {
    background: transparent;
  }

  #submit {
    width: 30%;
    display: block;
    margin: 2rem auto;
  }
`;
export default firestoreConnect()(AddClient);
