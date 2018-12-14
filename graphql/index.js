const graphql = require('graphql');

module.exports = {
    user : new graphql.GraphQLSchema({
        query : require('./user/query'),
        mutation: require('./user/mutation')
    })
};