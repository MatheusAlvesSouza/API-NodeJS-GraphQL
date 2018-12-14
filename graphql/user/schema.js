const graphql = require('graphql');

const {
	knowledgeType,
	knowledgeInputType
} = require('../knowledge/schema');

// Maping user SCHEMA
const userType = new graphql.GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: graphql.GraphQLInt },
		name: { type: graphql.GraphQLString },
		age: { type: graphql.GraphQLInt },
		knowledge: { type: graphql.GraphQLList(knowledgeType) }, // From knowledgeType
	}
});

// Maping User type for Input
const userInputType = new graphql.GraphQLInputObjectType({
	name: 'UserInput',
	description: 'Input user payload',
	fields: () => ({
		id: { type: graphql.GraphQLInt },
		name: { type: graphql.GraphQLString },
		age: { type: graphql.GraphQLInt },
		knowledge: { type: graphql.GraphQLList(knowledgeInputType) }, 
	}),
});

module.exports = { userType, userInputType };