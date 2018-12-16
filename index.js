const app = require('express')();
const schema = require('./graphql/index');
const expressGraphQL = require('express-graphql');
const playground = require ('graphql-playground-middleware-express').default;

app.get('/', function(req, res) {
    res.send('API - GraphQL Example');
});

app.use('/user', expressGraphQL({
    schema: schema.user,
    pretty: false // If true it'll put enter after each property
}));

// Add GraphQL Playground 
app.get('/playground', playground({ endpoint: '/user' }));

app.listen(3000, () => {
    console.log('Rodando na porta 3000...\nhttp://127.0.0.1:3000/playground');
});