const graphql = require('graphql');
const service = require('../../service/user');

const {
    userType,
    userInputType
} = require('./schema');

module.exports = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: userType,
            args: {
                user: { type: graphql.GraphQLNonNull(userInputType) }
            },
            resolve: (_, args) => {
                return service.create(args.user);
            }
        },
        removeUser: {
            type: graphql.GraphQLBoolean,
            args: {
                id: { type: graphql.GraphQLInt }
            },
            resolve: (_, args) => {
                return service.remove(args.id);
            }
        }
    }
});