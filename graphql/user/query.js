const graphql = require('graphql');
const service = require('../../service/user');

const {
    userType
} = require('./schema');

module.exports = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: userType,
            // Arguments when you call the query
            args: {
                id: { type: graphql.GraphQLInt }
            },
            resolve: (_, args) => {
                return service.find(args.id);
            }
        },
        users: {
            type: graphql.GraphQLList(userType),
            resolve: () => {
                return service.findAll();
            }
        }
    }
})