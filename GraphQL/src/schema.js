const { buildSchema } = require("graphql");

const schema = buildSchema(`

    type Table {
        name: String
        surname: String
        age: Int
        time: String
    }
    
    type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
    }
    
    type Post {
        id: ID
        title: String
        content: String
    }
    
    input UserInput {
        id: ID
        username: String!
        age: Int!
        posts: [PostInput]
    }
    
    input PostInput {
        id: ID
        title: String!
        content: String!
    }
    
    type Query {
        getAllUsers: [User]
        getTable: [Table]
        getUser(id: ID): User
    }
    
    type Mutation {
        createUser(input: UserInput): User
    }
`);

module.exports = schema;
