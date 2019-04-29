import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {resolvers, typeDefs} from './schema';

// eslint-disable-next-line
const PORT = process.env.PORT || 8000;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
});

server.applyMiddleware({app});

app.get('/ping', (req, res)=> {
  res.send({text: 'pong'});
});

app.listen(PORT, ()=>
  // eslint-disable-next-line
  console.log(`Listening at http://localhost:${PORT}/graphql`)
);
