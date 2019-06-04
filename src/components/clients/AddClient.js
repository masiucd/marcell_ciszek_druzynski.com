import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack } from 'styled-icons/boxicons-regular/ArrowBack';
import styled from 'styled-components';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { LinkBtn, SubmitBtn } from '../styles/buttons';
import { Card } from '../styles/layout/Card';
import InputGroup from '../layout/InputGroup';
import { shake } from '../styles/animation';
import { colours } from '../styles/Globalstyles';

class AddClient extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: '',
    errors: {},
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newClient = this.state;
    const { firstName, lastName, email, phone, balance } = this.state;
    const { firestore, history } = this.props;

    // if no balnce then 0
    if (newClient.balance === '') {
      newClient.balance = 0;
    }

    if (firstName === '') {
      this.setState({ errors: { firstName: 'Name is required' } });
      return;
    }
    if (lastName === '') {
      this.setState({ errors: { lastName: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Name is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Name is required' } });
      return;
    }
    if (balance === '') {
      this.setState({ errors: { balance: 'Name is required' } });
      return;
    }

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      balance: '',
    });

    firestore
      .add({ collection: 'clients' }, newClient)
      .then(() => history.push('/'));
  };

  render() {
    const { firstName, lastName, email, phone, balance, errors } = this.state;
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
              <InputGroup
                label="First Name"
                type="text"
                name="firstName"
                placeholder=" Enter your first name"
                handleChange={this.handleChange}
                value={firstName}
                errors={errors.firstName}
              />
              <InputGroup
                label="Last Name"
                type="text"
                name="lastName"
                placeholder=" Enter your last name"
                handleChange={this.handleChange}
                value={lastName}
                errors={errors.lastName}
              />
              <InputGroup
                label="Email"
                type="email"
                name="email"
                placeholder=" Enter your email"
                handleChange={this.handleChange}
                value={email}
                errors={errors.email}
              />
              <InputGroup
                label="phone"
                type="text"
                name="phone"
                placeholder=" Enter your number"
                handleChange={this.handleChange}
                minLength="8"
                value={phone}
                errors={errors.phone}
              />
              <InputGroup
                label="balance"
                type="text"
                name="balance"
                placeholder="Enter balance"
                handleChange={this.handleChange}
                value={balance}
                errors={errors.balance}
              />
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

  .shake {
    border: 3px solid ${colours.red};
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    animation-duration: 1.2s;
  }
`;
export default firestoreConnect()(AddClient);
