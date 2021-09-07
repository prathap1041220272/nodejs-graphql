const express = require('express');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://sample:sample@sample.ln1kt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB")
})

// app.use('/', (req, res) => {
//     res.send("Welcome to GraphQL server. Use GraphQL endpoint at /graphql")
// })

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

app.post(
    "/graphqlQuery",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

app.listen(5000, () => {
    console.log('now listening for requests on port 5000');
});
