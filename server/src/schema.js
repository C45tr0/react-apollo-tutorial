import {
  makeExecutableSchema,
  addMockFunctionsToSchema, 
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Channel {
   id: ID!                # "!" denotes a required field
   name: String
}

# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
   channels: [Channel]    # "[]" means this is a list of channels
}
`;

const mockTypeDefs = JSON.parse(JSON.stringify(typeDefs));

const schema = makeExecutableSchema({ typeDefs, resolvers });
const mockSchema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema: mockSchema });

export { schema, mockSchema };