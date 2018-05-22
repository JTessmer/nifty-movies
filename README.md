# Nifty Movies

## What is this?

Nifty Movies (N.M. for short) is a simple application which connects to
[The Movie DB](https://www.themoviedb.org) and displays a searchable list of movies.

It does this using several modern technologies, with an emphasis on:
* Webpack -- for building and developing the application
* Express -- for providing a simple REST API to the frontend of the application
* React -- for displaying and interacting with the application content
* Axios -- for communicating between the frontend, backend, and 3rd-party API

## How do I use it?

#### Requirements
Nifty Movies was built with the assumption that the host machine has Node v9+, and has both [Yarn](https://www.npmjs.com/package/yarn) and [Webpack CLI](https://www.npmjs.com/package/webpack-cli) installed globally.

#### Development Environment
To run the application in Development mode, open a terminal and enter the following:

1. `yarn install` to install dependencies
2. `yarn start:dev` to initialize the server

There will be a brief delay as the Webpack Dev Server performs its initial build. Once finished, the final message should state, "Compiled successfully."

At this point, you can open your browser to http://localhost:3000

#### Production Environment
To run the application in Production mode, open a terminal and enter the following:

1. `yarn install` to install dependencies
2. `yarn build` to build and minify the application
3. `yarn start:prod` to initialize the server

After the final step, the final message should state, "Server listening on part 3000."

At this point, you can open your browser to http://localhost:3000

#### Caveats

- The application's configuration assumes that port 3000 is available. To use a different port, simply edit the following lines in the package.json file:

  > "start:dev": "**PORT=3000** NODE_ENV=development node server/start",
  >
  > "start:prod": "**PORT=3000** NODE_ENV=production node server/start",

  Update the `PORT=3000` value to the most convenient setting for your environment.

- While in Development mode, attempting to refresh the application while on a sub-path (i.e. `http://localhost:3000/details/{movie_id}`) will result in a blank screen with the following message:
  > Cannot GET /details/{movie_id}

  This results from limitations with running the webpack-dev-server through an Express proxy.

  To return to the application, simply navigate back to http://localhost:3000 and refresh the page.

  ***Note:*** This issue does not occur while operating in Production mode, as Production does not use the webpack-dev-server.
