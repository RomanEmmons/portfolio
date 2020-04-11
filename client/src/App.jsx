import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Options from './Options.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'options',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectPage = this.selectPage.bind(this);
  }

  handleChange(event) {}

  handleSubmit(event) {
    event.preventDefault();
  }

  selectPage(pageName) {
    console.log('page name: ', pageName);
  }

  render() {
    return (
      <div>
        <div className="banner">
          <h1>Roman Emmons</h1>
        </div>
        {this.state.page === 'options' ? (
          <Options selectPage={this.selectPage} />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
