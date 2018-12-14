const graphql = require('graphql');

// Maping knowledge SCHEMA
const knowledgeType = new graphql.GraphQLObjectType({
	name: 'Knowledge',
	fields: {
		id: { type: graphql.GraphQLInt },
		name: { type: graphql.GraphQLString }
	}
});

// Maping knowledge type for Input
const knowledgeInputType = new graphql.GraphQLInputObjectType({
	name: 'KnowledgeInput',
	description: 'Input knowledge payload',
	fields: () => ({
		id: { type: graphql.GraphQLInt },
		name: { type: graphql.GraphQLString },
	}),
});

module.exports = { knowledgeType, knowledgeInputType };