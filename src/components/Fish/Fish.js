import React from 'react';

import './Fish.scss';
import format from '../../helpers/format';
import fishShapes from '../../helpers/propz/fishShapes';


class Fish extends React.Component {
    static propTypes = {
      fish: fishShapes.fishShape,
    }

    render() {
      const { fish } = this.props;
      const isAvailable = fish.status === 'available';
      // eslint-disable-next-line
      const image = require(`${fish.image}`); 
      return (
        <li className="Fish">
        <img src={image} alt={fish.name} />
        <h3 className="name">
          {fish.name}
          <span className="price">{format.formatPrice(fish.price)}</span>
        </h3>
        <p>{fish.desc}</p>
        <button
          disabled={!isAvailable}
        >
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>

      );
    }
}

export default Fish;
