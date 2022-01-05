# would-you-rather-game

This is the final assessment project for the Udacity's React & Redux course course, part of the React Nanodegree Program in collaboration with FWD initiative powered by ITIDA.

Would You Rather is a game where participants ask would you rather questions and participants answers them.
A Learderboard tracks the Questions and Answers of each participant.

The game is Cat Themed for fun, inspired by twitter.

## Getting Started

Instructions to setup the app on your local machine.

### Prerequisites

You can use npm the app.

* If you have node.js installed you absolutely have npm installed with it.

### Installing

Install dependencies and run with:
 
npm
```
npm install
npm start
```

## Technology

Primary technology: React & Redux

## File Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── .gitignore
├── public
│   ├── favicon.ico # React Icon as favicon.
│   ├── index.html # DO NOT MODIFY
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── Components
    |   └── Application.js # This is the root of app.
    |       |── CatsMeowIn.js
    |       |── CreateMeow.js
    |       |── Meows.js
    |       |── MeowsFinder.js
    |       |── MeowsList.js
    |       |── MeowsWall.js
    |       |── Navigation.js
    |       |── notfound.js
    |       |── Poll.js
    |       └── PollData.js
    |       
    |       
    |
    ├── Actions
    │   ├── ActionTypes.js
    │   ├── AuthorizedMeower.js
    │   ├── Meowers.js
    |   ├── Polls.js 
    │   └── shared.js # contains handleInitialData
    |
    ├── Middleware
    │   ├── index.js
    │   └── logger.js
    |
    ├── Reducers
    │   ├── AuthorizedMeower.js
    |   ├── index.js
    │   ├── Meowers.js
    │   └── Polls.js
    |
    ├── Utilities
    │   ├── _DATA.js
    │   └── helpers.js
    |   
    ├── index.css # Global styles.
    └── index.js # File for DOM rendering only
```
## App Data

The `_DATA.js` file represents a fake database and methods that let you access the data.

## Authors
Mohamed Bakr

## Acknowledgments
* [Udacity](https://www.udacity.com/)
* [FWD initiative powered by ITIDA](https://egfwd.com/)
* My mentor Ahmed Ibrahim
