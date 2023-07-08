const { ApolloServer } = require("apollo-server")

// Instantiate a new instance
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`YOUR API IS RUNNING AT: ${url}`);
})