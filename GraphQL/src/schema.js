const { buildSchema } = require("graphql");

const schema = buildSchema(`

    type ReactTable {
        col1: String
        col2: String
        col3: Int
    }

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
    
    input TableRowInput {
        col1: String!
        col2: String!
        col3: Int!
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
        getReactTable: [ReactTable]
        
    }
    
    type Mutation {
        createUser(input: UserInput): User
        createRowInTable(input: TableRowInput): ReactTable
    }
`);

module.exports = schema;
