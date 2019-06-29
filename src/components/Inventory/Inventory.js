import React from 'react';
import Fish from '../Fish/Fish';

import './Inventory.scss';

class Inventory extends React.Component {
  render() {
    const fishComponents = this.props.fishes.map(fish => (
            <Fish key={fish.id} fish={fish}/>
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
