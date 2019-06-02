import React from 'react';
import Clients from '../clients/Clients';
import SideBar from './SideBar';

export default function DashBoard() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-">
        <SideBar />
      </div>
    </div>
  );
}
