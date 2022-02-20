const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const app = express()
const mongoose = require('mongoose')
const schema = require('./schema/schema')

const port = process.env.PORT || 5000

mongoose.connect('mongodb+srv://joy:Joy1234@gql.pus5j.mongodb.net/gql')
mongoose.connection.once('open',() => console.log("MongoDB connected"))

app.use('/',graphqlHTTP({
    schema:schema,
    graphiql:true
}))

app.listen(port,() => console.log("Up and Running at port 5000"))