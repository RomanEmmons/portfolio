import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Options from './Options.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
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
    this.setState({ page: pageName });
  }

  render() {
    return (
      <div>
        <div className="banner">
          <h1>Roman Emmons</h1>
        </div>
        <Options selectPage={this.selectPage} />
        <div className="display">
          <About page={this.state.page} />
          <Portfolio page={this.state.page} />
          <Contact page={this.state.page} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
