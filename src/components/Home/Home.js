import React from 'react';

import './Home.scss';
import NewOrder from '../NewOrder/NewOrder';
import Inventory from '../Inventory/Inventory';
import Orders from '../Orders/Orders';


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <Inventory />
        </div>
        <div className="col">
          <NewOrder />
          </div><div className="col">
            <Orders />
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
