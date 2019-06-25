import React from 'react';


import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import Inventory from '../components/Inventory/Inventory';
import Orders from '../components/Orders/Orders';
import NewOrder from '../components/NewOrder/NewOrder';

import fbConnection from '../helpers/data/connections';

fbConnection();

class App extends React.Component {
  state= {
    authed: false,
  }

  render() {
    const loadComponent = () => {
      if (this.state.authed) {
        return <Home />;
      }
      return <Auth />;
    };
    return (
    <div className="App">
      {loadComponent()}
    </div>
    );
  }
}

export default App;
