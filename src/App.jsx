import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import ShoppingList from './ShoppingList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      queryText: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleItemNameClick = this.handleItemNameClick.bind(this);
    this.handleItemEditClick = this.handleItemEditClick.bind(this);
    this.handleItemSaveClick = this.handleItemSaveClick.bind(this);
  }

  handleTextChange(event) {
    this.setState({ queryText: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    if (!this.state.queryText.trim()) {
      return;
    }

    const item = {
      id: nanoid(),
      name: this.state.queryText.trim(),
      isCrossed: false,
      isEditing: false,
      category: '',
      quantity: 0,
      price: 0
    };

    this.setState({
      items: this.state.items.concat(item),
      queryText: ''
    }, () => {
      console.log(this.state.items);
    });
  }

  handleItemNameClick(id) {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isCrossed: !item.isCrossed,
            isEditing: false,
          };
        } else {
          return {
            ...item,
            isEditing: false,
          };
        }
      })
    });
  }

  handleItemEditClick(id) {
    this.setState({
      items: this.state.items.map(item => {
        return {
          ...item,
          isEditing: item.id === id,
        };
      })
    });
  }

  handleItemSaveClick(id, updatedItem) {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isEditing: false,
            category: updatedItem.category,
            quantity: updatedItem.quantity,
            price: updatedItem.price,
          };
        } else {
          return {
            ...item,
            isEditing: false,
          };
        }
      })
    });
  }

  render() {
    return (
      <main>
        <header>
          <div className="container my-5">
            <form onSubmit={this.handleFormSubmit}>
              <div className="d-flex">
                <div className="p-2 flex-grow-1">
                  <input type="text" className="form-control" placeholder="Type here..."
                    value={this.state.queryText} onChange={this.handleTextChange} />
                </div>
                <div className="p-2">
                  <input type="submit" className="btn btn-primary" value="Create" disabled={!this.state.queryText} />
                </div>
              </div>
            </form>
          </div>
        </header>
        <ShoppingList 
        name="Pending Items"
        items={this.state.items
        .filter((item) => !item.isCrossed && item.name.includes(this.state.queryText))
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.category.localeCompare(b.category))}
        handleItemNameClick={this.handleItemNameClick}
        handleItemEditClick={this.handleItemEditClick}
        handleItemSaveClick={this.handleItemSaveClick} />
        <ShoppingList 
        name="Crossed Items"
        items={this.state.items
        .filter((item) => item.isCrossed && item.name.includes(this.state.queryText))
        .sort((a, b) => a.name.localeCompare(b.name))}
        handleItemNameClick={this.handleItemNameClick}
        handleItemEditClick={this.handleItemEditClick}
        handleItemSaveClick={this.handleItemSaveClick} /> 
      </main>
    );
  }
}

export default App;
