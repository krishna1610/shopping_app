import './App.css';
import React from 'react';

class ShoppingListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemNameClick = this.handleItemNameClick.bind(this);
  }

  handleItemNameClick(event) {
    event.preventDefault();
    this.props.handleItemNameClick(this.props.item.id);
  }

  render() {
    return (
      <tr key={`${this.props.item.id}-row`}>
        <td key={`${this.props.item.id}-row-name`} className="align-middle">
          <button type="button" 
          className="btn btn-link px-0"
          onClick={this.handleItemNameClick}>
            {this.props.item.name}
          </button>
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
