import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Options from './Options.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import { chonky, rsvp, stock } from '../../portfolioData/portfolio.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'landing',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectPage = this.selectPage.bind(this);
  }

  componentDidMount() {
    this.setState({ applications: [chonky, rsvp, stock] });
  }

  handleChange(event) {}

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
          <div className="icon-container">
            <a href="https://github.com/RomanEmmons" className="icons2">
              Z
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/roman-emmons-a4a048180"
              className="icons1"
            >
              I
            </a>
            <br></br>
            <a
              href="https://www.instagram.com/liquor_rich/?hl=en"
              className="icons2"
            >
              I
            </a>
            <br></br>
            <a
              href="https://www.facebook.com/romandanielemmons"
              className="icons1"
            >
              F
            </a>
            <br></br>
            <a href="https://twitter.com/EmmonsRoman" className="icons1">
              L
            </a>
            <br></br>
            <a href="mailto:roman.emmons@gmail.com" className="icons2">
              M
            </a>
          </div>
          <h1>Roman Emmons</h1>
          <Options className="options" selectPage={this.selectPage} />
        </div>
        {this.state.page === 'about' ? (
          <div>
            <About selectPage={this.selectPage} page={this.state.page} />
          </div>
        ) : null}

        {this.state.page === 'portfolio' ? (
          <Portfolio
            page={this.state.page}
            applications={this.state.applications}
          />
        ) : null}
        {this.state.page === 'contact' ? (
          <Contact page={this.state.page} />
        ) : null}
        {this.state.page === 'game' ? <Game page={this.state.page} /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
