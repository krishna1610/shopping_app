import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.setState({
      queryText: ''
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
