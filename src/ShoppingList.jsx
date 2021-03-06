import './App.css';
import React from 'react';
import ShoppingListItem from './ShoppingListItem';

class ShoppingList extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <table className="table table-hover table-responsive my-5">
            <colgroup key={`${this.props.name}-colgroup`}>
              <col key={`${this.props.name}-colgroup-name`} className="col-6" />
              <col key={`${this.props.name}-colgroup-category`} className="col-3" />
              <col key={`${this.props.name}-colgroup-quantity`} className="col-1" />
              <col key={`${this.props.name}-colgroup-price`} className="col-1" />
              <col key={`${this.props.name}-colgroup-actions`} className="col-1" />
            </colgroup>
            <thead>
              <tr key={`${this.props.name}-header`}>
                <th key={`${this.props.name}-header-name`} scope="row">{this.props.name}</th>
                <th key={`${this.props.name}-header-category`}>Category</th>
                <th key={`${this.props.name}-header-quantity`} className="text-center">Quantity</th>
                <th key={`${this.props.name}-header-price`} className="text-center">Price</th>
                <th key={`${this.props.name}-header-actions`}></th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.items.map(item => (
                <ShoppingListItem 
                key={item.id} 
                item={item}
                handleItemNameClick={this.props.handleItemNameClick}
                handleItemEditClick={this.props.handleItemEditClick}
                handleItemSaveClick={this.props.handleItemSaveClick} />
                ))
              }
            </tbody>
            <tfoot>
              <tr key={`${this.props.name}-footer`}>
                <th key={`${this.props.name}-footer-name`} scope="row" colSpan="3">Subtotal</th>
                <th key={`${this.props.name}-footer-price`} className="text-center">
                  ${this.props.items.reduce((sum, item) => sum + item.price, 0)}
                </th>
                <th key={`${this.props.name}-footer-actions`}></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    );
  }
}

export default ShoppingList;
