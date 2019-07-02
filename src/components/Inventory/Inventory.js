import React from 'react';
import PropTypes from 'prop-types';
import Fish from '../Fish/Fish';

import './Inventory.scss';
import fishShapes from '../../helpers/propz/fishShapes';

class Inventory extends React.Component {
  static propTypes = {
    fish: PropTypes.arrayOf(fishShapes.orderShape),
    addFishToOrder: PropTypes.func.isRequired,
  }

  render() {
    const fishComponents = this.props.fishes.map(fish => (
            <Fish key={fish.id} fish={fish} addFishToOrder={this.props.addFishToOrder} />
    ));
    return (
            <div className="Inventory">
                <h2>Inventory</h2>
                <ul className="fishes">
                    {fishComponents}
                </ul>
            </div>
    );
  }
}

export default Inventory;
