import './App.css';
import React from 'react';

class ShoppingListItem extends React.Component {
  render() {
    return (
      <tr key={`${this.props.item.id}-row`}>
        <td key={`${this.props.item.id}-row-name`} className="align-middle">
          {this.props.item.name}
        </td>
        <td key={`${this.props.item.id}-row-category`} className="align-middle">
          {this.props.item.category}
        </td>
        <td key={`${this.props.item.id}-row-quantity`} className="align-middle text-center">
          {this.props.item.quantity}
        </td>
        <td key={`${this.props.item.id}-row-price`} className="align-middle text-center">
          {this.props.item.price}
        </td>
        <td key={`${this.props.item.id}-row-actions`} className="align-middle text-end">
          <button type="button" className="btn btn-outline-secondary">Edit</button>
        </td>
      </tr>
    );
  }
}

export default ShoppingListItem;
