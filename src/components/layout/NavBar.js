import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight';
import { Nav } from '../styles/layout/Nav';

export default class NavBar extends Component {
  render() {
    return (
      <Nav>
        <MenuAltRight size="45" id="nav-icon" />
        <ul>
          <li>
            <Link to="/" id="main-link">
              ClientPanel
            </Link>
          </li>
          <li>
            <Link to="/">DashBoard</Link>
          </li>
        </ul>
      </Nav>
    );
  }
}
