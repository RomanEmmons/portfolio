import React from 'react';
import { Carousel } from 'react-responsive-carousel';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ applications: this.props.applications });
  }

  render() {
    return (
      <div className="portOuter">
        {this.props.page === 'portfolio' ? (
          <Carousel
            className="projects"
            interval={20000}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
          >
            {this.state.applications
              ? this.state.applications.map((application, i) => (
                  <div key={i} className="portfolio">
                    <h2>{application.title}</h2>
                    <div className="innerPort">
                      <div className="portfolioImage">
                        <img src={application.image.default}></img>
                      </div>
                      <div className="facts">
                        <p>{application.description}</p>
                        <br></br>
                        <p>Stack: {application.stack}</p>
                        <br></br>
                        <a href={application.github}>{application.github}</a>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </Carousel>
        ) : null}
      </div>
    );
  }
}

export default Portfolio;
