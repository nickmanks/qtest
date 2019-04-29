# tech test

## usage
Use Node v10+ (npm 6+)

Start the graphql server:

```bash
cd server
npm ci
npm start
```

Served on [localhost:8000](http://localhost:8000) using data from [db.json](./server/db.json)

NOTE: may need to run `brew install watchman` as a dependency of nodemon.

Start the app in new shell and run:

> Install

```bash
npm ci
```

> Run

```bash
npx run
```

Go to [localhost:8080](http://localhost:8080) to view application

> Build

```bash
npx run build
```

> Test & Lint

```bash
npx run test
```

## notes

* 2 Routes (['/'](http://localhost:8080) and ['/faq'](http://localhost:8080/faq))
* All other routes go to a 404 page
* Webpack chunks are split over routes for some optimisation (chunkNames 'home' and 'faq')
* Demonstrated a couple of test techniques in [src/error/index.test.js](./src/error/index.test.js), [src/footer/index.test.js](./src/footer/index.test.js) and [src/faq/index.test.js](./src/faq/index.test.js) - namely how to test async service in hooks
* Usage of latest babel and react hooks
* Used SASS
* Linting of sass, markdown and js/x included (`npx run lint`)
* react-entry-loader - allows webpack to load jsx entry points
* npx-run - allows scripts to be written in js (see [script](./scripts/index.js))
* Service is a generatic data fetching implementation that can be substituted at low or high level for something (e.g. graphql or rest, axios or node-fetch etc..)

## error testing

* Inside `src/faq/index`, `src/home/index` and `src/loader/index` you can append a delay and error parameter to the useService function test delays and error notification (see [useService hook](./hooks/index.js))

## if I had more time / production-ready

* testing to 100% coverage
* storybook with snapshot serialisation
* create reusable simple components / ui library
* a robust fetch implementation for real services
* CI pipeline
* nested routing
* improved testing utilities
* dynamic reducers and more webpack optimisation
* etc..
