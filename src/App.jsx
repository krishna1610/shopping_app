import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      queryText: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
      </main>
    );
  }
}

export default App;
