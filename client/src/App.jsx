import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Options from './Options.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Breakout from './Breakout.jsx';
import Icons from './Icons.jsx';
import { chonky, rsvp, stock, repo } from '../../portfolioData/portfolio.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'portfolio',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectPage = this.selectPage.bind(this);
  }

  componentDidMount() {
    this.setState({ applications: [chonky, rsvp, stock, repo] });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  selectPage(pageName) {
    this.setState({ page: pageName });
  }

  render() {
    return (
      <div>
        <div className="banner">
          <Icons />
          <h1>Roman Emmons</h1>
          <Options className="options" selectPage={this.selectPage} />
        </div>
        {this.state.page === 'about' ? (
          <div>
            <About selectPage={this.selectPage} />
          </div>
        ) : null}
        {this.state.page === 'breakout' ? (
          <Breakout className="breakout" />
        ) : null}
        {this.state.page === 'portfolio' ? (
          <Portfolio applications={this.state.applications} />
        ) : null}
        {this.state.page === 'contact' ? <Contact /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
