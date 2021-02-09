import './App.css';
import React from 'react';

class ShoppingListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleCategoryTextChange = this.handleCategoryTextChange.bind(this);
    this.handleQuantityTextChange = this.handleQuantityTextChange.bind(this);
    this.handlePriceTextChange = this.handlePriceTextChange.bind(this);
    this.handleItemNameClick = this.handleItemNameClick.bind(this);
    this.handleItemEditClick = this.handleItemEditClick.bind(this);
    this.handleItemSaveClick = this.handleItemSaveClick.bind(this);
  }

  handleCategoryTextChange(event) {
    this.setState({ category: event.target.value });
  }

  handleQuantityTextChange(event) {
    this.setState({ quantity: event.target.value });
  }

  handlePriceTextChange(event) {
    this.setState({ price: event.target.value });
  }

  handleItemNameClick(event) {
    event.preventDefault();
    this.props.handleItemNameClick(this.props.item.id);
  }

  handleItemEditClick(event) {
    event.preventDefault();
    this.setState({
      category: this.props.item.category,
      quantity: this.props.item.quantity,
      price: this.props.item.price,
    }, () => {
      this.props.handleItemEditClick(this.props.item.id);
    });
  }

  handleItemSaveClick(event) {
    event.preventDefault();
    const quantity = parseInt(this.state.quantity);
    const price = parseFloat(this.state.price);
    if (isNaN(quantity) || isNaN(price)) {
      return;
    }
    this.props.handleItemSaveClick(this.props.item.id, {
      category: this.state.category.trim(),
      quantity: quantity,
      price: price,
    });
  }

  render() {
    return (
      <tr key={`${this.props.item.id}-row`}>
        <td key={`${this.props.item.id}-row-name`} className="align-middle">
          {this.props.item.isEditing
            ? this.props.item.name
            : (<button type="button"
              className="btn btn-link px-0"
              onClick={this.handleItemNameClick}>{this.props.item.name}</button>)}
        </td>
        <td key={`${this.props.item.id}-row-category`} className="align-middle">
          {this.props.item.isEditing
            ? (<input type="text"
              className="form-control"
              value={this.state.category}
              onChange={this.handleCategoryTextChange} />)
            : this.props.item.category}
        </td>
        <td key={`${this.props.item.id}-row-quantity`} className="align-middle text-center">
          {this.props.item.isEditing
            ? (<input type="text"
              className="form-control"
              value={this.state.quantity}
              onChange={this.handleQuantityTextChange} />)
            : this.props.item.quantity}
        </td>
        <td key={`${this.props.item.id}-row-price`} className="align-middle text-center">
          {this.props.item.isEditing
            ? (<input type="text"
              className="form-control"
              value={this.state.price}
              onChange={this.handlePriceTextChange} />)
            : `\$${this.props.item.price}`}
        </td>
        <td key={`${this.props.item.id}-row-actions`} className="align-middle text-end">
          {this.props.item.isEditing
            ? (<button type="button"
              className="btn btn-outline-success"
              onClick={this.handleItemSaveClick}>Save</button>)
            : (<button type="button"
              className="btn btn-outline-secondary"
              onClick={this.handleItemEditClick}>Edit</button>)}
        </td>
      </tr>
    );
  }
}

export default ShoppingListItem;
