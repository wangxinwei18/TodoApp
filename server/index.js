const express = require('express')

require('dotenv').config();
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

const port = process.env.PORT || 8000;

const connectDB = require('./db')

connectDB();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))
app.listen(port, console.log(`server running on port ${port}`));
