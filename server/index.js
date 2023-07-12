const { ApolloServer } = require("apollo-server");
const { typeDefs } = require('./schema/type-defs');
const {resolvers} = require('./schema/resolvers')

// Instantiate a new instance
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`YOUR API IS RUNNING AT: ${url}`);
})