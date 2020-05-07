const chonkygif = require('../client/public/17326b5521ba5f29a16109cbaafc011a.gif');
const rsvpgif = require('../client/public/11cb9ba17c1ae4b783ae3856217d7c16.gif');
const stockgif = require('../client/public/f34e8a88cef17e7317fe983470f68482.gif');
const repopng = require('../client/public/b271cd856cb073dd1cda573d915e2a4d.png');
const bluegif = require('../client/public/a5a93d27b922c9ef8f150b83fa5dc84f.gif');

const chonky = {
  title: 'Chonky Cat',
  image: chonkygif,
  description:
    "This application returns a list of plus size cats that are available for adoption with in 150 miles of the user's zipcode.  It utilizes MongoDB's schema flexibility to store information gathered from the Petfinder API and a built in web scraper.  It also implements a MySQL database seeded with the latitude and longitude of every zip code in the US for lightening fast response times.  Big cats need love too!",
  stack: 'React, Node, Express, MongoDB, MySQL',
  github: 'https://github.com/RomanEmmons/chonky-cat',
};

const rsvp = {
  title: 'RSVP-Up',
  image: rsvpgif,
  description:
    'This is a MeetUp clone that I created with an AGILE team of 3 other engineers.  I had a lot of fun scaling this app and load testing it with Artillery JS and New Relic.  It implements Redis data caching to benchmark at 10k rps with an average latency of 150ms while querying a database of over 35 million records!',
  stack: 'React, Node, Express, MySQL',
  github: 'https://github.com/RSVP-Up',
};

const stock = {
  title: 'Stock Tracker',
  image: stockgif,
  description:
    'Stock Tracker is a Robinhood clone built with microservice architecture.  It uses Docker Compose to ease microservice and database deployment and includes a testing suite with Jest, Mocha, and Chai for a gauranteed UX!',
  stack: 'React, Node, Express, MongoDB',
  github: 'https://github.com/Stock-Tracker',
};

const blue = {
  title: 'Blue Daisy Way',
  image: bluegif,
  description:
    'This is a fully responsive single page artist portfolio that implements CSS grid layout for a beautiful UI regardless of screen size!',
  stack: 'React, Node, Express, and vanilla CSS',
  github: 'https://github.com/RomanEmmons/Molly-Souza-Artist-Portfolio',
};

const repo = {
  title: 'Repo Retriever',
  image: repopng,
  description:
    "This full stack application utilizes the Github API to return information about a specified user's top 25 repos.  The repos are sorted by number of stars and persist in MongoDB.",
  stack: 'React, Node, Express, MongoDB',
  github: 'https://github.com/RomanEmmons/RepoRetriever',
};
module.exports = { chonky, rsvp, stock, blue, repo };
