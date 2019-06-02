import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { People } from 'styled-icons/material/People';
import { LinkBtn } from '../styles/buttons';

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

          <table className="table table-striped mt-5">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {' '}
                    {client.firstname} {client.lastname}{' '}
                  </td>
                  <td> {client.email}</td>
                  <td> ${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    {' '}
                    <Link to={`/client/${client.id}`}>
                      {' '}
                      <LinkBtn>Details</LinkBtn>{' '}
                    </Link>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Clients;
