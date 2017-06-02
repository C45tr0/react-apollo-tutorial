import express from 'express';

import {
    graphqlExpress,
    graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';

import { schema, mockSchema } from './src/schema';

const PORT = 4000;

const server = express();

server.get('/', function(req, res) {
    res.send('Hellow World!');
});

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.use('/graphql-mock', bodyParser.json(), graphqlExpress({ schema: mockSchema }));

server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
server.use('/graphiql-mock', graphiqlExpress({ endpointURL: '/graphql-mock' }));

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));