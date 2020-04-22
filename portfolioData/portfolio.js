const chonkygif = require('./ChonkyCat.gif');
const rsvpgif = require('./RSVP-Up.gif');
const stockgif = require('./StockTracker.gif');
const repopng = require('./RepoRetriever.png');

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
    'This is a MeetUp clone that I created with an AGILE team of 4 other engineers.  I had a lot of fun scaling this app and load testing it with Artillery JS and New Relic.  It implements Redis data caching to benchmark at 10k rps with an average latency of 150ms while querying a database of over 35 million records!',
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

const repo = {
  title: 'Repo Retriever',
  image: repopng,
  description:
    "This full stack application utilizes the Github API to return information about a specified user's top 25 repos. The repos are sorted by the number of stars they have and are stored in MongoDB for future reference!",
  stack: 'React, Node, Express, MongoDB',
  github: 'https://github.com/RomanEmmons/RepoRetriever',
};
module.exports = { chonky, rsvp, stock, repo };
