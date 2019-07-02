import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import orderShapes from '../../helpers/propz/orderShapes';


class OrderRow extends React.Component {
  static propTypes = {
    order: orderShapes.orderShape,
    deleteOrder: PropTypes.func.isRequired,
  }

  deleteOrderEvent = (e) => {
    const { order, deleteOrder } = this.props;
    e.preventDefault();
    deleteOrder(order.id);
  }

  selecetOrder = (e) => {
    e.preventDefault();
    const { order, selectOrderToEdit } = this.props;
    selectOrderToEdit(order.id);
  }

  render() {
    const { order } = this.props;
    const numFish = Object.values(order.fishes).reduce((a, b) => a + b);
    return (
      <tr>
        <th>
        <button className="link-button" onClick={this.selectOrder}>{order.name}</button>
        </th>
        <td>{moment(order.date).format('LLL')}</td>
        <td>{numFish}</td>
        <th>
        <button className="btn btn-danger" onClick={this.deleteOrderEvent}>x</button>
        </th>
      </tr>
    );
  }
}

export default OrderRow;
