import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LinkBtn } from '../styles/buttons';
import { colours } from '../styles/Globalstyles';

const Table = ({ firstname, lastname, email, balance, clients }) => (
  <StyledTable className="table table-striped mt-5 ">
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
  </StyledTable>
);

export default Table;

const StyledTable = styled.table`
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0.5rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    box-shadow: 0.8rem 0.8rem 0.7rem rgba(0, 0, 0, 0.2);
  }
  th {
    font-size: 1.9rem;
  }
  td {
    font-size: 1.6rem;
  }
`;
