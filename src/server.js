require("dotenv").config()
const express = require("express")
const app = express()
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema")
const port = process.env.PORT || 3500
const cors = require("cors")
const connectDB = require("./config/connectDB")

connectDB()

app.use(cors())

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))


app.listen(port, console.log(`Server is running on port ${port}...`))