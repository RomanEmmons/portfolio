import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Options from './Options.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Headshot from './Headshot.jsx';
import Contact from './Contact.jsx';
import Breakout from './Breakout.jsx';
import Icons from './Icons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'breakout',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectPage = this.selectPage.bind(this);
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
        <div>
          <About selectPage={this.selectPage} />
        </div>
        <Headshot />

        <Portfolio />
        <Breakout className="breakout" />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
