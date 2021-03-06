import React from 'react';
import ReactDOM from 'react-dom';
import Options from './Options.jsx';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Breakout from './Breakout.jsx';
import Icons from './Icons.jsx';
import IconsMobile from './IconsMobile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
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
        {this.state.page === '' ? (
          <div className="welcomeDiv">
            <h1 className="welcome">Welcome</h1>
            <h2 className="welcome2">What would you like to see?</h2>
            <Options className="options2" selectPage={this.selectPage} />
          </div>
        ) : (
          <div className="banner">
            <Icons />
            <h1 id="roman">Roman Emmons</h1>
            <Options className="options" selectPage={this.selectPage} />
          </div>
        )}

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

        <IconsMobile />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
