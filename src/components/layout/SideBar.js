import React from 'react';
import { Link } from 'react-router-dom';
import { Add } from 'styled-icons/material/Add';
import { BtnPrimary } from '../styles/buttons';

const SideBar = () => (
  <Link to="/client/add">
    {' '}
    <BtnPrimary>
      <Add size="35" /> New
    </BtnPrimary>
  </Link>
);

export default SideBar;
